<?php
 
//Connect to the Database
$con = mysql_connect('payattention.db.11463497.hostedresource.com', 'payattention', 'Rip1!tide') or die ('Connection Error.');
mysql_select_db('payattention', $con) or die('MySQL Error.');
 
//Run our query
$result = mysql_query('SELECT * FROM locations', $con) or die('SQL Error.');
 
$locations = array();
while ($location = mysql_fetch_array($result, MYSQL_ASSOC)) {
	 $locations[] = $location;
}

$output = json_encode(array('locations' => $locations));
//Output the output.
echo $output;
 
?>