import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface gameState {
    value: string,
    result: boolean,
    hand: string,
    win: boolean,
    loos: boolean,
    draw: boolean,
    score: number
}

const initialGameState: gameState = {
    value: "",
    result: false,
    hand: '',
    win: false,
    loos: false,
    draw: false,
    score: 0
}



const gameSlice = createSlice ({
    name: 'game',
    initialState: initialGameState, 
    reducers: {
playerChoice  (state, action: PayloadAction<string>) {
state.value = action.payload



},

showResultToggle (state) {
state.result = !state.result

},


aiDraw (state) {
    const hands = ['paper', 'rock', 'scissors']
    const drawHand = hands[Math.floor(Math.random()*3)]
    state.hand = drawHand  
   
},

comparison (state) {
    if (state.value === state.hand ) {
        state.draw = true;
       } else if ((state.value === "paper" && state.hand === "rock") || (state.value === "rock" && state.hand === "scissors") || (state.value === "scissors" && state.hand === "paper")) {
        state.win = true;
       } else { state.loos = true }
      
},
resetResult (state) {
state.win = false
state.loos = false
state.draw = false
},
score (state) {
if (state.win === true) {
    state.score += 1
}
}
  }
})



export const gameActions = gameSlice.actions

export default gameSlice