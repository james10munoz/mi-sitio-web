var input_cinco = document.querySelector("#input-5")
var input_cuatro = document.querySelector("#input-4")
var input_tres = document.querySelector("#input-3")
var input_dos = document.querySelector("#input-2")
var input_uno = document.querySelector("#input-1")
var btn_resultado = document.querySelector("#btn-resultado")
var resultado = document.querySelector("#resultado")

var barra_cinco = document.querySelector("#resultado_cinco")
var barra_cuatro = document.querySelector("#resultado_cuatro")
var barra_tres = document.querySelector("#resultado_tres")
var barra_dos = document.querySelector("#resultado_dos")
var barra_uno = document.querySelector("#resultado_uno")
var resultado_interno;


btn_resultado.addEventListener("click", function() {
    resultado_interno = parseInt(input_cinco.value) + parseInt(input_cuatro.value) + parseInt(input_tres.value) + parseInt(input_dos.value) + parseInt(input_uno.value)
    resultado.innerHTML = resultado_interno

    var total_cinco = parseInt(input_cinco.value) * 100 / resultado_interno
    barra_cinco.style.width = `${total_cinco}%`

    // n=document.getElementById("n")
    // n.innerHTML=parseFloat(total_cinco)
    

    if (parseInt(total_cinco+0.5) > parseFloat(total_cinco)) {
        porcentaje=parseInt(total_cinco) +1;
        mensaje5 = document.getElementById("mensaje5")
        mensaje5.innerHTML = porcentaje+"%"
    } else {
        mensaje5 = document.getElementById("mensaje5")
        mensaje5.innerHTML = parseInt(total_cinco)+"%"
        
    }

    var total_cuatro = parseInt(input_cuatro.value) * 100 / resultado_interno
    barra_cuatro.style.width = `${total_cuatro}%`

    if (parseInt(total_cuatro+0.5) > parseFloat(total_cuatro)) {
        porcentaje=parseInt(total_cuatro) +1;
        mensaje4 = document.getElementById("mensaje4")
        mensaje4.innerHTML = porcentaje+"%"
    } else {
        mensaje4 = document.getElementById("mensaje4")
        mensaje4.innerHTML = total_cuatro+"%"
    }

    var total_tres = parseInt(input_tres.value) * 100 / resultado_interno
    barra_tres.style.width = `${total_tres}%`

    if (parseInt(total_tres+0.5) > parseFloat(total_tres)) {
        porcentaje=parseInt(total_tres) +1;
        mensaje3 = document.getElementById("mensaje3")
        mensaje3.innerHTML = porcentaje+"%"
    } else {
        mensaje3 = document.getElementById("mensaje3")
        mensaje3.innerHTML = total_tres+"%"
    }

    var total_dos = parseInt(input_dos.value) * 100 / resultado_interno
    barra_dos.style.width = `${total_dos}%`

    if (parseInt(total_dos+0.5) > parseFloat(total_dos)) {
        porcentaje=parseInt(total_dos) +1;
        mensaje2 = document.getElementById("mensaje2")
        mensaje2.innerHTML = porcentaje+"%"
    } else {
        mensaje2 = document.getElementById("mensaje2")
        mensaje2.innerHTML = total_dos+"%"
    }

    var total_uno = parseInt(input_uno.value) * 100 / resultado_interno
    barra_uno.style.width = `${total_uno}%`

    if (parseInt(total_uno+0.5) > parseFloat(total_uno)) {
        porcentaje=parseInt(total_cutotal_unoatro) +1;
        mensaje1 = document.getElementById("mensaje1")
        mensaje1.innerHTML = porcentaje+"%"
    } else {
        mensaje1 = document.getElementById("mensaje1")
        mensaje1.innerHTML = total_uno+"%"
    }

})