fetch("http://localhost:3000/monster")
.then ( 
    (response) => console.log(response.json())
)