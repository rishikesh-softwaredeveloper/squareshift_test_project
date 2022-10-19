export const PostLogin = async (logindata) => {

    return fetch(`https://fakestoreapi.com/auth/login`, {
        method: 'post',
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(logindata)
    }).then(Response => Response.json()).
        catch((error) => {    
    })
}
