// json-server db.json -m ./node_modules/json-server-auth
let token="";
let id="";
function signUp(){
  axios.post("http://localhost:3000/signup",{
    "email":"user10@mail.com",
    "password":"user10",
    "lastName":"Hogan",
    "firstName":"Freya",
    "nickName":"Freya",
    "gender":"female",
    "role":"user"
  })   
  .then(function(response){
    console.log(response.data)
  })
  .catch(function(error){
    console.log(error.response);
  })
}
function login(){
  axios.post("http://localhost:3000/login",{
    "email":"user05@mail.com",
    "password":"user05",
  })   
  .then(function(response){
    token=response.data.accessToken;
    id=response.data.user.id;
  })
  .catch(function(error){
    console.log(error.response);
  })
}
// 不用另外代userId的寫法：http://localhost:3000/600/users/${id}/posts
function addPost(){
  axios.post("http://localhost:3000/600/posts",{
    "movieId":1, 
    "spoiler":"false",
    "title":"科學與道德的交織",
    "content":"片中賈羅·奧本海默的角色由傑克·吉倫哈爾精湛詮釋，他不僅展現了奧本海默作為核物理學家的才華，更將觀眾帶入他內心的道德掙扎。奧本海默在創造毀滅性武器的同時，也面臨道德的困惑和人性的挑戰，這種內心掙扎讓影片更具深度和情感。",
    "userId":id
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })   
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error.response);
  })
}
let delPostId="";
delPostId=1;
function delPost(){
  axios.delete("http://localhost:3000/posts/${delPostId}",{
    // "delPostId":1
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })   
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error.response);
  })
}
function upDatePassword(){
  axios.patch("http://localhost:3000/600/users/1",{
    "password":"",
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })          
  .then(function(response){
    console.log(response.data)
  })
  .catch(function(error){
    console.log(error.response);
  })
}