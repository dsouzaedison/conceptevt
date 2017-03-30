<?php
header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

$db_handle=mysql_connect('localhost','conceptevt01','Conceptevt@l2e') or die(mysql_error());
mysql_select_db('concept',$db_handle) or die(mysql_error());
$sql="SELECT * FROM `services` WHERE 1";
$result = mysql_query($sql) or die("0");

while($row = mysql_fetch_array($result))
	{
		$id = $row['id'];
		$caption = $row['caption'];
		$href = $row['url'];
		$a[] = array('id' => $id,'caption' => $caption, 'href' => $href) ;
	}
	echo json_encode($a);
mysql_close($db_handle);
?>