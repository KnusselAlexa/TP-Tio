<?php
require_once './Controller/controllerTabla.php';
require_once './Controller/mainController.php';

define('BASE_URL', '//'.$_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']).'/');

if (!empty($_GET['action'])) {
    $action = $_GET['action'];
} else {
    $action = 'home';
}

$params = explode('/', $action);

$controllerTabla = new controllerTabla();
$mainController = new mainController();

switch ($params[0]) {
    case 'list':
        $controllerTabla->viewTabla();
        break;
    case 'home':
        $mainController->showHome();
        break;
    case 'recetas':
        $mainController->showRecetas();
        break;
    }