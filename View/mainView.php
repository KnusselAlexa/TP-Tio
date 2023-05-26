<?php
require_once './libs/smarty-3.1.39/libs/Smarty.class.php';

class mainView{
    private $smarty;

    public function __construct() {
        $this->smarty = new Smarty();
    }
    
    function showHome(){
        $this->smarty->display('Templates/index.tpl');
    }
    function showRecetas(){
        $this->smarty->display('Templates/recetas.tpl');
    }
}