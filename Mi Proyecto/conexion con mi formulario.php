<?php

$servidor = "localhost";
$usuario = "root";       
$password = "";          
$base_datos = "yoel_celulares"; 


$conn = new mysqli($servidor, $usuario, $password, $base_datos);


if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}


$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];


$sql = "INSERT INTO usuarios (nombre, email, mensaje) VALUES ('$nombre', '$email', '$mensaje')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
