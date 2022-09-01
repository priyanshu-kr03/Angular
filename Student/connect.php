<?php
     header("Access-Control-Allow-Origin: *");
     header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
     header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
     $servername = "localhost";
     $username = "root";
     $password = "";
     $database = "angularphpcrud";
     $connection = mysqli_connect($servername, $username, $password, $database);
     if(!$connection)
          echo "UnSuccessful";
?>