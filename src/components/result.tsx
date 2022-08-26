import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../store/game-slice';
import classes from "./game.module.css"

const Result = () => {
    const dispatch = useDispatch()
    const playAgainHandler = () => {
        dispatch(gameActions.showResultToggle())
       dispatch(gameActions.resetResult())
    }
    interface ResultState {
        value: string,
        game: any,
        hand: string,
        win: boolean,
        loos: boolean,
        draw: boolean
        
    }
    const playerChoice = useSelector((state: ResultState) => state.game.value)
    const aiDraw = useSelector((state: ResultState) => state.game.hand)
    const win = useSelector((state: ResultState) => state.game.win)
    const loos = useSelector((state: ResultState) => state.game.loos)
    const draw = useSelector((state: ResultState) => state.game.draw)
    
const paper = <div className={`${classes.paper} ${classes.result_hand}`}><img src={require('../images/icon-paper.svg').default}/></div>
const rock = <div className={`${classes.rock} ${classes.result_hand}`}><img src={require('../images/icon-rock.svg').default}/></div>
const scissors = <div className={`${classes.scissors} ${classes.result_hand}`}><img src={require('../images/icon-scissors.svg').default}/></div>
    

return (<section className={classes.result}>
    <div className={classes.picked_hands}>
        <h2 className={classes.picked}>YOU PICKED</h2>
        {playerChoice === 'paper' && paper} {playerChoice === 'rock' && rock} {playerChoice === 'scissors' && scissors}
    </div>
   
   <div className={classes.show_result}>
          <h1>{win === true && 'You win!'}{loos === true && 'You loos!'} {draw === true && 'Draw!'}</h1>
        <button className={classes.play_btn} onClick={playAgainHandler}>PLAY AGAIN</button>
    </div>
   
   
    <div className={classes.picked_hands}>
        <h2 className={classes.picked}>THE HOUSE PICKED</h2>
        {aiDraw === 'paper' && paper} {aiDraw === 'rock' && rock} {aiDraw === 'scissors' && scissors}
      
    </div>
    
</section>)




}






export default Result