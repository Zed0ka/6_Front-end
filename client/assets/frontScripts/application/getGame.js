//body = traité par worker?
const method = "POST";
const url = "http://localhost/backend/post.php";
const headers = new Headers();
headers.append("Content-type","application/json");

const body = ;

fetch(url,options)
.then((response)=>{
    return response.text();
})
.then((body)=>{
    console.log(body);
})



const heads = new Headers();
heads.append("Content-Type","application/x-www-form-urlencoded");
fetch("http://localhost/6_Front-end/backend/CRUDgames/routes/searchGame.php",{
    method : "POST",
    headers : heads,
    body : ,//body = traité par worker?
})