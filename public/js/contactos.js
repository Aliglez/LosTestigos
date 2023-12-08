const getValueInput = () => {
    
    let nombre = document.querySelector("#exampleFormControlInput2").value;
    let email = document.querySelector("#exampleFormControlInput1").value;
    let mensaje = document.querySelector("#exampleFormControlTextarea1").value;

   console.log(nombre + email + mensaje); 
   
    document.getElementById('#containerDates').innerHTML = /* html */`Sr/a  ${nombre}, con correo electrónico ${email}, su mensaje "${mensaje}" ha sido recibido, contactaremos con usted a la mayor brevedad. Gracias.`;

}