<?php
require_once './libs/smarty-3.1.39/libs/Smarty.class.php';

class VistaTabla{
    private $smarty;

    public function __construct() {
        $this->smarty = new Smarty();
    }
    
    function showTabla($locales){
        $this->smarty->assign('locales', $locales);
        $this->smarty->display('Templates/tabla.tpl');
    }
}