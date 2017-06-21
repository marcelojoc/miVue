(function(){ 
  
  
    if (!window.indexedDB) {
    window.alert("Tu navegador esta obsoleto, so noporta caracteristicas que necesita esta aplicacion para funcionar");
    }else{

        var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

        startDB();

    }

    var button = document.getElementById('boton');
    button.addEventListener('click', function(){

        var nombre = document.getElementById('id_nombre').value;
        var apellido = document.getElementById('id_apellido').value;
        var usuario = document.getElementById('id_usuario').value;

        var dato= {

            nombre: nombre,
            apellido: apellido,
            usuario: usuario

        }

        guardar(dato);
        
    })

})();
 
 
 
            
    function startDB() {
        var db;
        var dataBase = indexedDB.open("osepdb", 1);

            dataBase.onsuccess = function (e) {
                //alert('Base de datos cargada correctamente');
                db = event.target.result
            };

            dataBase.onerror = function (e)  {
                alert('Error cargando la base de datos'+ event.target.message);
            }; 
        

        
 

    }




function guardar (dato){
var objectStore = db.createObjectStore("bloque", { keyPath: "1" });

console.log(db)


}





