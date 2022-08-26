import classes from "./game.module.css"
import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Result from "./result";
import { gameActions } from "../store/game-slice";
const Choice = () => {

const dispatch = useDispatch()

interface ResultState {
    result: boolean,
    game: any
    
}
const showResult = useSelector((state: ResultState) => state.game.result)





    const paperHandler = () => {
       dispatch(gameActions.playerChoice("paper"))
       dispatch(gameActions.showResultToggle())
       dispatch(gameActions.aiDraw())
       dispatch(gameActions.comparison())
       dispatch(gameActions.score())
     
      
    }

    const rockHandler = () => {
        dispatch(gameActions.playerChoice("rock"))
        dispatch(gameActions.showResultToggle())
        dispatch(gameActions.aiDraw())
        dispatch(gameActions.comparison())
        dispatch(gameActions.score())
    }

    const scissorsHandler = () => {
        dispatch(gameActions.playerChoice("scissors"))
        dispatch(gameActions.showResultToggle())
        dispatch(gameActions.aiDraw())
        dispatch(gameActions.comparison())
        dispatch(gameActions.score())
    }
return (
    <Fragment>
       
       { !showResult ? <section className={classes.choice}> 
          <div onClick={paperHandler} className={`${classes.paper} ${classes.items}`}><img src={require('../images/icon-paper.svg').default}/></div> 
        <div onClick={rockHandler} className={`${classes.rock} ${classes.items}`}><img src={require('../images/icon-rock.svg').default}/></div> 
        <div onClick={scissorsHandler} className={`${classes.scissors} ${classes.items}`}><img src={require('../images/icon-scissors.svg').default}/></div>
        </section> : <Result/>}
       
        
      
    </Fragment>
    
)



}












export default Choice