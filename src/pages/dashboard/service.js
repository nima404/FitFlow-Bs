export const GetUserActivity = async (url ) =>{
    try {
        const response = await fetch(`http://localhost:8081/${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
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

