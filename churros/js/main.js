function updateOrder() {
  // Declara constantes
      const TAXRATE = 0.0925;
      const DONUTPRICE = 0.50;
  // Declara váriavel para os tipos de churros como: doce de leite e chocolate
      var numCakeDonuts = parseDonuts(document.getElementById("cakedonuts").value);
      var numGlazedDonuts = parseDonuts(document.getElementById("glazeddonuts").value);
  // Validação das váriaveis de tipos de churros
      if (isNaN(numCakeDonuts))
        numCakeDonuts = 0;
      if (isNaN(numGlazedDonuts))
        numGlazedDonuts = 0;
  // Realiza o calculo da quantidade dos tipos de churros vezes o preço do churros (constante)
      var subTotal = (numCakeDonuts + numGlazedDonuts) * DONUTPRICE;
//  Realiza os calculos de subtotal vezes a taxa de imposto (constante)
      var tax = subTotal * TAXRATE;
      var total = subTotal + tax;

      document.getElementById("subtotal").value = "$" + subTotal.toFixed(2);
      document.getElementById("tax").value = "$" + tax.toFixed(2);
      document.getElementById("total").value = "$" + total.toFixed(2);
    }

    function parseDonuts(donutString) {
      numDonuts = parseInt(donutString);
      if (donutString.indexOf("dozen") != -1)
        numDonuts *= 12;
      return numDonuts;
    }

    function placeOrder(form) {
      if (document.getElementById("name").value == "")
        alert("Favor informar seu nome.");
      else if (document.getElementById("pickupminutes").value == "" ||
        isNaN(document.getElementById("pickupminutes").value))
        alert("Desculpe mas você deve informar quantos minutos tera o preparo.");
      else
        // Submit the order to the server
        form.submit();
    }
