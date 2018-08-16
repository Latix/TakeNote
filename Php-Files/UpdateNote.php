<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Connecting to MySQL Database.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate Note Id from JSON $obj array and store into $Note Id.
 $NOTE_ID = $obj['note_id'];
 
 // Populate Note from JSON $obj array and store into $Note.
 $note = $obj['note'];
 
 // Populate Title from JSON $obj array and store into $Title.
 $title = $obj['title'];
 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "UPDATE notes SET title= '$title', note = '$note' WHERE noteId = '$NOTE_ID'";
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Record Successfully Updated.' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>