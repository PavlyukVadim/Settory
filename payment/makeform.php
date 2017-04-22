<?php
require("api.php"); //Все уже придумано за нас ...
 
$micro = sprintf("%06d",(microtime(true) - floor(microtime(true))) * 1000000); // Ну раз что-то нужно добавить для полной уникализации то ..
$number = date("YmdHis"); //Все вместе будет первой частью номера ордера
$order_id = $number.$micro; //Будем формировать номер ордера таким образом...
 
$merchant_id='i46243261363';
$signature="zQXHS9gZvtAP1klfppUbEc3TjD501uEmy8b6zV8A"; //Сюда вносите public_key

$price = $_GET['price']; //Все что нужно скрипту - передать в него сумму (вы можете передавать все, вплоть до ордера и описания ...)
 
$liqpay = new LiqPay($merchant_id, $signature);
$html = $liqpay->cnb_form(array(
 'version' => '3',
 'amount' => "$price",
 'currency' => 'UAH',     //Можно менять  'EUR','UAH','USD','RUB','RUR'
 'description' => "Вызов Settory",  //Или изменить на $desc
 'order_id' => $order_id
 ));
 
 echo $html;
 
?>