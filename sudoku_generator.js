// initial value of 9x9 puzzle as string
let initPuzzle_9x9;

// initial value of 3x3 puzzle as string
let initPuzzle_3x3;

// value of 9x9 puzzle as Multi-dimensional array
let puzzle_9x9;

// value of 3x3 puzzle as Multi-dimensional array
let puzzle_3x3;

// stores which button has been clicked by the user,
// i.e 3x3 puzzle or 9x9 puzzle
let clickedBtn;



// draws the sudoku on the screen, whichever is selected by the user
draw = (id) => {
  try {
    clickedBtn = id;
    if (clickedBtn == 3) {
        let s = '<table class="table">\n';

        for (let i = 0; i < 3; ++i) {
            s += '<tr>';
            for (let j = 0; j < 3; ++j) {
                let c = 'cell';
                if ((i + 1) % 3 == 0 && j % 3 == 0) {
                    c = 'cell3';
                } else if ((i + 1) % 3 == 0) {
                    c = 'cell1';
                } else if (j % 3 == 0) {
                    c = 'cell2';
                }
                s += '<td class="' + c + '"><input class="input" type="text" size="1" maxlength="1" id="C' + (i * 3 + j) + '"></td>';
            }
            s += '</tr>\n';
        }

        s += '</table>';
        document.getElementById('sudokuTable').innerHTML = s;

        set_3x3('203100001');
        puzzle_3x3 = [
            [2, 0, 3],
            [1, 0, 0],
            [0, 0, 1]

        ];
        initPuzzle_3x3 = '203100001';
    } else {
        let s = '<table class="table">\n';

        for (let i = 0; i < 9; ++i) {
            s += '<tr>';
            for (let j = 0; j < 9; ++j) {
                let c = 'cell';
                if ((i + 1) % 3 == 0 && j % 3 == 0) {
                    c = 'cell3';
                } else if ((i + 1) % 3 == 0) {
                    c = 'cell1';
                } else if (j % 3 == 0) {
                    c = 'cell2';
                }
                s += '<td class="' + c + '"><input class="input" type="text" size="1" maxlength="1" id="C' + (i * 9 + j) + '"></td>';
            }
            s += '</tr>\n';
        }

        s += '</table>';
        document.getElementById('sudokuTable').innerHTML = s;

        set_9x9('001700509573024106800501002700295018009400305652800007465080071000159004908007053');
        puzzle_9x9 = [
            [0, 0, 1, 7, 0, 0, 5, 0, 9],
            [5, 7, 3, 0, 2, 4, 1, 0, 6],
            [8, 0, 0, 5, 0, 1, 0, 0, 2],
            [7, 0, 0, 2, 9, 5, 0, 1, 8],
            [0, 0, 9, 4, 0, 0, 3, 0, 5],
            [6, 5, 2, 8, 0, 0, 0, 0, 7],
            [4, 6, 5, 0, 8, 0, 0, 7, 1],
            [0, 0, 0, 1, 5, 9, 0, 0, 4],
            [9, 0, 8, 0, 0, 7, 0, 5, 3]

        ];

        initPuzzle_9x9 = '001700509573024106800501002700295018009400305652800007465080071000159004908007053';
    }

    // promise & error handling
    let myPromise = new Promise((resolve, reject) => {
      setTimeout( function() {
        resolve("Sudoku created successfully!")
      }, 1000)
    })

    myPromise.then((successMessage) => {
      try {
        alert(`A ${clickedBtn}x${clickedBtn} ${successMessage}`);
    } catch(err) {
        alert(`Error: ${err}`);
    }
    })

  } catch(err) {
      alert(`Error: ${err}`);
  }
}


// sets the 3x3 puzzle
set_3x3 = (str) => {
  try {
    if (str != null && str.length >= 9) {
        for (let i = 0; i < 9; ++i) {
            document.getElementById('C' + i).value = '';
        }
        for (let j = 0; j < 9; ++j) {
            if (str.substr(j, 1) >= 1 && str.substr(j, 1) <= 3) {
                document.getElementById('C' + j).value = str.substr(j, 1);
            }
        }
    }
  } catch(err) {
      alert(`Error: ${err}`);
  }
}

