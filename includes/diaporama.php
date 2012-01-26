<?php
 include 'creationFichierXML.php';
?>
<html>
	<head>
        <script type="text/javascript">
			var tabImages = new Array();
			indice=0;
			function obtenirObjectRequeteXML() {
			
					if (window.ActiveXObject) {
							return(new ActiveXObject("Microsoft.XMLHTTP"));
					} else if (window.XMLHttpRequest) {
							return(new XMLHttpRequest());
					} else {
							return(null);
					}
			}
			
			function envoyerRequeteXML(param) {
					requete = obtenirObjectRequeteXML();
					requete.onreadystatechange = traiterReponseXML;
					requete.open("GET", "./ressources/images.xml", true);
					requete.send(null);
			}
			
			function traiterReponseXML() {
				if ((requete.readyState == 4) && (requete.status == 200)) {
					reponseEnXML=requete.responseXML;
					listeElements=reponseEnXML.getElementsByTagName("image");
					tabImages = new Array(listeElements.length);
					for (i=0;i<listeElements.length;i++) {
						 tabImages[i]=listeElements[i].childNodes[0].nodeValue;
					 }				 diaporamaSuivant();
				}
			  }
			  
			  
			function diaporamaSuivant() {
     			document.getElementById("diapo").src = "./images/diaporama/"+tabImages[indice];
     			indice++;
				if(indice == tabImages.length)
					indice = 0;
     			setTimeout(diaporamaSuivant,3000);
			}
			
		</script>
        <title> Titre </title>
     </head>
     
     <body onLoad="envoyerRequeteXML()">
     	<table border="3">
       		<tr>
        	  	<td>
            		<img src="images/diaporama/serigne cheikh.jpg" width="225" height="270" id="diapo" />
           	 	</td>
       	 	</tr>
   	 	</table>
     </body>
</html>