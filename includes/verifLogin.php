<?php
// On démarre la session
session_start();

 $loginOK = false;  // cf Astuce
 $password = "1234";
 $hostname = "localhost";
 $database = "nourouDarayni";
 $username = "root";
 
 
// On n'effectue les traitement qu'à la condition que
// les informations aient été effectivement postées
if ( isset($_POST) && (!empty($_POST['login'])) && (!empty($_POST['password'])) ) {

  //extract($_POST);  // je vous renvoie à la doc de cette fonction
 $login = $_POST['login'];
 $mdp = $_POST['password'];
	
$conn = mysql_connect($hostname, $username, $password) 
	or die("Connecting to MySQL failed");

mysql_select_db($database, $conn)
	or die("Selecting MySQL database failed");
	
  // On va chercher le mot de passe afférent à ce login
  $sql = "SELECT* FROM membre WHERE pseudo = \"$login\"";
  $req = mysql_query($sql, $conn) or die('Erreur SQL : <br />'.$sql);
 
  // On vérifie que l'utilisateur existe bien
  if (mysql_num_rows($req) > 0) {
     $data = mysql_fetch_assoc($req);
  }

    // On vérifie que son mot de passe est correct
   if ($mdp == $data['motDePasse']) {
      $loginOK = true;
      echo "mot de passe = $mdp";
  }
  
  if($loginOK == true){
  	echo  $data['nom'];
   echo '<br>';
   echo  $data['prenom'];
   echo '<br>';
   echo  $data['email'];
   echo '<br>';
   echo  $data['adresse'];
   echo '<br>';
   echo  $data['telephone'];
  }
  else{
	echo 'Mot de passe incorrect!!!';
  }
  mysql_close($conn);
}
else{
	echo 'le mot de passe ou le login est vide';
}



// Si le login a été validé on met les données en sessions



/*$sSQL =  "SELECT nom, prenom FROM membre";
$result = mysql_query($sSQL, $conn);

while($row = mysql_fetch_object($result)) { 
	echo $row->nom . " " . $row->prenom . "
";
}*/

?>