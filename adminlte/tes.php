<?php 

$str1='LOVECODING';
$str2='LOVE';
if (strpos($str1, $str2)) {
	echo $str1."contains".$str2;
	# code...
}else{
	echo "\"".$str1."\" does not contains \"".$str2."\"";
}

?>