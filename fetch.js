// API: http://reqres.in
// youtube video followed: https://www.youtube.com/watch?v=hOXWY9Ng_KU

// 1) GET


/* fetch('https://reqres.in/api/users/')
    .then(res => {
        if(res.ok) {console.log("GET request successful")}
        else { console.log("GET request error")}
        return res
    })
    .then(res => res.json())
    // .then(data => handleData(data))
    .then(data => console.log(data))
    .catch(error => console.log(error))

// function handleData(data) {
//     console.log(data)
// }    
 */



// 2) POST
// /api/users
/* 
fetch('https://reqres.in/api/users', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(
        {
            "name": "Effi",
            "job": "developer"
        }
    )
})
    .then(res => {
        if(res.ok) {console.log("POST request successful")}
        else { console.log("POST request error")}
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error)) */

// 3) PUT

/* 
fetch('https://reqres.in/api/users/2', {
    method: "PUT",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(
        {
            "name": "Effi",
            "job": "butt licker"
        }
    )
})
    .then(res => {
        if(res.ok) {console.log("PUT request successful")}
        else { console.log("PUT request error")}
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error)) 
*/

// 4) DELETE

fetch('https://reqres.in/api/users/2', {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(res => {
        if(res.ok) {console.log("DELETE request successful")}
        else { console.log("DELETE request error")}
        return res
    })
    .then(res => console.log(res))