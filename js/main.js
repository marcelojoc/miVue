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


  var app = new Vue({

    el: "#content",

    data: {

            employe:[
                    {
                        nombre: "marcelo",
                        apellido: "contreras",
                        usuario: "@tuvieja"
                    },
                    {
                        nombre: "pocho",
                        apellido: "pocha",
                        usuario: "@tuvieja"
                    },
                    {
                        nombre: "catulo",
                        apellido: "contreras",
                        usuario: "@tuvieja"
                }

            ]

    },




    methods: {

            addEmploye: function(){



            }






    }









  });