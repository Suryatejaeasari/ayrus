<?php
$hostName="localhost";
$dbUser="root";
$dbPassword="";
$dbName="employee";
$con=mysqli_connect($hostName,$dbUser,$dbPassword,$dbName);
if(!$con){
    die("something went wrong;");
}


?> 