var imported = document.createElement('script');
imported.src = 'custom_js/config.js';
document.head.appendChild(imported);


 function list(){


          $.ajax({
    type: 'GET',
    url: url_rest_produk+"/rest_produk/public/produk",
    cache: true,
    dataType: 'json',
    data :{
            "token":sessionStorage.getItem("token"),
            
            } ,
    success: function(result){  
  var table = $('#example2').DataTable();
  var rows = table.rows().remove();
 
      var obj = result;
         for(var i=0; obj.length ;i++){
       
table.row.add([
  obj[i].id, obj[i].nama_produk, obj[i].jenis, obj[i].qty,
  obj[i].create_by,'<button class="btn btn-danger" onclick="delete_data(this)" data-value="'+obj[i].id+'">delete</button>|<button class="btn btn-primary edit_btn" data-toggle="modal" data-target="#produkmodal"  data-value="'+obj[i].id+'">Update</button>'
]).draw();  }  


    },
    error: function(result){

      console.log("error");
     
              
    }
  });


 }  

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


list();



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


   function delete_data(obj){
      var val = obj.getAttribute('data-value');
       $.ajax({
    type: 'DELETE',
    url: url_rest_produk+"/rest_produk/public/produk/delete/"+val,
    cache: true,
    data : {
            "token":sessionStorage.getItem("token"),
            
            } ,
    dataType: 'text',
   
    success: function(result){  
     
      alert("data Berhasil dihapus");
      list();
    },
    error: function(result){
      console.log('error : ajax error');
    }
  });
}

function update_data(){
 var u_nama= document.getElementById('u_nama').value;
 var u_jenis =document.getElementById('u_jenis').value;
 var u_qty =document.getElementById('u_qty').value;
  var u_id =document.getElementById('id_produk').value;
   var u_user = sessionStorage.getItem("user");
 $.ajax({
    type: 'PUT',
    url: url_rest_produk+"/rest_produk/public/produk/ubah/"+u_id,
    cache: true,
    dataType: 'text',
    data: {"nama_produk":u_nama,
            "jenis":u_jenis,
            "qty":u_qty,
            "create_by":u_user,
            "token":sessionStorage.getItem("token"),
            } ,
    success: function(result){  
      alert("berhasil");
 document.getElementById('u_nama').value="";
 
 document.getElementById('u_jenis').value="";
 document.getElementById('u_qty').value="";
 document.getElementById('id_produk').value="";

list();

    $('#produkmodal').modal('hide');

    },
    error: function(result){
      alert("error");
      console.log('error : ajax error');
    }
  });

}

   function simpan(){
   
     var nama=  document.getElementById('nama_produk').value;
     var jenis =document.getElementById('jenis').value;
     var qty= document.getElementById('qty').value;
     var user = sessionStorage.getItem("user");
     var tkn = sessionStorage.getItem("token");
      $.ajax({
    type: 'POST',
    url: url_rest_produk+"/rest_produk/public/produk/insert",
    cache: true,
    dataType: 'text',
    data: {"nama_produk":nama,
            "jenis":jenis,
            "qty":qty,
            "create_by":user,
            "token":tkn,
            } ,
    success: function(result){  
      alert("berhasil");
clr();
list();
    },
    error: function(result){
      alert("error");
      console.log('error : ajax error');
    }
  });
}



function clr(){

  document.getElementById('nama_produk').value="";
   document.getElementById('jenis').value="";
   document.getElementById('qty').value="";
}


$(document).on('click', '.edit_btn',function(e) {
  var id_edit = $(this).data('value');

  $.ajax({
    type: 'POST',
    url: 'http://localhost/rest_produk/public/produk/'+id_edit,
    cache: false,
    dataType: 'text',
    data : {"token":sessionStorage.getItem("token")},
    success: function(result){
      console.log(result);
      var res = JSON.parse(result);
      document.getElementById('u_nama').value=res.nama_produk;
      document.getElementById('u_jenis').value=res.jenis;
      document.getElementById('u_qty').value=res.qty;
      document.getElementById('id_produk').value=res.id;
    },
    error: function(result){
      console.log('error : error ajaxnya bruh');
    }
  });
 
  
});
