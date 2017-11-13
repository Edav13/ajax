<?php
    require "conexion.php";

    $resultadoBD = mysqli_query($con, "SELECT * FROM personas");
    $usuariosBD = "";
    $usuariosBD .= "<table>";
    $usuariosBD .= "<tr>";
    $usuariosBD .= "<th>Nombre</th>";
    $usuariosBD .= "<th>Correo</th>";    
    $usuariosBD .= "</tr>";
    while($fila = mysqli_fetch_assoc($resultadoBD)) {
        $usuariosBD .= "<tr>";
        $usuariosBD .= "<td>" . $fila['nombre'] . "</td>";
        $usuariosBD .= "<td>" . $fila['correo'] . "</td>";
        $usuariosBD .= "</tr>";
    }
    $usuariosBD .= "</table>";

    echo $usuariosBD;

    mysqli_close($con);
?>