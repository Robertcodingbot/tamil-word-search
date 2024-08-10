function renderGrid(grid) {
    gridContainer.innerHTML = '';
    grid.forEach((row, rowIndex) => {
        row.forEach((letter, colIndex) => {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.textContent = letter;
            cell.dataset.row = rowIndex;
            cell.dataset.col = colIndex;
            gridContainer.appendChild(cell);
        });
    });

    // Adding event listeners for interactivity
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            cell.classList.toggle('highlighted');
        });
    });
}

renderGrid(wordSearchGrid);
renderWordList(tamilWords);
