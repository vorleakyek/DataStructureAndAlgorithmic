function equalPairs(grid: number[][]): number {
    const gridSize: number = grid.length;

    // Create a new grid to store the transposed version of the original grid 
    let transposedGrid: number[][] = Array.from({length: gridSize}, ()=> Array(gridSize).fill(0));

    // Transpose the original grid and fill the transposedGrid
    for(let j=0; j<gridSize; j++) {
        for (let i=0; i< gridSize; i++) {
            transposedGrid[i][j] = grid[j][i];
        }
    }

    let equalPairsCount: number = 0;

    for (const row of grid) {
        for (const col of transposedGrid) {
            equalPairsCount += Number(row.toString()===col.toString());
        }
    }

    return equalPairsCount;

};
