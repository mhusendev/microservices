 var imported = document.createElement('script');
imported.src = 'custom_js/config.js';
document.head.appendChild(imported);
  
  function post(){
var user = document.getElementById('email').value;
var pass = document.getElementById('password').value;

    $.ajax({
    type: 'POST',
    url: url_auth+"/auth/public/register",
    cache: true,
    dataType: 'json',
    data :{
            "email":user,
            "password" :pass
            } ,
    success: function(result){  
clr();
alert("Berhasil Mendaftar User");

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
