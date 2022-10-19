import { combineReducers } from 'redux'
import productReducer from './productReducer'
import masterproductlist from './masterProductReducer'
import cartReducer from './cartReducer'

const reducers = combineReducers({
    productlist: productReducer,
    masterproductlist:masterproductlist,
    cartlist:cartReducer
})


export default reducers