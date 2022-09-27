<?php
    $path = "connect.php";
    require "$path";
    if(isset($_GET['roll'])) {
    $roll=$_GET['roll'];
    $sql = "SELECT * FROM students WHERE `Roll`=$roll LIMIT 1" ;
    $result = mysqli_query($connection, $sql);
    $row = mysqli_fetch_assoc($result);
    echo json_encode($row);
    }
