
export const GetProductList = async () => {
    
    return fetch(`https://fakestoreapi.com/products`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        }
    }).then(Response => Response.json()).
        catch((error) => {
    })
}

