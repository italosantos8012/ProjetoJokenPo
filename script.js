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
        result.innerHTML = '"A máquina ganhou"'
        gifContainer.style.visibility = "visible";
        imgLeft.src = "./assets/rock-left.png"
        imgRight.src = "./assets/paper-right.png"
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }

    else if (
        human === "paper" && machine === "scissors") {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = '"A máquina ganhou"'
        gifContainer.style.visibility = "visible";
        imgLeft.src = "./assets/paper-left.png"
        imgRight.src = "./assets/scissors-right.png"
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }

    else if (human === "scissors" && machine === "rock") {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = '"A máquina ganhou"'
        gifContainer.style.visibility = "visible";
        imgRight.src = "./assets/rock-right.png"
        imgLeft.src = "./assets/scissors-left.png"
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }

    //HUMANO GANHA
    else if (human === "paper" && machine === "rock") {
        yoursScoreNumber++
        yoursScore.innerHTML = yoursScoreNumber
        result.innerHTML = '"Você ganhou"'
        gifContainer.style.visibility = "visible";
        imgLeft.src = "./assets/paper-left.png"
        imgRight.src = "./assets/rock-right.png"
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }
    else if (human === "scissors" && machine === "paper") {
        yoursScoreNumber++
        yoursScore.innerHTML = yoursScoreNumber
        result.innerHTML = '"Você ganhou"'
        gifContainer.style.visibility = "visible";
        imgLeft.src = "./assets/scissors-left.png"
        imgRight.src = "./assets/paper-right.png"
        setTimeout(() => {
            gifContainer.style.visibility = "hidden";
        }, 1100);
    }
    else if (human === "rock" && machine === "scissors") {
        yoursScoreNumber++
        yoursScore.innerHTML = yoursScoreNumber
        result.innerHTML = '"Você ganhou"'
        gifContainer.style.visibility = "visible";
        imgLeft.src = "./assets/rock-left.png"
        imgRight.src = "./assets/scissors-right.png"
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
    body.classList.toggle('dark-mode');
    container.classList.toggle("cont-dark")
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