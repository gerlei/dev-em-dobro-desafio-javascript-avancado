const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = 
        `
        <div class="info">
        <img src="${user.avatarUrl}" alt="Foto de perfil do        usuário" />
        <div class="data">
            <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
            <p>${user.bio ?? 'Não possui bio cadatrada'}</p>
            <br>
            <h4>Seguidores: ${user.followers}  &nbsp || &nbsp  Seguindo: ${user.following}</h4>
        </div>
        </div>
        `

        let repositoriesItens = ''

        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name} <br> Forks: ${repo.forks_count} - Stars: ${repo.stargazers_count} - Watchers: ${repo.watchers_count} - Linguagem: ${repo.language}</a></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }

        let eventsItens = ''
        user.events.forEach(event => eventsItens += `<li>${event.repo.name} - ${event.type}</li>`)

        this.userProfile.innerHTML += `<div class="events">
                                        <h2>Eventos</h2>
                                        <br>
                                        <ul>${eventsItens}</ul>
                                        </div>`
        
    
    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export {screen}