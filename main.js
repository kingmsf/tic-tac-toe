let gameboardElement = document.getElementById("gameBoard")
let turnerElement = document.getElementById("turner")
let cell = document.getElementsByClassName("cell")
let players;
let span = document.getElementById("span")
let gameboard = []
let $ = document;
gameboard.push(cell)
const player = {
    player1: "x",
    player2: "o",
}
span.innerHTML = player.player1
players = player.player2
function factory() {
    gameboard.forEach(x => {
        for (let i = 0; i < x.length; i++) {
            x[i].addEventListener("click", () => {
                if (x[i].innerHTML === "") {
                    players === "x" ? players = "o" : players = "x"
                    span.innerHTML === "x" ? span.innerHTML = "o" : span.innerHTML = "x"
                    x[i].append(players)
                }
            })
        }
    })
}
factory()
function WinTest() {
    rowTest()
    columnTest()
    digonalTest()
}
function rowTest() {
    let row1 = [cell[0].innerHTML, cell[1].innerHTML, cell[2].innerHTML];
    let row2 = [cell[3].innerHTML, cell[4].innerHTML, cell[5].innerHTML];
    let row3 = [cell[6].innerHTML, cell[7].innerHTML, cell[8].innerHTML];
    const checkRowX = row1.every(x => x == "x") || row2.every(x => x == "x") || row3.every(x => x == "x")
    const checkRowO = row1.every(x => x == "o") || row2.every(x => x == "o") || row3.every(x => x == "o")
    if (checkRowX) {
        Swal.fire("x win")
        endGame()
    } else if (checkRowO) {
        Swal.fire("o win")
        endGame()
    }
}
function columnTest() {
    let col1 = [cell[0].innerHTML, cell[3].innerHTML, cell[6].innerHTML];
    let col2 = [cell[1].innerHTML, cell[4].innerHTML, cell[7].innerHTML];
    let col3 = [cell[2].innerHTML, cell[5].innerHTML, cell[8].innerHTML];
    const checkColx = col1.every(x => x == "x") || col2.every(x => x == "x") || col3.every(x => x == "x")
    const checkColO = col1.every(x => x == "o") || col2.every(x => x == "o") || col3.every(x => x == "o")
    if (checkColx) {
        Swal.fire("x win")
        endGame()
    } else if (checkColO) {
        Swal.fire("o win")
        endGame()
    }
}
function digonalTest() {
    let dig1 = [cell[0].innerHTML, cell[4].innerHTML, cell[8].innerHTML];
    let dig2 = [cell[2].innerHTML, cell[4].innerHTML, cell[6].innerHTML];
    const checkDigX = dig1.every(x => x == "x") || dig2.every(x => x == "x")
    const checkDigO = dig1.every(x => x == "o") || dig2.every(x => x == "o")
    if (checkDigX) {
        Swal.fire("x win")
        endGame()

    } else if (checkDigO) {
        Swal.fire("o win")
        endGame()
    }
}
function startGame() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = ""
    }
    gameboardElement.classList.remove("hide")
    turnerElement.classList.remove("hide")
    let = $.getElementById("startBtn").innerHTML = "restart Game"
}
function endGame() {
    gameboardElement.classList.add("hide")
    turnerElement.classList.add("hide")
}