<?php
// Get an instance of Domdocument 
  $doc = new DOMDocument();

  // specify the version and encoding
  $doc->version = '1.0';
  $doc->encoding = 'utf-8';
  
  // Create a comment
  $comment_elt = $doc->createComment("lister les fichiers d'un dosssier");
  // Put this comment at the Root of the XML doc
  $doc->appendChild($comment_elt);
  
  // Create an Empty element 'note'
  $note_elt = $doc->createElement('images');
  // Put the 'note' element at the Root of the XML doc (just after the comment)
  $doc->appendChild($note_elt);
  
  // Create 
  $rp="./images/diaporama"; // nom du répertoire à lister
 $rep=opendir($rp);
while ($sous_fichier=readdir($rep)) 	{ // parcours du répertoire
	if (($sous_fichier==".") || ($sous_fichier=="..")){ }
	else 
	{	
		$elem = $doc->createElement('image', $sous_fichier);
		$note_elt->appendChild($elem);  
	}
}
closedir($rep);

  
  // Beautify   
  $doc->formatOutput = true;  
  
  // Display the XML content we just created
  //echo $doc->saveXML();
  
  // Save this to images.xml
  $doc->save('./ressources/images.xml');
  
  
?>