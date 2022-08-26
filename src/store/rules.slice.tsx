import { createSlice } from "@reduxjs/toolkit"



interface rulesState {
   showRules: boolean
}

const initialRulesState: rulesState = {
   showRules: false
}


const rulesSlice = createSlice ({
    name: 'rules',
    initialState: initialRulesState, 
    reducers: {


showRulesToggle (state) {
state.showRules = !state.showRules
}
}
})



export const rulesActions =  rulesSlice.actions

export default rulesSlice