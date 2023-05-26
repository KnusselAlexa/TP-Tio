<?php
require_once './Model/modelTabla.php';
require_once './View/viewTabla.php';

class ControllerTabla{

    private $model;
    private $view;

    function __construct(){
        $this->model = new ModelTabla();
        $this->view = new VistaTabla();
    }
    
    function viewTabla(){
        $locales = $this->model->getTabla();
        $this->view->showTabla($locales);
    }
}
