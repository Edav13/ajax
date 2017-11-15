<?php
    require "conexion.php";

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];

    if(empty($nombre) || empty($correo)) {
        echo "<span style='color:red;'>"."Por favor ingrese su nombre y correo"."</span>";
    } else {
        $resultadoDB = mysqli_query($con, "INSERT into personas values('', '$nombre','$correo')");
        echo "<span style='color:red;'>"."Gracias ".$nombre." ".$correo."</span>";        
    }
    

?>