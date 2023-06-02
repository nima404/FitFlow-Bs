export const GetUserActivity = async (url  , token = "") =>{
    try {
        const response = await fetch(`http://localhost:8081/${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`
            },
            redirect: "follow",
        });

        const jsonResponse = await response.json()
        console.log("jsonResponse" , jsonResponse)
        return await jsonResponse
    } catch(err) {
        console.log('err' , err)
    }
}

