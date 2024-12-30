function register(callback){
    setTimeout(() => {
        console.log("Register end");
        callback();
    }, 3000);
}
function sendMail(callback){
    setTimeout(() => {
        console.log("Send Mail end"); 
        callback();
    }, 2000);
    
}
function login(callback){
    setTimeout(() => {
        console.log("Login end");
        callback();
    }, 2000);
   
}
function getData(callback){
    setTimeout(() => {
        console.log("Get Data end");
        callback();
    }, 1000);
    
}
function displayData(){
    setTimeout(() => {
        console.log("Display Data end");
    }, 2000);
    
}
register(function(){
    sendMail(function(){
        login(function(){
            getData(function(){
                displayData();
            });
        });
    });
});
console.log("Other applications executed")