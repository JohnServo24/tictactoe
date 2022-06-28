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
    }

    set addItem(char) {
        this.gameboard.push(char);
    }
}

class createPlayer {
    constructor(player, symbol) {
        this.player = player;
        this.symbol = symbol;
    }
}

class Game {

    static player1 = new createPlayer("Player 1", "X");
    static player2 = new createPlayer("Player 2", "O");

    constructor() {
        this.player1Score = 0;
        this.player2Score = 0;
    }
}

const gameBoard = new Gameboard();

// gameBoard.addItem = "X";
// gameBoard.addItem = "X";
// gameBoard.addItem = "X";
// gameBoard.addItem = "X";
// gameBoard.addItem = "X";
// gameBoard.addItem = "X";
// gameBoard.addItem = "X";
// gameBoard.addItem = "X";
// gameBoard.addItem = "X";
// gameBoard.addItem = "X";

const board = document.getElementById('board');
const cells = board.querySelectorAll('.cell');

// Displays and alternates between X & Y
let flag = 0;
cells.forEach(cell => {

    cell.addEventListener("click", e => {
        if (cell.textContent) return;
        else {
            if (flag === 0) {
                cell.textContent = "X";
                flag = 1;
            } else {
                cell.textContent = "O";
                flag = 0;
            }
        }
    });

});

