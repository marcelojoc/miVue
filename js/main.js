  // // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyAO0hb7ry_n4Y263G8DlrGZYEzoj4UqKkE",
  //   authDomain: "vuerender.firebaseapp.com",
  //   databaseURL: "https://vuerender.firebaseio.com",
  //   projectId: "vuerender",
  //   storageBucket: "vuerender.appspot.com",
  //   messagingSenderId: "893576106767"
  // };
  // firebase.initializeApp(config); //  inicializa firebase


  // var db = firebase.database(); //referencia de servicio de base de datos
var count=0;

  var app = new Vue({

    el: "#content",

    ready:function(){



      
    },

    data: {

            employe:[]

    },




    methods: {

            guardarLista: function(){

                //alert('prueba de lista '+ this.newNombre);


                this.employe.push({ id:count++,
                                    nombre: this.newNombre,
                                    apellido: this.newApellido,
                                    usuario: this.newUsuario,
                                    estado: true
                                  });
                this.newNombre   = "";
                this.newApellido = "";
                this.newUsuario  = "";
       

            },



            changeState: function($id_list){

                  alert('cambianfdo estado de la lista '+ $id_list);



            }

    }











  });