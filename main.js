document.addEventListener("DOMContentLoaded", () =>{
    const body = document.querySelector('body');

    body.addEventListener('keydown' ,(e)=>{
        if(e.key === 'p'){
            // console.log("test");
            alert("Password generated: " + generatePassword());
            return;
        }
    });
});

function generatePassword (){
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let passwordString = "";
    const passwordLength = Math.floor(Math.random() * (14 - 10) + 10);
    for (let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * 62);
        passwordString += str.charAt(index);
    }
    return passwordString;
}
