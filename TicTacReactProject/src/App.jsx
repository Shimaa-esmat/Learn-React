import { useState } from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/log.jsx';
import GameOver from './components/GameOver.jsx';
import { WINNING_COMBINATIONS } from './components/winning-combination.js';


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function driveWinner(gameBoard, player){
  let winner;
  
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = player[firstSquareSymbol];
    }
  }
  return winner
}




function App() {
  const [player, setPlayer]= useState({
    X: 'player 1',
    O: 'player 2'
  })
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard =[ ...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
const winner = driveWinner(gameBoard,player)
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }


  function handleRematch(){
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayer(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol]: newName
      }
  })
  }


  return (
    <main>
      <div id="game-container">
      {console.log(hasDraw)}
      {console.log(winner)}

        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        {(winner || hasDraw )&& <GameOver winner={winner} onRestart={handleRematch}/> }
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
