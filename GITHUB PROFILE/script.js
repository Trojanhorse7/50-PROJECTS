const APIURL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');

// USING ASYNC AND AWAIT TO GET USER DATA
async function getUser(username) {
    try {
        const response = await axios.get(APIURL + username);
        createUserCard(response.data);
        getRepos(username);
    } catch (error) {
        createErrorCard('No profile with this username');
    }
}

// USING ASYNC AND AWAIT TO GET USER REPOS
async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created');
        addReposToCard(data)
    } catch(err) {
        createErrorCard('Problem fetching repos');
    }
}

//CREATING USER DATA CARD
function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${userID}</h2>
        ${userBio}
        <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
    </div>
    </div>
    `
    main.innerHTML = cardHTML;
    
}

// CREATING ERROR CARD
function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML;
}

// ADDING REPOS TO CARD
function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 25)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}


// FORM SUBMIT EVENT LISTENER
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = search.value;

    if(username !== '') {
        getUser(username);
        search.value = '';
    }
});