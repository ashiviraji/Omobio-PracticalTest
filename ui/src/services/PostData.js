export function PostData(type, userData) {
    let BaseURL = 'http://localhost:8080/react-php/api/index.php';
   console.log(userData)
    let tp1="?tp=";
    let value=BaseURL+tp1+type;
    console.log(value)
    const options={
        method:'POST',
        body:JSON.stringify(userData),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        } 

    }
    return new Promise((resolve, reject) =>{
    fetch(value,options)
    .then((response) => response.json()
    .then((response) => {
    resolve(response);
    console.log(response)
    }))
    .catch((error) => {
    reject(error);
    console.log(reject(error))
    });
   
    });
    }