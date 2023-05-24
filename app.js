class GameBoard {
  constructor() {
    this.grid = [
      [new Cell(0, 0), new Cell(0, 1), new Cell(0, 2)],
      [new Cell(1, 0), new Cell(1, 1), new Cell(1, 2)],
      [new Cell(2, 0), new Cell(2, 1), new Cell(2, 2)],
    ];
  }

  render() {
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.className = 'game-board-container';

    const gameBoard = document.createElement('div');
    gameBoard.className = 'game-board';

    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        gameBoard.append(this.grid[i][j].render());
      }
    }

    gameBoardContainer.appendChild(gameBoard);
    gameContainer.innerHTML = '';
    gameContainer.appendChild(gameBoardContainer);
    return gameBoardContainer;
  }
}

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.gamePiece = null;
  }

  render = () => {
    const cell = document.createElement('div');
    cell.onclick = this.onClick;
    cell.style.display = 'flex';
    cell.style.justifyContent = 'center';
    cell.style.alignItems = 'center';

    if (this.y == 1) {
      cell.style.borderLeftStyle = 'solid';
      cell.style.borderRightStyle = 'solid';
    }

    if (this.x == 1) {
      cell.style.borderTopStyle = 'solid';
      cell.style.borderBottomStyle = 'solid';
    }

    if (this.gamePiece !== null) {
      cell.appendChild(this.gamePiece.render());
    }

    return cell;
  };

  checkValidSelection = () => {
    return this.gamePiece == null;
  };

  onClick = () => {
    if (this.checkValidSelection()) {
      game.selectPosition(this.x, this.y);
    } else {
      alert('Please choose an empty cell.');
    }
  };
}

class GamePiece {
  constructor(value) {
    this.value = value;
  }

  render = () => {
    const piece = document.createElement('p');
    piece.className = 'piece';
    if ((piece.innerText = this.value == '🞨')) {
      piece.style.color = '#4FC3F7';
    } else {
      piece.style.color = '#FFF176';
    }
    piece.innerText = this.value;
    return piece;
  };
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

  render = () => {
    this.gameBoard.render();
  };

  startGame = () => {
    this.gameBoard = new GameBoard();
    this.player1 = new Player('🞨');
    this.player2 = new Player('○');
    this.currentPlayer = this.player1;
    this.render();
  };

  nextPlayer = () => {
    if (this.currentPlayer == this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  };

  selectPosition = (x, y) => {
    this.gameBoard.grid[x][y].gamePiece = new GamePiece(
      this.currentPlayer.value
    );
    this.render();
    this.nextPlayer();
    const win = this.checkWinner();
    if (win) {
      return;
    }
    if (this.checkTie()) {
      alert('Tie!');
    }
  };

  checkTie = () => {
    for (let i = 0; i < this.gameBoard.grid.length; i++) {
      for (let j = 0; j < this.gameBoard.grid.length; j++) {
        if (this.gameBoard.grid[i][j].gamePiece == null) {
          return false;
        }
      }
    }
    return true;
  };

  checkWinner = () => {
    let win = this.checkVertical();
    if (win !== null) {
      alert(win + ' wins!');
    }

    win = this.checkHorizontal();
    if (win !== null) {
      alert(win + ' wins!');
    }

    win = this.checkLeftDiagonal();
    if (win !== null) {
      alert(win + ' wins!');
    }

    win = this.checkRightDiagonal();
    if (win !== null) {
      alert(win + ' wins!');
    }

    return win !== null;
  };

  checkVertical = () => {
    let player1Count = 0;
    let player2Count = 0;
    for (let i = 0; i < this.gameBoard.grid.length; i++) {
      for (let j = 0; j < this.gameBoard.grid[0].length; j++) {
        if (this.gameBoard.grid[i][j].gamePiece !== null) {
          if (this.gameBoard.grid[i][j].gamePiece.value == this.player1.value) {
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
    let player1Count = 0;
    let player2Count = 0;
    for (let i = 0; i < this.gameBoard.grid.length; i++) {
      for (let j = 0; j < this.gameBoard.grid[0].length; j++) {
        if (this.gameBoard.grid[j][i].gamePiece !== null) {
          if (this.gameBoard.grid[j][i].gamePiece.value == this.player1.value) {
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
      if (this.gameBoard.grid[i][j].gamePiece !== null) {
        if (this.gameBoard.grid[i][j].gamePiece.value == this.player1.value) {
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
      if (this.gameBoard.grid[i][j].gamePiece !== null) {
        if (this.gameBoard.grid[i][j].gamePiece.value == this.player1.value) {
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
    header.innerHTML = 'Tic Tac Toe';
    header.innerHTML = header.innerHTML.replace(
      'o',
      '<span style="color: #FFF176; background-color:#2c2e31; ">o</span>'
    );
    header.innerHTML = header.innerHTML.replace(
      'a',
      '<span style="color: #4FC3F7; background-color:#2c2e31; ">a</span>'
    );

    headerContainer.appendChild(header);
    return headerContainer;
  }
}

class GameTextFactory {
  createGameText(player) {
    const gameTextConatiner = document.createElement('div');
    gameTextConatiner.className = 'game-text-container';

    const gameText = document.createElement('div');
    gameText.innerHTML = `Player ${player}'s Turn`;
    gameText.innerHTML = gameText.innerHTML.replace(
      player,
      `<span style="color: #4FC3F7; background-color:#323437; ">${player}</span>`
    );
    gameTextConatiner.appendChild(gameText);
    return gameTextConatiner;
  }
}

class FooterFactory {
  createFooter() {
    const footerContainer = document.createElement('footer');
    footerContainer.className = 'footer';

    const footer = document.createElement('p');
    footer.innerHTML = 'Copyright © 2023 pdtru&nbsp';
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
const gameText = new GameTextFactory();
const gameContainer = document.createElement('div');
gameContainer.className = 'game-container';
const footer = new FooterFactory();
body.append(
  header.createHeader(),
  gameText.createGameText('🞨'),
  gameContainer,
  footer.createFooter()
);

const game = new Game();
game.startGame();
