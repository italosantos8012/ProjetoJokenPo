const i = setInterval(function () {

    clearInterval(i);

    document.getElementById("loading").style.display = "none";
    document.querySelector(".container-user-name").style.display = "flex";
}, 4500);

const buttonUserName = document.querySelector(".button-user-name")

function userName() {

    let inputUserName = document.querySelector(".input-user-name").value
    inputUserName = inputUserName.toUpperCase()
    const name = document.querySelector(".name")
    const pYours = document.querySelector(".p-yours")

    name.innerHTML = inputUserName
    pYours.innerHTML = inputUserName
    document.querySelector(".container-user-name").style.display = "none"
    document.querySelector(".container").style.display = "flex";
}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const ramdom = Math.floor(Math.random() * 3)

    return choices[ramdom]
}

let machineScoreNumber = 0
let yoursScoreNumber = 0

const playGame = (human, machine) => {
    const result = document.querySelector("#result")
    const machineScore = document.querySelector("#machine-score")
    const yoursScore = document.querySelector("#yours-score")
    const imgLeft = document.querySelector(".img-left")
    const imgRight = document.querySelector(".img-right")
    const gifContainer = document.querySelector(".box-img")
    const audioDerrota = new Audio("./assets/som-derrrota.mp3")
    const audioVitoria = new Audio("./assets/som-vitoria.mp3")
    audioVitoria.volume = .25

    //EMPATE
    if (human === "paper" && machine === "paper") {
        result.innerHTML = '"Empatou"'
        gifContainer.style.visibility = "visible";
        imgLeft.src = "./assets/paper-left.png"
        imgRight.src = "./assets/paper-right.png"
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }

    if (human === "rock" && machine === "rock") {
        result.innerHTML = '"Empatou"'
        gifContainer.style.visibility = "visible";
        imgLeft.src = "./assets/rock-left.png"
        imgRight.src = "./assets/rock-right.png"
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }
    if (human === "scissors" && machine === "scissors") {
        result.innerHTML = '"Empatou"'
        gifContainer.style.visibility = "visible";
        imgLeft.src = "./assets/scissors-left.png"
        imgRight.src = "./assets/scissors-right.png"
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }

    //MAQUINA GANHA
    else if (human === "rock" && machine === "paper") {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = '"Jorginho ganhou"'
        gifContainer.style.visibility = "visible";
        imgLeft.src = "./assets/rock-left.png"
        imgRight.src = "./assets/paper-right.png"
        audioDerrota.play()
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }

    else if (
        human === "paper" && machine === "scissors") {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = '"Jorginho ganhou"'
        gifContainer.style.visibility = "visible";
        imgLeft.src = "./assets/paper-left.png"
        imgRight.src = "./assets/scissors-right.png"
        audioDerrota.play()
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }

    else if (human === "scissors" && machine === "rock") {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = '"Jorginho ganhou"'
        gifContainer.style.visibility = "visible";
        imgRight.src = "./assets/rock-right.png"
        imgLeft.src = "./assets/scissors-left.png"
        audioDerrota.play()
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }

    //HUMANO GANHA
    else if (human === "paper" && machine === "rock") {
        yoursScoreNumber++
        yoursScore.innerHTML = yoursScoreNumber
        result.innerHTML = `"${inputUserName} ganhou"`
        gifContainer.style.visibility = "visible";
        imgLeft.src = "./assets/paper-left.png"
        imgRight.src = "./assets/rock-right.png"
        audioVitoria.play()
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }
    else if (human === "scissors" && machine === "paper") {
        yoursScoreNumber++
        yoursScore.innerHTML = yoursScoreNumber
        result.innerHTML = `"${inputUserName} ganhou"` 
        gifContainer.style.visibility = "visible";
        imgLeft.src = "./assets/scissors-left.png"
        imgRight.src = "./assets/paper-right.png"
        audioVitoria.play()
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }
    else if (human === "rock" && machine === "scissors") {
        yoursScoreNumber++
        yoursScore.innerHTML = yoursScoreNumber
        result.innerHTML = `"${inputUserName} ganhou"`
        gifContainer.style.visibility = "visible";
        imgLeft.src = "./assets/rock-left.png"
        imgRight.src = "./assets/scissors-right.png"
        audioVitoria.play()
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }
}

const playHuman = (human) => {
    playGame(human, playMachine())
}

function darkMode() {
    const body = document.querySelector('body');
    const container = document.querySelector(".container")
    const nameDark = document.querySelector(".name")
    body.classList.toggle('dark-mode');
    container.classList.toggle("cont-dark")
    nameDark.classList.toggle("name-dark")
}

function reset() {
    const machineScore = document.querySelector("#machine-score")
    const yoursScore = document.querySelector("#yours-score")
    const result = document.querySelector("#result")

    result.innerHTML = ''
    machineScore.innerHTML = 0
    yoursScore.innerHTML = 0

    machineScoreNumber = 0
    yoursScoreNumber = 0
}
