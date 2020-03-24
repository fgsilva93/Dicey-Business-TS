var numMax = 800;
var divContainer = document.getElementById('square-container');
var button = document.getElementById('btn');
button.addEventListener('click', makingSq);
function makingSq() {
    var xVal = randomVal(0, numMax);
    var yVal = randomVal(0, numMax);
    new Dice(xVal, yVal);
}
// interface Dicey {
//     xVal: number,
//     yVal: number
// }
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var Dice = /** @class */ (function () {
    function Dice(xVal, yVal) {
        var _this = this;
        var x = xVal;
        var y = yVal;
        this.div = document.createElement('div');
        this.div.classList.add('square');
        divContainer.append(this.div);
        this.rolling();
        console.log(this);
        var button2 = document.getElementById('btn2');
        button2.addEventListener('click', function () {
            _this.updateRolling();
        });
    }
    Dice.prototype.rolling = function () {
        this.div.innerHTML = randomVal(1, 6);
    };
    Dice.prototype.updateRolling = function () {
        this.div.innerHTML = randomVal(1, 6);
    };
    return Dice;
}());
