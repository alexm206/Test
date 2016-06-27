<?php
     

   $to_copy = 'un_cle_v@mail.ru';
   $subject = 'Order from '.$_SERVER['HTTP_REFERER'];
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Name: ".$_GET['client']."\nTelephone: ".$_GET['tel']."\nExample: ".$_SERVER['REMOTE_ADDR'];
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   mail($to_copy, $subject, $message);
   $msg = "Поздравляем! Ваш заказ принят!";
	}
?>

<html lang="ru">
    <head>
        <meta http-equiv="Content-Language" content="ru">
<meta http-equiv="Content-Type" content="text/html; utf-8">
        <title><?=$msg?></title>
        <style type="text/css">
            body {
                line-height: 1;
                height: 100%;
                font-family: Arial;
                font-size: 15px;
                color: #313e47;
                width: 100%;
                height: 100%;
                padding: 0;
                margin: 0;
                background: url('bg-ok.png');
            }
            h2 {
                margin: 0;
                padding: 0;
                font-size: 36px;
                line-height: 44px;
                color: #313e47;
                text-align: center;
                font-weight: bold;
            }
            a {
                color: #69B9FF;
            }
            .list_info li span {
                width: 150px;
                display: inline-block;
                font-weight: bold;
                font-style: normal;
            }
            .list_info {
                text-align: left;
                display: inline-block;
                list-style: none;
            }
            .list_info li {
                margin: 11px 0px;
            }
            .fail {
                margin: 25px 0 50px 0px;
                text-align: center;
            }
            .email {
                position: relative;
                text-align: center;
                margin-top: 40px;
            }
            .email input {
                height: 30px;
                width: 200px;
                font-size: 14px;
                padding-right: 10px;
                padding-left: 10px;
                outline: none;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
                border: 1px solid #B6B6B6;
                margin-bottom: 10px;
            }
            .block_success {
                max-width: 960px;
                padding: 70px 30px 70px 30px;
                margin: 0px auto;
            }
            .success {
                text-align: center;
            }
        </style>        
		
		
    </head>
    <body>
	

        <div class="block_success">					
            <h2 style="text-transform: uppercase;"><?=$msg?></h2>
            <p class="success">
                <?=$msg2?>
            </p>
            <h3 class="success">
                Пожалуйста, проверьте правильность введенной Вами информации.
            </h3>
            <div class="success">
                <ul class="list_info">
                    <li><span>Ф.И.O.:  </span><span id="client"><?=$_GET['client']?></span></li>
                    <li><span>Телефон: </span><span id="tel"><?=$_GET['tel']?></span></li>
					
                </ul>
                <br/><span id="submit"></span>
            </div>
            <p class="fail success">Если вы ошиблись при заполнени формы, то, пожалуйста, <a href="javascript: history.back(-1);">заполните заявку еще раз</a></p>

        </div>
	<?php 
	$tmp = $_SERVER['HTTP_REFERER'];
header('Refresh: 10; URL='.$tmp); 

exit; 
?> 
<? //foreach($data as $key => $value) { echo "$key = $value <br />"; } ?>

</body>
</html>