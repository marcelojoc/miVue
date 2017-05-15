// var app = new Vue({

//     el: 'body',
//     data:{
//         nombre:'   Bloque de Identificación del Territorio/Facilitador/Familia relevada',
//         localidad:['Capital','General Alvear',
//                     'Godoy Cruz','Guaymallén',
//                     'Junín','La Paz','Las Heras',
//                     'Lavalle' ,'Lujan de Cuyo',
//                     'Maipú','Malargue','Rivadavia',
//                     'San Carlos','San Martín',
//                     'San Rafael','Santa Rosa',
//                     'Tunuyán','Tupungato'
//         ]
//     }

// });



// todo crear componentes con vue
Vue.component('comp1', 
    {
        template:'#combo',

        ready:function(){

           this.randomList();


        },

        data:function(){

            return{
                estado: false,
                nombre: "",
                label: "",
                list_label:['Capital','General Alvear',
                            'Godoy Cruz','Guaymallén',
                            'Junín','La Paz','Las Heras',
                            'Lavalle' ,'Lujan de Cuyo',
                            'Maipú','Malargue','Rivadavia',
                            'San Carlos','San Martín',
                            'San Rafael','Santa Rosa',
                            'Tunuyán','Tupungato'
                ]
            }
        },






        methods: {

            mostrarDato: function(){


                alert(this.estado);
            },

            randomList: function(){

                // del array de departamentos saco uno aleatorio
                var random =  this.list_label[Math.floor(Math.random() * this.list_label.length)];
                // retorno el valor 
                this.label=  random;

            },

            initComponent: function(){



            }







        }



    }) 

Vue.component('comp2', { 
  template:'<div>Component 2</div>' 
}) 




new Vue({
  el: 'body'
})