 var imported = document.createElement('script');
imported.src = 'custom_js/config.js';
document.head.appendChild(imported);
  
   function auth(){

    if ( sessionStorage.getItem("token")) {

          $.ajax({
    type: 'GET',
    url: url_rest_produk+"/rest_produk/public/produk",
    cache: true,
    dataType: 'json',
    data :{
            "token":sessionStorage.getItem("token"),
            
            } ,
    success: function(result){  

if (result) {

document.getElementById('nameuser').innerHTML="";
document.getElementById('nameuser').innerHTML=sessionStorage.getItem("user");



}else{
    window.location.href = "login.html";
}
    },
    error: function(result){

      console.log("error");
      window.location.href = "login.html";
              
    }
  });

         
    }else{

      window.location.href = "login.html";
    }
   }
