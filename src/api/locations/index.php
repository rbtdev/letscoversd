<?php
 
//Connect to the Database
$con = mysql_connect('payattention.db.11463497.hostedresource.com', 'payattention', 'Rip1!tide') or die ('Connection Error.');
mysql_select_db('payattention', $con) or die('MySQL Error.');
 
//Run our query
$result = mysql_query('SELECT * from locations');
$encode = array();

while($row = mysql_fetch_array($result,MYSQL_ASSOC)) {
   $encode[] = $row;
}
$output = json_encode(array('locations' => $encode));
//Output the output.
echo $output;
 
?>