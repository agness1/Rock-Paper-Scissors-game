import  {configureStore} from '@reduxjs/toolkit'


import gameSlice from './game-slice'
import rulesSlice from './rules.slice'


const store = configureStore({
    reducer: {  game: gameSlice.reducer, rules: rulesSlice.reducer }
})




export default store