<?php
    $personas = array ("Ana", "Alberto", "Beto", "Cindy", "David", "Esteban", "Fiorela", "Guisela", "Henry", "Irma", "Jeferson", "Kathy", "Liz", "Nancy", "Oscar", "Pedro");
    $nombre = $_GET['nombre'];
    $sugerencia = "";
    if($nombre !== "") {
        $nombre = strtolower($nombre);
        $n = strlen($nombre);
        foreach($personas as $persona) {
            $nombreServ = substr($persona, 0, $n);
            if(stristr($nombre, $nombreServ) !== false) {
                $sugerencia .= $sugerencia === "" ? $persona : ", $persona";
            }
        }
    } 
    echo $sugerencia === "" ? "No fue encontrado" : $sugerencia;
?>