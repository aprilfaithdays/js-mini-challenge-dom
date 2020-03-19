/***** Deliverable 1 *****/
document.addEventListener('DOMContentLoaded', event => {
    const header = document.querySelector("#header")
    console.log("Here's your header:", header.innerHTML)

    /***** Deliverable 2 *****/
    header.style.color = "red"
    
    /***** Deliverable 3 *****/
    // console.log("PLAYERS array looks like this:", PLAYERS)
    let team = PLAYERS
    
    const renderTeam = team => {
        let container = document.querySelector(".player-container")
        team.forEach(player => {
            let rendered = renderPlayer(player)
            container.appendChild(rendered)
        });
    }
    
    const renderPlayer = player =>{
        let div = document.createElement('div')
        div.class = "player"
        div.dataset.number = `"${player.number}"`
        div.innerHTML = `
            <h3>
            ${player.name} (<em>${player.nickname}</em>)
            </h3>
            <img src="${player.photo}" alt="${player.name}">
        `
        return div
    }
    renderTeam(team)

    /***** Deliverable 4 *****/
    let removePlayer = document.querySelectorAll('div')[5]
    removePlayer.remove()
})