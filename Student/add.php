<?php
$path = "connect.php";
include "$path";
$postData = file_get_contents("php://input");
if(isset($postData) && !empty($postData)) {
    $request = json_decode($postData);

    $roll = mysqli_real_escape_string($connection, trim($request->Roll));
    $name = mysqli_real_escape_string($connection, trim($request->Name));

    $sql = "Insert into students (`Roll`, `Name`
        ) VALUES ('{$roll}', '{$name}')";

    mysqli_query($connection, $sql);
}
