let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.className = "bx bxs-lock-open";
    }
    else{
        password.type = "password";
        eyeicon.className = "bx bxs-lock-alt";
    }
}