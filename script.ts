const numMax: number = 800;  

let divContainer = document.getElementById('square-container');

let button = document.getElementById('btn');
button.addEventListener('click', makingSq);

function makingSq() {
    let xVal = randomVal(0, numMax);
    let yVal = randomVal(0, numMax);
    new Dice(xVal, yVal);
}

function randomVal(min: any, max: any) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Dice {
    div: HTMLDivElement
    xVal: number
    yVal: number
    constructor(xVal, yVal) {
        let x =xVal;
        let y = yVal;
        this.div = document.createElement('div');
        this.div.classList.add('square');
        divContainer.append(this.div);
        this.rolling()
        console.log(this);
        let button2 = document.getElementById('btn2')
        button2.addEventListener('click', () => {
            this.updateRolling();
            
        })
       
    }

    rolling() {
        this.div.innerHTML = randomVal(1, 6);
    }

    updateRolling() {
        this.div.innerHTML = randomVal(1, 6);
    }
}