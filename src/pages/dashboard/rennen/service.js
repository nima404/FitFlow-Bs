// export const PostRunenData = async (url , data) =>{
//     try {
//         const response = await fetch(`http://localhost:8081/${url}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//                 // "auth":"Token asfafsasfaf"
//             },
//             redirect: "follow",
//             // body: JSON.stringify(data)
//             body:data
//         });
//
//         console.log("data" , data)
//         console.log("stringfy" , JSON.stringify(data))
// console.log("url " , `http://localhost:8081/${url}`)
//         const jsonResponse = await response.json()
//         console.log("jsonResponse" , jsonResponse)
//         return jsonResponse
//     } catch(err) {
//         console.log('err' , err)
//     }
// }