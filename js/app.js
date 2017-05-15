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
        template:'  <div class="form-group">\
                        <label class="control-label col-xs-6">{{label }} {{actividad}}</label>\
                        <div class="col-xs-6">\
                            <p>{{ nombre }}</p>\
                            <input type="number" class="form-control"  name="5" id="barrio_c" v-if="estado" v-model="nombre">\
                        </div>\
                    </div>',


        ready:function(){

           this.randomList();


        },

        data:function(){

            return{
                estado: true,
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

        props:['actividad'],

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
  template:'<div>Component 2 Oscar</div>' 
}) 



Vue.filter()








new Vue({
  el: 'body'
})