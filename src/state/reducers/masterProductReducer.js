const reducer = (state=[],action)=>{
    switch(action.type){
        case 'init_master_product':
            return state=[...state,action.payload]
        case "clear_master_product":
         return state =[]
        default:
            return state
    }   
}

export default reducer;