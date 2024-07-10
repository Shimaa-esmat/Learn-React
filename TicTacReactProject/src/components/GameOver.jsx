export default function GameOver({winner, onRestart}){
    return(
        <div id="game-over">
        {winner&& <p>{winner} winner</p>}
        {!winner&& <p> It's a Draw  </p>}

            <button onClick={onRestart}> rematch  </button>
        </div>
    )
}