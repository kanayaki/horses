function randomInteger(min, max) {
    // случайное число от min до (max + 1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

function getresult() {
    console.log("X, Y")
    let x = parseInt(elementX);
    let y = parseInt(elementY);
    console.log(x, y)
    xresult = "Сгенерированный x равен " + x
    document.getElementById("xresult").innerText =  xresult;
    yresult = "Сгенерированный y равен " + y
    document.getElementById("yresult").innerText =  yresult;

    let z
    z = 1 / (x * y)

    zresult = z
    document.getElementById("zresult").innerText =  zresult;
}

const elementX = randomInteger(-100, 99);
const elementY = randomInteger(-100, 99);

const elementGet = document.getElementById("getresult");
elementGet.addEventListener('click', getresult);