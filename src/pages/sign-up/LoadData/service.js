export const PostSignupData = async (url , data) =>{
    try {
        const response = await fetch(`http://localhost:8081/${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow",
            body: JSON.stringify(data),
        });

        console.log("data" , data)

        const jsonResponse = await response.json()
        console.log("jsonResponse" , jsonResponse)
        return jsonResponse
    } catch(err) {
        console.log('err' , err)
    }
}

