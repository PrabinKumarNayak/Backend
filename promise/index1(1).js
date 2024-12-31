function register(){
    setTimeout(() => {
        console.log("Register end");
    }, 3000);
}
function sendMail(){
    setTimeout(() => {
        console.log("Send Mail end");
    }, 1000);
    
}
function login(){
    setTimeout(() => {
        console.log("Login end");
    }, 1000);
   
}
function getData(){
    setTimeout(() => {
        console.log("Get Data end");
    }, 1000);
    
}
function displayData(){
    setTimeout(() => {
        console.log("Display Data end");
    }, 1000);
    
}
register();
sendMail();
login();
getData();
displayData();
console.log("Other applications executed")