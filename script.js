let password = document.getElementById("password");
let eyeopen = document.getElementById("eye-open");
let eyeclose = document.getElementById("eye-close");
let submit =  document.getElementById("submit");
eyeopen.onclick = () => {
    if(password.type === "password"){
        password.type  = "text";
        document.getElementById("eye-open").style.display = "none";
        document.getElementById("eye-close").style.display = "block";
        eyeopen = eyeclose;
    }
};
eyeclose.onclick = () => {
    if(password.type === "text"){
        password.type = "password";
        document.getElementById("eye-close").style.display = "none";
        document.getElementById("eye-open").style.display = "block";
        eye = document.querySelector("#eye-open");
        eyeclose = eyeopen
    }
};


