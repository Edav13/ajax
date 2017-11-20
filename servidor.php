<?php
    require "conexion.php";

    $personas = $_GET['personas'];

    $nombreID = "nombreID";
    $emailID = "emailID";
    $actualizar = "actualizar";
    $borrar = "borrar";

    if($personas === "personas") {
        $resultadoBD = mysqli_query($con, "SELECT * FROM personas");

        $table = '<div class="container">';
        $table .= '<table class="table table-striped table-bordered">';
        $table .= '<tr>';
        $table .= '<th>Usuario</th>';
        $table .= '<th>Nombre</th>';
        $table .= '<th>Email</th>';
        $table .= '<th>Editar Usuario</th>';
        $table .= '<th>Borrar Usuario</th>';
        $table .= '</tr>';
        while($fila = mysqli_fetch_assoc($resultadoBD)) {
            $table .= '<tr>';
            $table .= '<td>' . $fila['usuario'] . '</td>';
            $table .= '<td id="'.$nombreID.$fila['usuario'].'">' . $fila['nombre'] . '</td>';
            $table .= '<td id="'.$emailID.$fila['usuario'].'">' . $fila['correo'] . '</td>';
            $table .= '<td><input id="'.$fila['usuario'].'" onclick="editarUsuario(this.id)" type="button" value="Editar" class="btn btn-default"></td>';
            $table .= '<td><input id="'.$borrar.$fila['usuario'].'" onclick="borrarUsuario('.$fila['usuario'].')" type="button" value="Borrar" class="btn btn-danger"></td>';
            $table .= '<td><input id="'.$actualizar.$fila['usuario'].'" onclick="actualizarUsuario('.$fila['usuario'].')" type="button" value="Actualizar" class="btn btn-primary" style="display:none"></td>';
            $table .= '</tr>';
        }
        $table .= '</table>';
        $table .= '<button onclick="ejecutarNuevaVentana()" class="btn btn-primary">Agregar Usuario</button>';

        echo $table;
        mysqli_close($con);
    }
    if(!empty($_GET['nombreActualizado'])) {
        $usuarioIDActualizado = $_GET['usuarioIDActualizado'];
        $nombreActualizado = $_GET['nombreActualizado'];
        $cliente = mysqli_real_escape_string($con, $nombreActualizado);
        $resultado = mysqli_query($con, "UPDATE personas SET nombre = '$cliente' WHERE usuario = $usuarioIDActualizado");
        mysqli_close($con);
    }
    if(!empty($_GET['usuarioIDEliminado'])) {
        $usuarioIDEliminado = $_GET['usuarioIDEliminado'];
        $resultado = mysqli_query($con, "DELETE FROM personas WHERE usuario = $usuarioIDEliminado");
        mysqli_close($con);
    }
    if(!empty($_GET['nuevoUsuario']) && !empty($_GET['nuevoEmail'])) {
        $nuevoUsuario = $_GET['nuevoUsuario'];
        $nuevoEmail = $_GET['nuevoEmail'];
        $resultado = mysqli_query($con, "INSERT into personas values('', '$nuevoUsuario', '$nuevoEmail')");
        mysqli_close($con);
    }
?>