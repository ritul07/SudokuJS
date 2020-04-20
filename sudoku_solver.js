// validates that whether the number is valid in that particular cell, rowwise and columnwise
isValid = (board, row, col, k) => {
  try {
    if (board.length == 9) {
        for (let i = 0; i < board.length; i++) {
            const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const n = 3 * Math.floor(col / 3) + i % 3;
            if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
                return false;
            }
        }
        return true;
    } else {
        for (let i = 0; i < board.length; i++) {
            if (board[row][i] == k || board[i][col] == k) {
                return false;
            }
        }
        return true;
    }
  } catch(err) {
      alert(`Error: ${err}`);
  }
}

// solves the sudoku
sodokoSolver = (data) => {
  try {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i][j] == 0) {
                for (let k = 1; k <= data.length; k++) {
                    if (isValid(data, i, j, k)) {
                        data[i][j] = k;
                        if (sodokoSolver(data)) {
                            return true;
                        } else {
                            data[i][j] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
  } catch(err) {
      alert(`Error: ${err}`);
  }
}