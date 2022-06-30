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
        let gameboard = this.gameboard;

        
        // The position of the board
        const boardNums = [[0, 1, 2],
                           [3, 4, 5],
                           [6, 7, 8],
                          ];

        // Checks if theres a winner in a row
        for(i = 0; i < 3; i++) {
            for(t = 0; t < 3; t++) {
                if(gameboard[boardNums[i][t]] === undefined) break;
                else if (gameboard[boardNums[i][0]] === gameboard[boardNums[i][1]] &&
                    gameboard[boardNums[i][0]] === gameboard[boardNums[i][2]]) 
                    return gameboard[boardNums[i][0]];
                break;
            }
        }

        // Checks if theres a winner in a column
        for(i = 0; i < 3; i++) {
            for(t = 0; t < 3; t++) {
                if(gameboard[boardNums[t][i]] === undefined) break;
                else if (gameboard[boardNums[0][i]] === gameboard[boardNums[1][i]] &&
                    gameboard[boardNums[0][i]] === gameboard[boardNums[2][i]]) 
                    return gameboard[boardNums[0][i]];
                break;
            }
        }

        // Checks if there is a winner in the diagonal parts
        if(gameboard[0] === 'X' && gameboard[4] === 'X' && gameboard[8] === 'X') return 'X';
        else if(gameboard[0] === 'O' && gameboard[4] === 'O' && gameboard[8] === 'O') return 'O';

        if(gameboard[2] === 'X' && gameboard[4] === 'X' && gameboard[6] === 'X') return 'X';
        else if(gameboard[2] === 'O' && gameboard[4] === 'O' && gameboard[6] === 'O') return 'O';

        
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
                flag = 1;
                
            } else {
                cell.textContent = "O";
                flag = 0;
            }
            game.addItem(cell.id, cell.textContent);
            // console.log(game.checkWinner());
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