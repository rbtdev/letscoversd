<?php
$con = mysql_connect('payattention.db.11463497.hostedresource.com', 'payattention', 'Rip1!tide') or die ('Connection Error.');
mysql_select_db('payattention', $con) or die('MySQL Error.');
$result = mysql_query('SELECT * FROM areas', $con) or die('SQL Error.');
$resultArray = array();
while($row = mysql_fetch_array($result,MYSQL_ASSOC)) {
   $resultArray[] = $row;
}
$output = json_encode(array('areas' => $resultArray));
//Output the output.
echo $output;
 
?>