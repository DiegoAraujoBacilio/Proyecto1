function Suma() {
    let etiquetaSuma = document.getElementById('Resultado1')

    let numero1 = document.getElementById('Numero1').value
    let numero2 = document.getElementById('Numero2').value

  if(numero1.length ==0 ||numero2.length ==0) {

     let etiquetaAlerta = document.getElementById('Alerta')

     etiquetaAlerta.innerHTML =  'No se pudo realizar tu suma'

     setTimeout(function(){
       etiquetaAlerta.innerHTML = ''
     },5000)
return
  }
  if(isNaN(parseFloat(numero1)) || isNaN(parseFloat(numero2))) {
    alert('Ingresar Solo Numeros')

   return

  }

    let suma = parseFloat(numero1) + parseFloat(numero2)

    etiquetaSuma.innerHTML = suma.toFixed(2);
}

function Multiplicacion() {
    let etiquetaMultiplicacion = document.getElementById('Resultado2')

    let numero3 = document.getElementById('Numero3').value
    let numero4 = document.getElementById('Numero4').value

    if(numero3.length ==0 ||numero4.length ==0) {
      
      let etiquetaAlerta1 = document.getElementById('Alerta1')

      etiquetaAlerta1.innerHTML =  'No se pudo realizar tu Multiplicacion'

      setTimeout(function(){
        etiquetaAlerta1.innerHTML = ''
      },5000)
 
      return
    }

    if(isNaN(parseFloat(numero3)) || isNaN(parseFloat(numero4))) {
      alert('Ingresa Solo Numeros')
      return
    }

    let multiplicacion = parseFloat(numero3) * parseFloat(numero4)

    etiquetaMultiplicacion.innerHTML = multiplicacion.toFixed(2);
}

function Resta() {
    let etiquetaResta = document.getElementById('Resultado3')

    let numero5 = document.getElementById('Numero5').value
    let numero6 = document.getElementById('Numero6').value

    if(numero5.length ==0 ||numero6.length ==0) {

      let etiquetaAlerta2 = document.getElementById('Alerta2')

     etiquetaAlerta2.innerHTML =  'No se pudo realizar tu Resta'

     setTimeout(function(){
       etiquetaAlerta2.innerHTML = ''
     },5000)

      return
    }

   if(isNaN(parseFloat(numero5)) || isNaN(parseFloat(numero6))) {
    alert('Ingresa Solo Numeros')
    return
   }

    let resta = parseFloat(numero5) - parseFloat(numero6)

    etiquetaResta.innerHTML = resta.toFixed(2);
}

function Divicion() {
    let etiquetaDivicion = document.getElementById('Resultado4')

    let numero7 = document.getElementById('Numero7').value
    let numero8 = document.getElementById('Numero8').value

    if(numero7.length ==0 ||numero8.length ==0) {

      let etiquetaAlerta3 = document.getElementById('Alerta3')

     etiquetaAlerta3.innerHTML =  'No se pudo realizar tu División'

     setTimeout(function(){
       etiquetaAlerta3.innerHTML = ''
     },5000)

      return
    }

    if(isNaN(parseFloat(numero7)) || isNaN(parseFloat(numero8))) {
      alert('Ingresa Solo Numeros')
      return
    }
    
    let divicion  = parseFloat(numero7) / parseFloat(numero8) 
    
    etiquetaDivicion.innerHTML = divicion.toFixed(2);
}































