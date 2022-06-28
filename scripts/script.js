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

    addItem(index, char) {
        this.gameboard[index] = char;
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

    checkWinner() {
        let i = 0;
        let t = 0;
        let winner = "";
        let arr = [];

        // Checks if theres a winner in a row
        check: for(i = 0; i < 9; i++) {
            arr[i] = this.gameboard[i];

            console.log(arr);

            if(arr.length % 3 === 0) {
                let checker = 0;
                for(t = i - 2; t < arr.length; t++) {
                    if(arr[t] === arr[t+1] && arr[t] !== undefined && arr[t+1] !== undefined) checker += 1;
                    
                    if(checker === 2) {
                        winner = arr[t];
                        break check;
                    }
                }
            }
        }

        // Checks if theres a winner in a column
         for(let i = 0; i < 3; i++) {
            let temp = i;
            arr.push(i);
    
            for(let t = 0; t < 2; t++) {
                 i += 3;
                arr.push(i);
            }
    
            i = temp;
        }
    }
}

const game = new Game();

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
                game.addItem(cell.id, "X");
                flag = 1;
                
            } else {
                cell.textContent = "O";
                game.addItem(cell.id, "O");
                flag = 0;
            }
        }
    });

});

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