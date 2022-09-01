<?php
    $path = "connect.php";
    require "$path";
    if(isset($_GET['roll'])) {
    $roll=$_GET['roll'];
    $sql = "DELETE FROM students WHERE `Roll`=$roll";
    mysqli_query($connection, $sql);
    }
?>
