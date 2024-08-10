const gridContainer = document.getElementById('word-search-grid');
const wordsList = document.getElementById('words-to-find');

function renderGrid(grid) {
    gridContainer.innerHTML = '';
    grid.forEach(row => {
        row.forEach(letter => {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.textContent = letter;
            gridContainer.appendChild(cell);
        });
    });
}

function renderWordList(words) {
    wordsList.innerHTML = '';
    words.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        wordsList.appendChild(listItem);
    });
}

renderGrid(wordSearchGrid);
renderWordList(tamilWords);

// Future code for handling user interaction and highlighting words will go here
