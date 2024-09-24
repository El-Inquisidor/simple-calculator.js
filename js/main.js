"using strict";


document.addEventListener("DOMContentLoaded", () => {
    let entrada = document.documentElement;
    let cButton = document.getElementById("C-Button");
    let rButton = document.getElementById("R-Button");

    entrada.addEventListener("keydown", writeChar);
    cButton.addEventListener("click", clearCalc);
    rButton.addEventListener("click", retrocesoListener);
    document.getElementById("button-0").addEventListener("click", teclaListener);
    document.getElementById("button-1").addEventListener("click", teclaListener);
    document.getElementById("button-2").addEventListener("click", teclaListener);
    document.getElementById("button-3").addEventListener("click", teclaListener);
    document.getElementById("button-4").addEventListener("click", teclaListener);
    document.getElementById("button-5").addEventListener("click", teclaListener);
    document.getElementById("button-6").addEventListener("click", teclaListener);
    document.getElementById("button-7").addEventListener("click", teclaListener);
    document.getElementById("button-8").addEventListener("click", teclaListener);
    document.getElementById("button-9").addEventListener("click", teclaListener);
    document.getElementById("button-.").addEventListener("click", teclaListener);
    document.getElementById("button-+").addEventListener("click", teclaListener);
    document.getElementById("button-=").addEventListener("click", teclaListener);
    document.getElementById("button-x").addEventListener("click", teclaListener);
    document.getElementById("button--").addEventListener("click", teclaListener);
    document.getElementById("button-%").addEventListener("click", teclaListener);
});

