<?php
$path = "connect.php";
include "$path";
$students = [];
$sql = "SELECT* FROM students";
$result = mysqli_query($connection, $sql);
$nums = mysqli_num_rows($result);

// $num = mysqli_num_rows($result);
if ($nums>0) {
    $cr = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $students[$cr]['Roll'] = $row['Roll'];
        $students[$cr]['Name'] = $row['Name'];
        $cr++;
    }
    echo json_encode($students);
}
