const tamilWords = ["தமிழ்", "சமயம்", "மலை", "விழா", "படம்", "நடிப்பு", "ஆசிரியர்", "நூல்", "நாட்டு", "இயற்கை"];

function generateGrid(size, words) {
    const grid = Array(size).fill(null).map(() => Array(size).fill(' '));

    // Example of placing words in the grid
    words.forEach((word, index) => {
        const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
        if (direction === 'horizontal') {
            const row = index;
            const col = Math.floor(Math.random() * (size - word.length));
            for (let i = 0; i < word.length; i++) {
                grid[row][col + i] = word[i];
            }
        } else {
            const col = index;
            const row = Math.floor(Math.random() * (size - word.length));
            for (let i = 0; i < word.length; i++) {
                grid[row + i][col] = word[i];
            }
        }
    });

    // Fill in remaining spaces with random Tamil letters
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (grid[i][j] === ' ') {
                grid[i][j] = String.fromCharCode(2944 + Math.floor(Math.random() * 128));
            }
        }
    }

    return grid;
}

const gridSize = 10;
const wordSearchGrid = generateGrid(gridSize, tamilWords);
