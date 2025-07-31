function createSquare(cellSize){
    let container = document.querySelector('#grid-container');

    //create new grid cell
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');

    gridCell.style.width = cellSize + 'px';
    gridCell.style.height = cellSize + 'px';

    container.appendChild(gridCell);
}

function createGrid(height, width) {
    //calculate cell size
    let gridSize = 800;
    let cellSize = gridSize / height;

    //create grid of cells, height and width are in number of cells
    for (let i = 0; i < height * width; i++) {
        createSquare(cellSize);
    }
}

function changeCellColour(cell, type) {
    switch (type) {
        case 'enter':
            cell.style.backgroundColor = 'grey';
            break;
        case 'leave':
            cell.style.backgroundColor = 'light-grey';
            break;
    }
}

function addCellEventListeners(cell) {
    cell.addEventListener('mouseenter', () => changeCellColour(cell, 'enter'));
    cell.addEventListener('mouseleave', () => changeCellColour(cell, 'leave'));
}

function getValidSize() {
    let newSize = prompt('Enter new grid height: ');
    while (!(newSize > 0) || !(newSize <= 100)) {
        if (newSize === null) {
            break;
        }
        alert('Grid height must be between 1 and 100');
        newSize = prompt('Enter new grid height: ');
    }
    return newSize;
}

function resize() {
    const newSize = getValidSize();
    let container = document.querySelector('#grid-container');
    //clear all cells
    container.innerHTML = '';

    createGrid(newSize, newSize);

    //set up event listners for hovering over cells
    let gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(cell => addCellEventListeners(cell));
}

createGrid(16, 16);

//set up event listners for hovering over cells
let gridCells = document.querySelectorAll('.grid-cell');
gridCells.forEach(cell => addCellEventListeners(cell));

//set up button functionality
let button = document.querySelector('#resize');
button.addEventListener('click', () => resize());