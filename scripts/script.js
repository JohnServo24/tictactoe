// Set the board
    // Set an array of 9 items to store the board inputs
// Start game
    // Actively listen to the board for player taps
    // Run game until it ends
// Wait for player 1 to tap (X)
    // If player 1 tapped
        // Grab the info
        // Store it in the array
        // Switch to player 2 (O)
    // Wait for player 2 to tap
    // If player 2 tapped, store in array switch to player 1
    // Wait for player 1 to tap
    // Continue until end of game
// Check if there is a winner
    // Check if three cells in the same row has the same character
    // Same for column
    // Same for diagonal
// Check if the board is full
    // If board is full then stop game and output a tie
// If tic tac toed
    // Identify who is the winner
    // Output the winner
    // Give points to that winner
    // Ask the players if they want to clear the board



class Gameboard {
    constructor() {
        this.gameboard = new Array(9);
        this.boardNums = [[0, 1, 2],
                          [3, 4, 5],
                          [6, 7, 8],];
    }

    addItem(index, char) {
        this.gameboard[index] = char;
    }

    displayItem(turn, e) {
        if(turn === 0) e.target.innerText = "X";
        else e.target.innerText = "O";
    }
}

class CreatePlayer {
    constructor(player) {
        this.player = player;
        this.score = 0;
    }

    addScore() {
        this.score += 1;
    }
}

class Game extends Gameboard {
    player1 = new CreatePlayer("player1");
    player2 = new CreatePlayer("player2");

    constructor() {
        super(); 
        this.playerTurn = 0;
    }

    checkRows(gameboard, boardNums) {
        for(let i = 0; i < 3; i++) {
            for(let t = 0; t < 3; t++) {
                if(gameboard[boardNums[i][t]] === undefined) break;
                else if (gameboard[boardNums[i][0]] === gameboard[boardNums[i][1]] &&
                    gameboard[boardNums[i][0]] === gameboard[boardNums[i][2]]) 
                    return gameboard[boardNums[i][0]];
                break;
            }
        }
    }

    checkColumn(gameboard, boardNums) {
        for(let i = 0; i < 3; i++) {
            for(let t = 0; t < 3; t++) {
                if(gameboard[boardNums[t][i]] === undefined) break;
                else if (gameboard[boardNums[0][i]] === gameboard[boardNums[1][i]] &&
                    gameboard[boardNums[0][i]] === gameboard[boardNums[2][i]]) 
                    return gameboard[boardNums[0][i]];
                break;
            }
        }
    }

    checkDiagonal(gameboard) {
        if(gameboard[0] === 'X' && gameboard[4] === 'X' && gameboard[8] === 'X') return 'X';
        else if(gameboard[0] === 'O' && gameboard[4] === 'O' && gameboard[8] === 'O') return 'O';

        if(gameboard[2] === 'X' && gameboard[4] === 'X' && gameboard[6] === 'X') return 'X';
        else if(gameboard[2] === 'O' && gameboard[4] === 'O' && gameboard[6] === 'O') return 'O';
    }

    isFull(gameboard) {
        let count = 0;
        for(let i = 0; i < 9; i++) {
            if(gameboard[i] === undefined) count++;
        }
        if(count === 0) return "DRAW!";
    }

    checkWinner() {
        // Checks if theres a winner in a row
        const rowVal = this.checkRows(this.gameboard, this.boardNums);
        if(rowVal) return rowVal;

        // Checks if theres a winner in a column
        const columnVal = this.checkColumn(this.gameboard, this.boardNums);
        if(columnVal) return columnVal;

        // Checks if there is a winner in the diagonal parts
        const diagVal = this.checkDiagonal(this.gameboard, this.boardNums);
        if(diagVal) return diagVal;

        // Checks if the board is full
        const full = this.isFull(this.gameboard);
        if(full) return full;
    }

    generateElements() {
        const display = document.createElement("div");
        const text = document.createElement("div");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        const scoreDiv = document.createElement("div");
        const xSpan = document.createElement("span");
        const xScore = document.createElement("span");
        const ySpan = document.createElement("span");
        const yScore = document.createElement("span");

        const body = document.querySelector("body");

        body.append(display);

        display.append(text);
        text.append(h1);
        text.append(p);

        display.append(scoreDiv);
        scoreDiv.append(xSpan);
        scoreDiv.append(ySpan);

        display.classList.add("winner");
        text.classList.add("text");
        scoreDiv.classList.add("score-display");

        h1.id = "header";
        xScore.id = "player1Score";
        yScore.id = "player2Score";

        h1.textContent = "WINS THIS ROUND!";
        p.textContent = "Tap to play again.";
        xSpan.textContent = "X - ";
        ySpan.textContent = "Y - ";

        xSpan.append(xScore);
        ySpan.append(yScore);
    }

    outputWinner(winner) {
        this.generateElements();

    }

    changeTurns() {
        if(this.playerTurn === 0) this.playerTurn = 1;
        else this.playerTurn = 0;
    }

    gameListener(e) {
        if(this.checkWinner()) return;


        if (e.target.innerText) return;
        else {
            super.displayItem(this.playerTurn, e);
            super.addItem(e.target.id, e.target.innerText);
            this.changeTurns();
        }

        if(this.checkWinner()) this.outputWinner();
    }
}

const game = new Game();
const board = document.getElementById('board');
const cells = board.querySelectorAll('.cell');

// Displays and alternates between X & Y
cells.forEach(cell => {cell.addEventListener("click", e => {game.gameListener(e)});});

// i = 0
// Store i to temp
// push i
// add 3 to i
// push i
// add 3 to i 
// push i
// turn i to temp + 1
// for(let i = 0; i < 3; i++) {
//     let temp = i;
//     arr.push(i);
    
//     for(let t = 0; t < 2; t++) {
//         i += 3;
//         arr.push(i);
//     }
    
//     i = temp;
// }