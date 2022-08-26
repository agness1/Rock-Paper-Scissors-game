import { Fragment } from 'react';
import Choice from './components/choice';
import Score from './components/score';
import Rules from './components/rules';
import Atr from './components/UI/attribution';


function App() {
  return (
   <Fragment>
     <Score/>
     <Choice/>
     <Rules/>
     <Atr/>
   </Fragment>
  )
    
  
}

export default App;
