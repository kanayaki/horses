function verify() {
    console.log("a, b")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    console.log(a, b)

    if (a > b) {
        result = "Число A больше числа B"
        check = true;
    } 
    else if (a < b) {
        result = "Число A меньше числа B"
        check = false;
    }
    else {
        result = "Число A равно числу B"
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

let check;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)