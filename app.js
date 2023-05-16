class GameBoard {
  constructor() {
    this.grid = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }
}

class GamePiece {
  constructor(value) {
    this.value = value;
  }
}

class Player {
  constructor(value) {
    this.value = value;
  }
}

class Game {
  constructor() {
    this.gameBoard = new GameBoard();
  }

  startGame = () => {
    this.gameBoard = new GameBoard();
    this.player1 = new Player('x');
    this.player2 = new Player('o');
    this.currentPlayer = this.player1;
  };

  selectPosition = (x, y) => {
    this.gameBoard.grid[x][y] = new GamePiece(this.currentPlayer.value);
  };

  nextPlayer = () => {
    if (this.currentPlayer == this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  };

  checkValidSelection = (x, y) => {
    return this.gameBoard.grid[x][y] == null;
  };

  checkWinner = () => {
    for (let i = 0; i < this.gameBoard.grid.length; i++) {
      for (let j = 0; j < this.gameBoard.grid[0].length; j++) {
        if (this.gameBoard.grid[i][j] !== null) {
          let count = 1;
        }
      }
    }
  };

  checkVertical = () => {
    for (let i = 0; i < this.gameBoard.grid.length; i++) {
      let player1Count = 0;
      let player2Count = 0;
      for (let j = 0; j < this.gameBoard.grid[0].length; j++) {
        if (this.gameBoard.grid[i][j] !== null) {
          if (this.gameBoard.grid[i][j].value == this.player1.value) {
            player1Count++;
          } else {
            player2Count++;
          }
        }
      }

      if (player1Count == 3) {
        return this.player1.value;
      } else if (player2Count == 3) {
        return this.player2.value;
      } else {
        return null;
      }
    }
  };

  checkHorizontal = () => {
    for (let i = 0; i < this.gameBoard.grid.length; i++) {
      let player1Count = 0;
      let player2Count = 0;
      for (let j = 0; j < this.gameBoard.grid[0].length; j++) {
        if (this.gameBoard.grid[j][i] !== null) {
          if (this.gameBoard.grid[j][i].value == this.player1.value) {
            player1Count++;
          } else {
            player2Count++;
          }
        }
      }

      if (player1Count == 3) {
        return this.player1.value;
      } else if (player2Count == 3) {
        return this.player2.value;
      } else {
        return null;
      }
    }
  };

  checkLeftDiagonal = () => {
    let player1Count = 0;
    let player2Count = 0;
    let i = 0;
    let j = 0;
    while (i < this.gameBoard.grid.length) {
      if (this.gameBoard.grid[i][j] !== null) {
        if (this.gameBoard.grid[i][j].value == this.player1.value) {
          player1Count++;
        } else {
          player2Count++;
        }
      }
      i++;
      j++;
    }

    if (player1Count == 3) {
      return this.player1.value;
    } else if (player2Count == 3) {
      return this.player2.value;
    } else {
      return null;
    }
  };

  checkRightDiagonal = () => {
    let player1Count = 0;
    let player2Count = 0;
    let i = 0;
    let j = this.gameBoard.grid.length - 1;
    while (i < this.gameBoard.grid.length) {
      if (this.gameBoard.grid[i][j] !== null) {
        if (this.gameBoard.grid[i][j].value == this.player1.value) {
          player1Count++;
        } else {
          player2Count++;
        }
      }
      i++;
      j--;
    }

    if (player1Count == 3) {
      return this.player1.value;
    } else if (player2Count == 3) {
      return this.player2.value;
    } else {
      return null;
    }
  };
}
