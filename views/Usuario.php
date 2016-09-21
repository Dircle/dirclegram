<?php
  include_once('conexion.php');

  class Usuario {

    private name;
    private last_name;

    private $pdo;

    public function __get(){

    }

    public function addUsuario (){

      $this->pdo = Conexion::getConection();

      $data = $this->pdo->prepare('...');


      return  $data->execute();



    }



  }

  $user = new Usuario();



 ?>
