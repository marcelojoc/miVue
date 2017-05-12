var app = new Vue({

    el: 'body',
    data:{
        nombre:'   Bloque de Identificación del Territorio/Facilitador/Familia relevada',
        localidad:['Capital','General Alvear',
                    'Godoy Cruz','Guaymallén',
                    'Junín','La Paz','Las Heras',
                    'Lavalle' ,'Lujan de Cuyo',
                    'Maipú','Malargue','Rivadavia',
                    'San Carlos','San Martín',
                    'San Rafael','Santa Rosa',
                    'Tunuyán','Tupungato'
        ]
    }

});



// todo crear componentes con vue
Vue.component('comp1', 
    {
        template:'<div>Component 1</div>',

        data:function(){

            return{
                estado: false,
                nombre: ""
            }
        }








    }) 

Vue.component('comp2', { 
  template:'<div>Component 2</div>' 
}) 
