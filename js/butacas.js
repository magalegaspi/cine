
    $("#seleccionButacas").append(`<section id="pantalla"><h5>PANTALLA</h5></section>
   
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
  </form>`) ;
  
  



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

  