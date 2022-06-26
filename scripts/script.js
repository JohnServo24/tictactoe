

const board = document.getElementById('board');
const cells = board.querySelectorAll('.cell');

// Displays and alternates between X & Y
let flag = 0;
cells.forEach(cell => {
    
    cell.addEventListener("click", e => {
        if(cell.textContent) return;
        else {
            if(flag === 0) {
                cell.textContent = "X";
                flag = 1;
            } else {
                cell.textContent = "O";
                flag = 0;
            }
        }
    });

});

