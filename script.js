const img = document.getElementById('img');
const buttons = document.getElementById('buttons');


const trafficlght = ( event) => {
    if (event.target.id == "red") {
        img.src = "img/vermelho.jpg"

    } else if (event.target.id == "yellow"){
        img.src = "img/amarelo.jpg"

    } else if (event.target.id == "green"){
        img.src = "img/verde.jpg"

    } else if (event.target.id == "automatic"){
        setTimeout(1000)
        img.src = "img/vermelho.jpg"
        setTimeout(1000)
        img.src = "img/amarelo.jpg"
        setTimeout(1000)

    }
    
}

buttons.addEventListener('click' , trafficlght);

