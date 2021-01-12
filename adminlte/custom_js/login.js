var imported = document.createElement('script');
imported.src = 'custom_js/config.js';
document.head.appendChild(imported);
  
   function post(){
var user = document.getElementById('email').value;
var pass = document.getElementById('password').value;

    $.ajax({
    type: 'POST',
    url: url_auth+"/auth/public/login",
    cache: true,
    dataType: 'json',
    data :{
            "email":user,
            "password" :pass
            } ,
    success: function(result){  
clr();
if (result.message =="login_success") {
  sessionStorage.setItem("token", result.result.token);
  sessionStorage.setItem("user", user);

  window.location.href = "index.html";
}
    },
    error: function(result){

                  console.log("error");
              
    }
  });
}

function clr(){


document.getElementById('email').value="";
document.getElementById('password').value="";

}
 function destroy(){
    sessionStorage.setItem("token", "");
  sessionStorage.setItem("user", "");

}