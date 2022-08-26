import classes from "./score.module.css"
import { useSelector } from "react-redux"
const Score = () => {

    interface scoreState {
      score: number,
      game: any
        
    }
    const score = useSelector((state: scoreState) => state.game.score)

    
    
return (
    <section className={classes.score}>
    <div className={classes.names}>
    <img src={require('../images/logo.svg').default}/>
    </div>
    <div className={classes.p_score}>
        <p className={classes.score_title}>score</p>
        <p className={classes.score_number}>{score}</p>
    </div>
</section>
)
}









export default Score