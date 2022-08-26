import classes from "./rules.module.css"
import ModalRules from "./UI/modal"
import { rulesActions } from "../store/rules.slice"
import { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"



const Rules = () => {

    const dispatch = useDispatch()
  interface ModalState {
            showRules: boolean,
            rules: any
            
        }
        const showRules = useSelector((state: ModalState) => state.rules.showRules)

    const modalHandler = () => {
      dispatch(rulesActions.showRulesToggle())
    }
    return (
       <Fragment>
           <button onClick={modalHandler} className={classes.rules_btn}>{showRules ? `CLOSE` : 'RULES'}</button>
          { showRules && <ModalRules/>}
       </Fragment>
    )

}



export default Rules