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

class HeaderFactory {
  createHeader() {
    const headerContainer = document.createElement('nav');
    headerContainer.className = 'header-container';

    const header = document.createElement('div');
    header.className = 'header';
    header.innerText = 'Tic Tac Toe';

    headerContainer.appendChild(header);
    return headerContainer;
  }
}

class GameBoardFactory {
  createGameBoard() {
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.className = 'game-board-container';

    const gameBoard = document.createElement('div');
    gameBoard.className = 'game-board';

    const cell0 = document.createElement('div');
    cell0.className = 'cell';
    const cell1 = document.createElement('div');
    cell1.className = 'cell';
    const cell2 = document.createElement('div');
    cell2.className = 'cell';
    const cell3 = document.createElement('div');
    cell3.className = 'cell';
    const cell4 = document.createElement('div');
    cell4.className = 'cell';
    const cell5 = document.createElement('div');
    cell5.className = 'cell';
    const cell6 = document.createElement('div');
    cell6.className = 'cell';
    const cell7 = document.createElement('div');
    cell7.className = 'cell';
    const cell8 = document.createElement('div');
    cell8.className = 'cell';

    gameBoard.append(
      cell0,
      cell1,
      cell2,
      cell3,
      cell4,
      cell5,
      cell6,
      cell7,
      cell8
    );

    gameBoardContainer.appendChild(gameBoard);
    return gameBoardContainer;
  }
}

class FooterFactory {
  createFooter() {
    const footerContainer = document.createElement('footer');
    footerContainer.className = 'footer';

    const footer = document.createElement('p');
    footer.innerHTML = 'Copyright © 2023 pdtru ';
    footerContainer.appendChild(footer);

    const github = document.createElement('a');
    github.href = 'https://github.com/pdtru';
    footer.appendChild(github);

    const githubIcon = document.createElement('i');
    githubIcon.className = 'fa-brands fa-github';
    github.appendChild(githubIcon);
    return footerContainer;
  }
}

const body = document.body;
const header = new HeaderFactory();
const gameBoard = new GameBoardFactory();
const footer = new FooterFactory();

body.append(
  header.createHeader(),
  gameBoard.createGameBoard(),
  footer.createFooter()
);

const game = new Game();
game.startGame();