// sets the 9x9 puzzle
set_9x9 = (str) => {
  try {
    if (str != null && str.length >= 81) {
        for (let i = 0; i < 81; ++i) {
            document.getElementById('C' + i).value = '';
        }
        for (let j = 0; j < 81; ++j) {
            if (str.substr(j, 1) >= 1 && str.substr(j, 1) <= 9) {
                document.getElementById('C' + j).value = str.substr(j, 1);
            }
        }
    }
  } catch(err) {
      alert(`Error: ${err}`);
  }
}

// clears the puzzle
clear_input = () => {
  try {
    if (clickedBtn == 9) {
        for (let i = 0; i < 81; ++i) {
            document.getElementById('C' + i).value = '';
        }
    } else {
        for (let i = 0; i < 9; ++i) {
            document.getElementById('C' + i).value = '';
        }
    }
  } catch(err) {
      alert(`Error: ${err}`);
  }
}




// calls the sodokoSolver() function for the required puzzle
solve = () => {
  try {
    if (clickedBtn == 9) {
        sodokoSolver(puzzle_9x9); //  passes the puzzle as arg
        display_9x9();

    } else {
        sodokoSolver(puzzle_3x3);
        display_3x3();

    }
  } catch(err) {
      alert(`Error: ${err}`);
  }
}

// fills the cells with the solution, called inside the solve() function
let arr_9x9 = [];

display_9x9 = () => {
  try {
    for (let i = 0; i < 9; i++) {
        arr_9x9.push(puzzle_9x9[i].join(''));
    }
    arr_9x9 = arr_9x9.join('');
    set_9x9(arr_9x9);
  } catch(err) {
      alert(`Error: ${err}`);
  }
}

let arr_3x3 = [];

display_3x3 = () => {
  try {
    for (let i = 0; i < 3; i++) {
        arr_3x3.push(puzzle_3x3[i].join(''));
    }
    arr_3x3 = arr_3x3.join('');
    set_3x3(arr_3x3);
  } catch(err) {
      alert(`Error: ${err}`);
  }
}


// calls validateSudoku() function
validator = () => {
  try {
    if (clickedBtn == 3) {
        validateSudoku(puzzle_3x3);
    } else {
        validateSudoku(puzzle_9x9);
    }
  } catch(err) {
      alert(`Error: ${err}`);
  }
}


// validates the sudoku
let check_3x3 = "";
let check_9x9 = "";

validateSudoku = (data) => {
  try {

    // validator for 3x3 puzzle
    if (clickedBtn == 3) {
        for (let i = 0; i < 9; i++) {
            check_3x3 += document.getElementById('C' + i).value;
        }
        sodokoSolver(data);
        display_3x3();

        for (let i = 0; i < 9; i++) {
            if (initPuzzle_3x3[i] == '0') {
                if (check_3x3[i] != arr_3x3[i]) {
                    document.getElementById('C' + i).style.color = "red"; //  wrong input turns red
                } else {
                    document.getElementById('C' + i).style.color = "green"; //  right input turns green
                }
            }
        }



        if (check_3x3 == arr_3x3) {
            alert("Puzzle solved successfully!");
        } else {
            alert("Puzzle is incorrect!");
            alert("Here is the solution : ");
        }

    }



    // validator for 9x9 puzzle
    else if (clickedBtn == 9) {
        for (let i = 0; i < 81; i++) {
            check_9x9 += document.getElementById('C' + i).value;
        }
        sodokoSolver(data);
        display_9x9();

        for (let i = 0; i < 81; i++) {
            if (initPuzzle_9x9[i] == '0') {
                if (check_9x9[i] != arr_9x9[i]) {
                    document.getElementById('C' + i).style.color = "red";
                } else {
                    document.getElementById('C' + i).style.color = "green";
                }
            }
        }


        if (check_9x9 == arr_9x9) {
            alert("Puzzle solved successfully!");
        } else {
            alert("Puzzle is incorrect!");
            alert("Here is the solution : ");
        }
    }
  } catch(err) {
      alert(`Error: ${err}`);
  }
}