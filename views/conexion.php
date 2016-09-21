<?php
 class Conexion {

   private $pdo;

   public static function getConection(){

     try {

     self->$pdo = new PDO('...');

   } catch (PDOException $e) {

       echo $e->getMesaage();

     }

     return self->$pdo;
   }

 }


 ?>
