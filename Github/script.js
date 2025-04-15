const getData = async (username) => {
    const req = await fetch(`https://api.github.com/users/${username}`) 
    return req
}

const resultHtml = document.querySelector('.result')
const formValue = document.querySelector('input')
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

document.querySelector('.search').addEventListener('submit', async (e) => {
    e.preventDefault()

    let loop = true

    const loading = (async () => {
        while (loop) {
            resultHtml.innerHTML = `<div class="loader"></div>`
            await sleep(1000)
        }
    })()
    
    const req = await getData(formValue.value)
    
    
    if(!req.ok){
        loop = false
        resultHtml.innerHTML = `
            <div class="profile-not-found">
                Nenhum perfil foi encontrado com esse nome de usuário.
                <br/>
                Tente novamente
            </div>`
    }
    else{
        data = await req.json()
        loop = false
        const name = data.name
        const profilePhoto = data.avatar_url
        const bio = data.bio ? null : "<span>PERFIL SEM BIO</span>"



        resultHtml.innerHTML = `
            <div class="profile">
                <div class="photo">
                    <img src="${profilePhoto}"/>
                </div>
                <div class="info">
                    <p class="name">${name}</p>

                    <p class="about">
                        ${bio}
                    </p>
                </div>
            </div>`
    }

})