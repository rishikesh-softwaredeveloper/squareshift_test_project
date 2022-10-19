export const initProduct = (add) =>{
    return (dispatch) =>{
        dispatch({
            type:'init_product',
            payload:add
        })
    }
}

export const clearProduct = () =>{
    return (dispatch) =>{
        dispatch({
            type:'clear_product'
        })
    }
}

//master product start
export const initMasterProduct = (add) =>{
    return (dispatch) =>{
        dispatch({
            type:'init_master_product',
            payload:add
        })
    }
}

export const clearMasterProduct = () =>{
    return (dispatch) =>{
        dispatch({
            type:'clear_master_product'
        })
    }
}
//master product end

//cart start
export const initCart = (add) =>{
    return (dispatch) =>{
        dispatch({
            type:'init_cart',
            payload:add
        })
    }
}

export const addToCart = (add) =>{
    return (dispatch) =>{
        dispatch({
            type:'add_to_cart',
            payload:add
        })
    }
}

export const removeFromCart = (remove) =>{
    return (dispatch) =>{
        dispatch({
            type:'remove_from_cart',
            payload:remove
        })
    }
}

export const clearCart = () =>{
    return (dispatch) =>{
        dispatch({
            type:'clear_cart'
        })
    }
}

//cart end
