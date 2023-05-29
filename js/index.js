function inicializar(){
    console.log("onload en funcionamiento");
const x = new Registro();
x.render();

new Nav ([{url:"index.html", etiqueta:"Inicio"},
        {url:"productos.html", etiqueta:"Productos"},
        {url:"carrito.html", etiqueta:"Carrito"},
        {url:"detallesproductos.html", etiqueta:"Detalles de Productos"},
        {url:"productos.html", etiqueta:"Ofertas"},
]).render();

new Selection ([
    {src:"../asses/icons/pagoseguro.svg",h4:"Pago Seguro",h5:"100% Garantizado"},
    {src:"../asses/icons/envio.svg",h4:"Envío Gratis",h5:"Pedidios más de 100e"},
    {src:"../asses/icons/garantia.svg",h4:"Garantía de calidad",h5:"Todos los productos"},
    {src:"../asses/icons/ofertas.svg",h4:"Ofertas únicas",h5:"Clientes y newsletters"}
    
]).render();

new Pie ([
    {nombre:"Centro de ayuda"},
    {nombre:"Servicio al consumidor"},
    {nombre:"Escríbenos"},
    {nombre:"Servicio teléfonico"}
]).render();

new Foot ([
    {url:"politica.html", nombre:"Política de privacidad"},
    {url:"politica.html", nombre:"Condiciones de compra"},
    {url:"detallesproductos.html", nombre:"Opiniones de clientes"},
    {url:"politica.html", nombre:"Aviso de privacidad"}
]).render();



};

// links del nav
function Nav(links){
    this.links = links;

    this.render = () => {
        const inicio = document.getElementById("navegador");
        inicio.innerHTML = "<ul>"
        for(const item of this.links){
            inicio.innerHTML+= `<a href='${item.url}'>${item.etiqueta} </a>`
        }
        inicio.innerHTML += "</ul>"
    }
}
// empezamos con registro
function Registro(){
    this.render= () => {

    const boton = document.getElementById("bton");
    boton.addEventListener("click",this.validar); //el add listener tiene en la primera posición el tipo de evento y luego la funcion
    const btn = document.getElementById("btonn");
    btn.addEventListener("click",this.login);

        
    };
    
    this.validar= () => {
        const idEmail = document.getElementById("email").value;
        const idPass1 = document.getElementById("contra1").value;
        const idPass2 = document.getElementById("contra2").value;
        const local= window.localStorage;
        let base = JSON.parse(local.getItem("usuarios")) || []; 
        let item = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //nos asegura que el mail tenga @ t luego del punto tenga entre 2 y 3 caracteres.

        let existe= true;
        for(let i= 0; i < base.lenght; i++){
            if(base[i].email === idEmail){
                existe = false;
            }else{
                existe = true;
            }
        };
        
        if (idPass1 !== "" && idPass1 === idPass2 && existe === true) {
            base.push({ email:idEmail, password:idPass1 });
            local.setItem("usuarios", JSON.stringify(base));
        }else{
            alert("Las contraseñas no coinciden");
    }
            };
    }

    // funciion que verifique el login
    this.login = ()=>{
        const idEmail = document.getElementById("email1").value;
        const idPassword = document.getElementById("password").value;
        const local= window.localStorage;
        let base = JSON.parse(local.getItem("usuarios")) || []; 

        for(let i= 0; i < base.length; i++){
        let email = base[i].email;
        let pass = base[i].password;
        if(email === idEmail && pass === idPassword){
            window.location.href= "productos.html";
        }else{
            alert("Usuario inválido");
        }
    };
    }

// barra de select de beneficios

function Selection(beneficios){
    this.beneficios = beneficios;

    this.render = () => {
        const selec = document.getElementById("selec");
        for(const item of this.beneficios){
        selec.innerHTML+= ` <div class="beneficios1">
        <img src="${item.src}" alt="seguro" width="50px" height="auto">
    <div>
        <h4 class="h5">${item.h4}</h3>
        <h5 class="text_small">${item.h5}</h5>
    </div>`
}
    };
}

//footer

function Pie (columna1){
    this.columna1 = columna1;
    


    this.render = () => {
        const idPie = document.getElementById("colum1");
        idPie.innerHTML = "<ul class='menu'>"
        for(const item of this.columna1){
        idPie.innerHTML += `<div  class="col-izqui">
        
            <li>${item.nombre}</li>
        
    </div>`
    }
        idPie.innerHTML += "</ul>"

        
};
}

function Foot(barra1){
    this.barra1 = barra1;

    this.render = () => {
        const idColu = document.getElementById("colum2");
        idColu.innerHTML = "<ul class='menu'>"
        for(const item of this.barra1){
            idColu.innerHTML+=
            `<li><a href='${item.url}'>${item.nombre}</a></li>`
        }
        idPie2.innerHTML += "</ul>"
        
    };
    }










