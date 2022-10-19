const reducer = (state=[],action)=>{
    switch(action.type){
        case 'init_cart':
            return state=[...state,action.payload]
        case 'add_to_cart':
            return [...state,action.payload];
        case "remove_from_cart":
         return  state.filter(item=>item['productItem'].id !== action.payload)
        case "clear_cart":
         return state =[]
        default:
            return state
    }   
}

export default reducer;