const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let stop = 2
const trafficlght = ( event) => {


    function sleep(ms) {
        return new Promise((reolve, reject) => {
            setInterval(() => {
                reolve(ms);
            }, ms);
        })
    }

    async function trocarCor() {
        while (stop <=2) {
            img.src = "img/vermelho.jpg"
            await sleep(2000);
            img.src = "img/verde.jpg"
            await sleep(2000);
            img.src = "img/amarelo.jpg"
            await sleep(2000);
            
        }
    }

    if (event.target.id == "red") {
        img.src = "img/vermelho.jpg"

    } else if (event.target.id == "yellow"){
        img.src = "img/amarelo.jpg"

    } else if (event.target.id == "green"){
        img.src = "img/verde.jpg"

    } else if (event.target.id == "automatic"){
        trocarCor()

    }
    
    
}



buttons.addEventListener('click', trafficlght);


