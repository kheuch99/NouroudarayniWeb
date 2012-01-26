<?php
	$document_xml = new DomDocument(); // Instanciation de la classe DomDocument : création d'un nouvel objet
	$tab = array();
	$document_xml->load('./ressources/citations.xml'); // Chargement à partir de citations.xml
	
	$elements = $document_xml->getElementsByTagName('citation');
	
	foreach($elements as $element){
		$tab[]=$element->nodeValue;
	}
	
	echo "<center><b>CITATION DU JOUR</b></center><br />";
	
	echo $tab[rand(0, count($tab)-1)];
?>