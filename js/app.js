var app = new Vue({

    el: 'body',
    data:{
        estado:'prueba',
        grid: ""

    },

    methods:{




    }





});


// // todo crear componentes con vue
// Vue.component('comp1', 
//     {
//         template:`<div class="form-group animated rubberBand">
//                         <label class="control-label col-xs-6">{{label }} {{actividad}}</label>
//                         <div class="col-xs-6">
//                             <p>{{ nombre }}</p>
//                             <input type="number" class="form-control"  name="5" id="barrio_c" v-if="estado" v-model="nombre">
//                         </div>
//                     </div>`,


//         ready:function(){

//            this.randomList();


//         },

//         data:function(){

//             return{
//                 estado: true,
//                 nombre: "",
//                 label: "",
//                 list_label:['Capital','General Alvear',
//                             'Godoy Cruz','Guaymallén',
//                             'Junín','La Paz','Las Heras',
//                             'Lavalle' ,'Lujan de Cuyo',
//                             'Maipú','Malargue','Rivadavia',
//                             'San Carlos','San Martín',
//                             'San Rafael','Santa Rosa',
//                             'Tunuyán','Tupungato'
//                 ]
//             }
//         },

//         props:['actividad'],

//         methods: {

//             mostrarDato: function(){

//                 alert(this.estado);
//             },

//             randomList: function(){

//                 // del array de departamentos saco uno aleatorio
//                 var random =  this.list_label[Math.floor(Math.random() * this.list_label.length)];
//                 // retorno el valor 
//                 this.label=  random;

//             },

//             initComponent: function(){



//             }







//         }

//     }) 




// Vue.component('comp2', { 
//   template:`             <div class="form-group animated  jello" id= "">
//                                 <label class="control-label col-xs-6"></label>
//                                 <div class="col-xs-6">
//                                     <div class="form-group">
//                                         <label class="control-label col-xs-4">¿De qué edad/es?</label>
//                                         <div class="col-xs-8" >

//                                             <ul id = "list_edades"class="text-uppercase">

//                                             </ul>
//                                             <input type="number" class="form-control"  name ="edad_embarazo" id= "edad_embarazo" >
//                                             <br>
                                            
//                                             <button type="button" class="btn btn-info" id="btn_nueva_edad">Ingresar Edad</button>                                           
                                            
//                                         </div>  
//                                     </div>
//                                 </div>
// 				            </div>`
// }) 



// Vue.component('numerico',{

//     template: '<button @click="incrementar">{{numeroClicks}}</button>',
//     data: function() {
//         return {
//         numeroClicks: 0
//         }
//     },

//     methods:{

//         incrementar: function(){

//             this.numeroClicks++;

//         }


//     }

// });

// Vue.component('lista',{

//     template: ` <div class="form-group">
//                 <label class="control-label col-xs-6">{{title}}</label>
//                 <div class="col-xs-6">
//                     <select class="form-control" id="localidad" name ="4" >
                    

//                     </select>
//                 </div>
//             </div>`,
//     data: function() {
//         return {
//             title:"aa"
//         }
//     },

//     props:['title'],

//     methods:{

//         incrementar: function(){

//             this.numeroClicks++;

//         }


//     }

// });



Vue.component('pregunta',{

    template: ` <div class="form-group">
                    <label for="inputName" class="control-label col-xs-6" v-if="estado === 'prueba'">{{label}}</label>
                    <div class="col-xs-6" v-if="tipo == 'text'">
                        <input type="text" class="form-control"  name= "nroRelev" id="nroRelev" v-model="grid" required>
                    </div>
                    <div class="col-xs-6" v-if="tipo == 'select'">
                        <select class="form-control" id="localidad" name ="4" >

                                <option v-for="(key, val) in listas"  value ="{{key}}">{{ val }}</option>


                        </select>
                        {{content}}
                    </div>
                    <div class="col-xs-6" v-if="tipo == 'option'">
                        <input type="text" class="form-control"  name= "nroRelev" id="nroRelev" value="este es el option " required>
                    </div>
                    <div class="col-xs-6" v-if="tipo == 'si-no'">
                        <select class="form-control" name= "embarazo" id= "embarazo" placeholder= "seleccionar" >
                            <option value="0">SI</option>
                            <option value="1">NO</option>
                        </select>
                    </div>


                </div>`,                           
                
    props: {
                // basic type check (`null` means accept any type)
                grid: Number,
                // multiple possible types (1.0.21+)
                label: [String, Number],
                // a required string
                tipo: {
                    type: String,
                    
                },
                // a number with default value
                content: {
                    type: String,
                    
                }
            },

    data:function(){

        return{
            estado: 'prueba',
            grid: "",
            label: "",
            tipo:"",
            content:"",
            listas:[]

        }

    },

    watch:{

        'content': function () {
        
                alert('tu vieja');
        
        },


    },
    // computed:{
        
        
    //     listado:function(datos){

    //     var arreglo= datos.split(,)
    //     return this.listas=arreglo;
    //     }

    // },

     //props:['label', 'grid', 'tipo','content'],
    })








































// todo crear filtro para edades

Vue.filter('edades', function(value){

    // let inf = parseInt(linf);
    // let sup = parseInt(lsup);



    return value.toUpperCase(this.tipo)
})


Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('')
})




// var url= "https://randomuser.me/api/?results=50";
// var grid = new Vue({
//   el: 'body',

//   created: function(){

//     this.ajaxResponse();

//   },

//   data:{
//         estado: false,
//         tipo:"",
//         cond:"",
//         img: "",
//         edad:""
//   },

//   methods:{

//         ajaxResponse: function(){

//             this.$http.get(url)

//                 .then(function(resp){

//                     console.log(resp.body.results[9].picture)
//                     this.img= resp.body.results[9].picture.large
//                 })



//         }






//   }




// })

// Vue.transition('bounce', {
//   enterClass: 'rubberBand',
//   leaveClass: 'headShake'
// })