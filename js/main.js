

// Evento Load con anuncio

$(function() {
    $("#contenedor-del-popover").fadeIn();
    
    $("#cerrar").click(function() {
      $("#contenedor-del-popover").fadeOut();
    })
  });



// GET Peliculas y su info

$( document ).ready(function()  { 
    $.get("js/datos.json", function (respuesta, estado) {
          if (estado === "success"){
              console.log(respuesta);
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("#grid1").append(`<section id="cartelera${dato.id}">
                                   <a href= "pages/${dato.htmlReferencia}"><img src='multimedia/${dato.imagen}' 'class="movie${dato.id}"' width='240'></a>
                                   <h3 class="title${dato.id}" >${dato.pelicula}</h3>
                                   
                                  </section>`);
            }  
            
        }
    });
});



// Compra de Entradas

function mostrarComprarEntradas () {
  $("#botonComprar").click(() => { 
      $("#formuPeli").toggle("fast");
  });
}

mostrarComprarEntradas ();

// Eleccion de Entradas

$("#eleccionEntradas").append(`<form id="formuPeli" style="display: none">

<p>Fecha:</p><input type="date" id="start" name="trip-start" value="2021-12-31" min="2021-12-31" max="2022-12-31"> 

<p>Horarios:</p><select class="inputsClass" id="time">
                <option selected >17hs</option>
                <option >18hs</option>
                <option >19hs</option>
                <option >20hs</option>
                </select>

<p>Tipo de sala:</p><select class="inputsClass" id="type">
                <option selected >2D</option>
                <option>3D</option>
                <option>XD</option>
                </select>

<p>Sucursal:</p><select class="inputsClass" id="complex">
                <option selected >Lanus</option>
                <option>Banfield</option>
                <option>Temperley</option>
                <option>Gerli</option>
                </select>
                
                <input type="submit" value="Vamos!" class="glow-on-hover"></form>
                
                <h4 style="display: none" >Elegi tus butacas!</h4>`);

 let arrayCarrito = [];  



function agregarDatos () {
$("#formuPeli").submit(function (e) {
  e.preventDefault();
  var dia = document.getElementById('start');
  var hora = document.getElementById('time');
  var tipo = document.getElementById('type');
  var complejo = document.getElementById('complex');
  arrayCarrito.push(dia.value);
  arrayCarrito.push(hora.value);
  arrayCarrito.push(tipo.value);
  arrayCarrito.push(complejo.value);
  console.log(arrayCarrito);
  const datosJSON = JSON.stringify(arrayCarrito);
  localStorage.setItem("datosCarrito", datosJSON);
  $("h4").fadeIn();
  $("h4").click(() => { 
    $("#seleccionButacas").show("fast");
});
$("#infoFinal").prepend(`Elegiste la función para el día <strong>${arrayCarrito[0]}</strong> a las <strong>${arrayCarrito[1]}</strong> en <strong>${arrayCarrito[2]}</strong> en el complejo de <strong>${arrayCarrito[3]}</strong>`)
});}

agregarDatos();



$("#seleccionButacas").prepend(`<section id="pantalla"><h5>PANTALLA</h5></section>
   
<form name="miform" id="miform">
 <section id="fila1">
<input name="services[]" type="checkbox" class="seat" id="seat1" data-price= "300"  >
<label for="seat1">
  <p class="asiento">A1</p>
  <p>$300</p>
</label>
</input>
<input name="services[]" type="checkbox" class="seat" id="seat2" data-price= "300"  >
<label for="seat2">
  <p class="asiento">A2</p>
  <p>$300</p>
</label>
</input>
<input name="services[]" type="checkbox" class="seat" id="seat3" data-price= "300"  >
<label for="seat3">
  <p class="asiento">A3</p>
  <p>$300</p>
</label>
</input>
<input name="services[]" type="checkbox" class="seat" id="seat4" data-price= "300" >
<label for="seat4">
  <p class="asiento">A4</p>
  <p>$300</p>
</label>
</input>
<input name="services[]" type="checkbox" class="seat" id="seat5" data-price= "300"  >
<label for="seat5">
  <p class="asiento">A5</p>
  <p>$300</p>
</label>
</input>
</section>

<section id="fila2">

<input name="services[]" type="checkbox" class="seat" id="seat1b" data-price= "300"  >
<label for="seat1b">
  <p class="asiento">B1</p>
  <p>$300</p>
</label>
</input>
<input name="services[]" type="checkbox" class="seat" id="seat2b" data-price= "300"  >
<label for="seat2b">
  <p class="asiento">B2</p>
  <p>$300</p>
</label>
</input>
<input name="services[]" type="checkbox" class="seat" id="seat3b" data-price= "300"  >
<label for="seat3b">
  <p class="asiento">B3</p>
  <p>$300</p>
</label>
</input>
<input name="services[]" type="checkbox" class="seat" id="seat4b" data-price= "300"  >
<label for="seat4b">
  <p class="asiento">B4</p>
  <p>$300</p>
</label>
</input>
<input name="services[]" type="checkbox" class="seat" id="seat5b"  data-price= "300" >
<label for="seat5b">
  <p class="asiento">B5</p>
  <p>$300</p>
</label>
</input>
</section>

<section id="fila3">

<input name="services[]" type="checkbox" class="seat" id="seat1c" data-price= "300" >
<label for="seat1c">
  <p class="asiento">C1</p>
  <p>$300</p>
</label>
</input>
<input name="services[]" type="checkbox" class="seat" id="seat2c"  data-price= "300" >
<label for="seat2c">
  <p class="asiento">C2</p>
  <p>$300</p>
</label>
</input>
<input name="services[]" type="checkbox" class="seat" id="seat3c" data-price= "300" >
<label for="seat3c">
  <p class="asiento">C3</p>
  <p>$300</p>
</label>
</input>
<input name="services[]"  type="checkbox" class="seat" id="seat4c" data-price="300" >
<label for="seat4c">
  <p class="asiento">C4</p>
  <p>$300</p>
</label>
</input>
<input name="services[]" type="checkbox" class="seat" id="seat5c"  data-price="300" >
<label for="seat5c">
  <p class="asiento">C5</p>
  <p>$300</p>
</label>
</input>
</section>
</form> 
<section id="precioTotal">
<span class="result">El precio total es <span class="price-total">$0</span></span>
</section>
<section id="infoFinal">
</section>



`) ;




function getPrice (selector) {
return $(selector)
  .find('[data-price]:checked')
  .map(function () {
    return parseFloat(this.dataset.price)
  })
  .get()
  .reduce(function (a, b) {
    return a + b
  }, 0)
}

$('form').on('change', function () {
var servicesPrice = getPrice('.services')
var totalPrice = getPrice('form')

$('.price-services').text("$" + servicesPrice)
$('.price-total').text("$" + totalPrice)
})

