<?php
 
//Connect to the Database
$con = mysql_connect('payattention.db.11463497.hostedresource.com', 'payattention', 'Rip1!tide') or die ('Connection Error.');
mysql_select_db('payattention', $con) or die('MySQL Error.');
 
//Run our query
$result = mysql_query('SELECT areas.id AS areaId, areas.name AS areaName, locations.id, locations.name, locations.address, locations.phone, locations.note, locations.hours, locations.incentive FROM locations INNER JOIN areas ON locations.areaId = areas.id;', $con) or die('SQL Error.');
 
$encode = array();

while($row = mysql_fetch_array($result,MYSQL_ASSOC)) {
   $encode[$row['areaName']][] = $row;
}

$output = json_encode(array('locations' => $encode));
//Output the output.
echo $output;
 
?>