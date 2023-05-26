-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-11-2022 a las 13:26:27
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_tp_tio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `locales`
--

CREATE TABLE `locales` (
  `id` int(11) NOT NULL,
  `nombre_del_negocio` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `redes_sociales` varchar(100) NOT NULL,
  `tipo_de_negocio` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `locales`
--

INSERT INTO `locales` (`id`, `nombre_del_negocio`, `direccion`, `telefono`, `redes_sociales`, `tipo_de_negocio`) VALUES
(1, 'Ladran Sancho', 'Belgrano 591', '02494434141', '@ladran.restaurante', 'Restaurante'),
(2, 'Terraxa', 'Rodriguez 793', '2494360972', '@terraxatandil', 'Restaurante'),
(3, 'Mini suitis', 'Constitución 501', '2494366320', '@minisuitis', 'Restaurante y almacén '),
(4, 'Época de quesos', '14 de julio 604', '24944887501', '@epocadequeso', 'Restaurante y almacén '),
(5, 'Tierra de azafranes', 'San martín 1002', '2494436800', '@tierradeazafranes', 'Restaurante'),
(6, 'Rua livre', 'Irygoyen 717', '2494285615', '@rualivre.ar', 'Restaurante'),
(7, 'Celimundo', 'Chacabuco 1460', '2494331215', '@celimundosintacctandil', 'Local'),
(8, 'Celiexpress', 'Santa maria de oro 261', '2494533451', '@celiexpress', 'Almacen'),
(9, 'Tandilia cerveceria boutique', 'Avenida Avellaneda 599', '2494518633', '@tandiliataproom', 'Restaurante');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `locales`
--
ALTER TABLE `locales`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `locales`
--
ALTER TABLE `locales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
