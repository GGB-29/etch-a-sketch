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

createGrid(16, 16);

//set up event listners for hovering over cells
