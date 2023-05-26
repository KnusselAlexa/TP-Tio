<?php
require_once './Model/modelTabla.php';
require_once './View/mainView.php';

class mainController{

    // private $model;
    private $view;

    function __construct(){
        $this->view = new mainView();
    }
    
    function showHome(){
        $this->view->showHome();
    }
    function showRecetas(){
        $this->view->showRecetas();
    }
}
