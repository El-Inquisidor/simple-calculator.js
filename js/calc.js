"using strict";

//Función que determina los caracteres que se pueden escribir
let writeChar = function (event) {
    let charPermitidos = "0123456789()/*%+-.";
    let teclasEspecialesPerm = ["Backspace", "Enter", "F5", "F12"]
    let inputEl = document.getElementsByTagName("input")[0];

    if(!charPermitidos.includes(event.key) && !(teclasEspecialesPerm.includes(event.key))){
        event.preventDefault();
        return false;
    

    } else if(event.key === "Backspace"){
        inputEl.value = inputEl.value.slice(0,length-1);
    } else if(event.key === "Enter") {
        if(!(inputEl.value === "")) calcular(inputEl.value);
    } else{
        if(charPermitidos.includes(event.key)){
            inputEl.value = inputEl.value.concat(event.key);
        }   
    }
    return true;
}

let calcular = (operacion) => {
    let resultado = document.getElementsByTagName("p")[0];
    
    try {
        if(operacion.charAt(0) === "+" || operacion.charAt(0) === "-" || operacion.charAt(0) === "*" || operacion.charAt(0) === "/"){
            resultado.innerHTML = "= " + eval(resultado.innerHTML.slice(1,resultado.innerHTML.length)+operacion);
        } else {
            resultado.innerHTML = "= " + eval(operacion);
        }
    } catch(error){
        if(error instanceof SyntaxError) {
            console.log("Syntax Error");
            resultado.innerHTML = "Syntax Error";
        }
    }

    console.log(eval(operacion));
};

let clearCalc = () => {
    let inputEl = document.getElementsByTagName("input")[0];
    let resultado = document.getElementsByTagName("p")[0];

    inputEl.value = "";
    resultado.innerHTML = "";
};

let retrocesoListener = () => {
    let eventoR = new KeyboardEvent("keydown", {key: "Backspace"});
    writeChar(eventoR);
}

let teclaListener = (eventoClick) => {
    let tecla = eventoClick.currentTarget.getAttribute("data-key");
    let evento = new KeyboardEvent("keydown", {key: tecla});
    writeChar(evento);
}