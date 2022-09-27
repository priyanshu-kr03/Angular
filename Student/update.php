<?php
$path = "connect.php";
include "$path";
$postData = file_get_contents("php://input");
    if(isset($postData) && !empty($postData)) {
        $request = json_decode($postData);

        $roll = mysqli_real_escape_string($connection, (int)$_GET['roll']);
        $name = mysqli_real_escape_string($connection, trim($request->Name));
        $sql = "UPDATE `students` SET `Roll` = '$roll', `Name` = '$name' WHERE `Roll` = '{$roll}' LIMIT 1";
        mysqli_query($connection, $sql);
    }
?>