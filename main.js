"use strict";

let numero1 = 0;
let numero2 = 0;
let total = 0;

Iniciocaptcha();

function Iniciocaptcha(){
    numero1 = Math.floor(Math.random()*10);
    numero2 = Math.floor(Math.random()*10);
    total = numero1 + numero2;

    document.querySelector("#datocaptcha").innerHTML = numero1 + " + " + numero2;
    let btn = document.querySelector("#validarcaptcha");
    btn.addEventListener("click", Evaluarchaptcha);    
}

function Evaluarchaptcha(){
    let valorusuario = document.querySelector("#capturacaptcha");
    let valoringreso = valorusuario.value;

    if (total === parseInt(valoringreso)){
        document.querySelector("#resultado").innerHTML = "  ¡CORRECTO!";
        Iniciocaptcha();        
    }
    else { 
        document.querySelector("#resultado").innerHTML = "¡INCORRECTO!";
        Iniciocaptcha();
    }

}

let formRecetas = document.querySelector (".formAgregar-receta");
formRecetas.addEventListener("submit", agregar);

function agregar (e){
    e.preventDefault();

    let formData = new FormData (formRecetas);
    
    let receta = formData.get("receta");
    let ingredientes = formData.get("ingredientes");
    let preparacion = formData.get("preparacion");    

    console.log (receta, ingredientes, preparacion);

}

//interaccion con la barra de menu/
document.querySelector(".btn_menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("show");
}


/formulario/
let formSubmit = document.querySelector("#form_tabla_dinamica");
formSubmit.addEventListener("submit", function (e) {
    e.preventDefault();
    agregar();
});

//tabla con api
const url = 'https://62c483917d83a75e39fb9ae1.mockapi.io/api/v1/locales';
let id = 0;
async function mostrar() {
    let tabla = document.querySelector("#tabla");
    tabla.innerHTML = " ";
    try {
        let respuesta = await fetch(url);
        let locales = await respuesta.json();

        console.log("respuesta ", respuesta);
        if (respuesta.ok) {
            for (let negocio of locales) {
                let Nombre = negocio.Nombre;
                let Calle = negocio.Calle;
                let Altura = negocio.Altura;
                let Telefono = negocio.Telefono;
                let Redes = negocio.Redes;
                let TipoNegocio = negocio.TipoNegocio
                id = negocio.id;

                tabla.innerHTML += `
                <tr id= "tr-${id}">
                
                    <td>${Nombre}</td>    
                    <td>${Calle}</td>
                    <td>${Altura}</td>
                    <td>${Telefono}</td>
                    <td>${Redes}</td>
                    <td>${TipoNegocio}</td>
                    <td class="tdApi">
                        <img src="images/editar.png" id="${id}" class= "btnApi-editar">
                    </td>
                    <td class="tdApi">
                        <img src="images/eliminar.png" id="${id}" class="btnApi-eliminar">
                    </td>
                </tr> `
                let btnModificar = document.querySelectorAll(".btnApi-editar");
                for (let btn of btnModificar) {
                    btn.addEventListener("click", function (e) {
                        let idRow = e.target.id;
                        modificarApi(idRow);
                    });
                }
                let btnBorrar = document.querySelectorAll(".btnApi-eliminar");
                for (let btn of btnBorrar) {
                    btn.addEventListener("click", function (e) {
                        let idRow = e.target.id;
                        eliminarApi(idRow);
                    })
                }
            }


        }
    } catch (error) {
        console.log(error);
    }
}

//form 2(para modificar, los traemos del dom para modificarlos)
let nombreModificado = document.querySelector("#NombreMod");
let calleModificado = document.querySelector("#CalleMod");
let alturaModificado = document.querySelector("#AlturaMod");
let telefonoModificado = document.querySelector("#TelefonoMod");
let redesModificado = document.querySelector("#Red_socialMod");
let tiponegocioModificado = document.querySelector("#Tipo_negocioMod");
let btnEditar = document.querySelector('#btnModificar');

async function modificarApi(id) {
    let response = await fetch(`${url}/${id}`);
    let json = await response.json();//se pegan los valores a los imput cn el fetch
    nombreModificado.value = json.Nombre;
    calleModificado.value = json.Calle;
    alturaModificado.value = json.Altura;
    telefonoModificado.value = json.Telefono;
    redesModificado.value = json.Redes;
    tiponegocioModificado.value = json.TipoNegocio;
    btnEditar.addEventListener('click', editar) //al crear el eventlistener , y volver a editar, volvia a hacer dos event, y creaba dos put y dos get x eso el remove
    function editar() {
        let json = {
            Nombre: nombreModificado.value,
            Calle: calleModificado.value,
            Altura: alturaModificado.value,
            Telefono: telefonoModificado.value,
            Redes: redesModificado.value,
            TipoNegocio: tiponegocioModificado.value
        }
        insertarMod(id, json);
        btnEditar.removeEventListener('click', editar);//una vez editado remueve el click del boton y no se copia mas de una vez (suma los editados)
    }
}




async function insertarMod(id, json) { //este es el que modifica y sobreescribe los valores en el json

    try {
        let respuesta = await fetch(`${url}/${id}`, {
            "method": "PUT",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(json),
        });
        if (respuesta.ok) {
            console.log("Modificado");
            mostrar();
        }
    }
    catch (error) {
        console.log(error);
    }
}


async function agregar() {
    try {
        let nombre = document.querySelector("#Nombre").value;
        let calle = document.querySelector("#Calle").value;
        let altura = document.querySelector("#Altura").value;
        let telefono = document.querySelector("#Telefono").value;
        let redes = document.querySelector("#Red_social").value;
        let tiponegocio = document.querySelector("#Tipo_negocio").value;

        let agregarLocal = {
            Nombre: nombre,
            Calle: calle,
            Altura: altura,
            Telefono: telefono,
            Redes: redes,
            TipoNegocio: tiponegocio
        };



        let respuesta = await fetch(url, {
            "method": "POST",
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(agregarLocal),
        });
        if (respuesta.ok) {
            console.log(agregarLocal);
            mostrar();
        }

    }
    catch (error) {
        console.log(error);
    }
}

async function eliminarApi(idToDelete) {
    console.log("hola", idToDelete);
    try {
        let respuesta = await fetch(`${url}/${idToDelete}`, {
            "method": "DELETE"
        });
        if (respuesta.ok) {
            mostrar();

        }

    }
    catch (error) {
        console.log(error);
    }
}

mostrar();