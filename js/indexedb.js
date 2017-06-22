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
                db = e.target.result
                var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
                
                objectStore.createIndex("name", "name", { unique: false });

                // Create an index to search customers by email. We want to ensure that
                // no two customers have the same email, so use a unique index.
                objectStore.createIndex("email", "email", { unique: true });

                // Use transaction oncomplete to make sure the objectStore creation is 
                // finished before adding data into it.
                objectStore.transaction.oncomplete = function(event) {
                    // Store values in the newly created objectStore.
                    var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
                    for (var i in customerData) {
                    customerObjectStore.add(customerData[i]);
                    }
                }


            };

            dataBase.onerror = function (e)  {
                alert('Error cargando la base de datos'+ e.target.message);
            }; 
    
    }




    function guardar (dato){
        var objectStore = db.createObjectStore("bloque", { keyPath: "1" });

        console.log(db)


    }





