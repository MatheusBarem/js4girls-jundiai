<html>
  <body>
    <?php
      $num = rand(1000, 10000);
      $name = $_POST['name'];
      $minutes = $_POST['pickupminutes'];
      $total = $_POST['total'];

      echo "<h1>Churros JS 4 Girls</h1>";
      echo "<h2>Confirmação do pedido</h2>";
      echo "<strong>Order #" . $num . "</strong><br />";
      echo "Nome: " . $name . "<br />";
      echo "Pronto em: " . $minutes . " minutes<br />";
      echo "Total: <em>" . $total . "</em>";
    ?>
  </body>
</html>
