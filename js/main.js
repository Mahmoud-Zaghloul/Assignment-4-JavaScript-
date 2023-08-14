// let signupName = document.querySelector('#signupName')
// let signupEmail = document.querySelector('#signupEmail')
// let signupPassword = document.querySelector('#signupPassword')

// let signUpArray = []

// if (localStorage.getItem('users') == null) {
//     signUpArray = []
// } else {
//     signUpArray = JSON.parse(localStorage.getItem('users'))
// }




// function Empty(){
//     if(signupName.value == "" ||signupEmail.value == "" || signupPassword.value == "" ){
//         return false
//     }else{
//         return true
//     }
    

// }

// function EmailExist() {
//     for (let i = 0; i < signUpArray.length; i++) {
//         if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
//             return false
//         }
//     }
// }

// function signUp() {
//     if (Empty() == false) {
//         document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
//         return false
//     }
    
//     let signUp ={
//         name: signupName.value,
//         email: signupEmail.value,
//         Password: signupPassword.value,
//     }
    
    
//     if (signUpArray.length == 0) {
//         signUpArray.push(signUp)
//         localStorage.setItem('users', JSON.stringify(signUpArray))
//         document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
//         return true
//     }
//     if (EmailExist() == false) {
//         document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
    
//     } else {
//         signUpArray.push(signUp)
//         localStorage.setItem('users', JSON.stringify(signUpArray))
//         document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
    
//     }
    
// }


// signinEmail signinPassword



let signupName = document.querySelector('#signupName')
let signupEmail = document.querySelector('#signupEmail')
let signupPassword = document.querySelector('#signupPassword')

let signinEmail = document.querySelector('#signinEmail')
let signinPassword = document.querySelector('#signinPassword')

let signUpBtn = document.getElementById("signUP")

let signinBtn = document.getElementById("signIn")


let list ;

if(localStorage.getItem("userList")==null){

    list = [];

}else{
    list=JSON.parse(localStorage.getItem("userList"));
}

signUpBtn?.addEventListener("click",function(){

    if(signupName.value=="" ||signupEmail.value=="" ||signupPassword.value==""){
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    }
    else if (signupName.value!=="" && signupEmail.value!=="" && signupPassword.value!==""){

        let objInput = {
            name:signupName.value,
            email:signupEmail.value,
            password:signupPassword.value,
        }
        list.push(objInput)
        localStorage.setItem("userList",JSON.stringify(list))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        window.location.href="indexnNextPage.html"

    }



})


signinBtn?.addEventListener("click",function(){
    if(signinEmail.value!="" && signinPassword.value!=""){
        document.getElementById('incorrect').innerHTML = '<span class="text-danger d-none m-3">All inputs is required</span>'

        if( check ()){
            document.getElementById('incorrect').innerHTML = '<span class="text-danger d-none m-3">incorrect email or password</span>'
            location.href="welcome.html"

        }
        else{
            document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">incorrect email or password</span>'
        }

    }else{
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    }

    


})



function check (){
    for (var i=0 ; i<list.length ; i++){
        if(list[i].email.toLowerCase()==signinEmail.value.toLowerCase() && list[i].password.toLowerCase()==signinPassword.value.toLowerCase()){
            localStorage.setItem("name",JSON.stringify(list[i].name));
            return true;
            

        }
        
    }
}



function addName(){
    let userName = JSON.parse(localStorage.getItem("name")) ;
    document.getElementById("username").innerHTML = `Welcome ${userName}`;
}


// document.getElementById("logout").addEventListener("click",function(){
//     localStorage.removeItem("name");
// })

