<?php
class ModelTabla{

    private $db;
    function __construct(){
        $this->db = new PDO('mysql:host=localhost;'.'dbname=db_tp_tio;charset=utf8', 'root', '');
    }
    function getTabla(){
        $query = $this->db->prepare("SELECT * FROM locales");
        $query->execute();
    
        $locales = $query->fetchAll(PDO::FETCH_OBJ); 
        
        return $locales;
    }
}