function randomColor(){
    var r = Math.floor(Math.random() * 256 + 1);
    var g = Math.floor(Math.random() * 256 + 1);
    var b = Math.floor(Math.random() * 256 + 1);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function generateRandomColors(num) {
    let arr = [];
    for(let i = 0; i < num; i++ ){
        arr.push(randomColor())
    }
    return arr;
}

export {randomColor, generateRandomColors};