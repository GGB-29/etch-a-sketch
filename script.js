function createSquare(){
    let container = document.querySelector('#grid-container');

    //create new grid cell
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');

    container.appendChild(gridCell);
}

function createGrid(height, width) {
    //create grid of cells, height and width are in number of cells
    for (let i = 0; i < height * width; i++) {
        createSquare();
    }
}

function changeCellColour(cell, type) {
    switch (type) {
        case 'enter':
            cell.style.backgroundColor = 'grey';
            break;
        case 'leave':
            cell.style.backgroundColor = 'white';
            break;
    }
}

function addCellEventListeners(cell) {
    console.log('test');
    cell.addEventListener('mouseenter', () => changeCellColour(cell, 'enter'));
    cell.addEventListener('mouseleave', () => changeCellColour(cell, 'leave'));
}

createGrid(16, 16);

//set up event listners for hovering over cells
let gridCells = document.querySelectorAll('.grid-cell');
console.log('test');
gridCells.forEach(cell => addCellEventListeners(cell));