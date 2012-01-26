<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
		<title>Menu</title>
		<link type="text/css" href="./styles/styleMenu.css" rel="stylesheet" media="screen" />
		<script type="text/javascript" src="./scripts/scriptMenu.js"></script>		
		<script src="http://cdn.jquerytools.org/1.2.6/full/jquery.tools.min.js"></script>
	</head>	
	
	<body>	
		<div id="menu">
			<ul id="MenuDeroulant">
				<li> <a class="active" href="./index.php"> <img src="./images/icon_home.gif" alt="Icone Home" /> </a> </li>
			    <li><a href="#">Dahira</a>			
			        <ul>            	
			            <li><a href="#">Historique</a></li>		
			            <li><a href="#">Organigramme</a></li>		
			            <li><a href="#">Projet</a></li>		
			            <li><a href="#">Contact</a></li>
			        </ul>			
			    </li>		
			    <li><a href="#">Islam</a>			
			        <ul>		
			            <li><a href="#">Coran et Sunna</a></li>		
			            <li><a href="#">Mouroudisme</a></li>          		
			        </ul>			
			    </li>
			    <li><a href="#">Mediateque</a>			
			        <ul>		
			            <li><a href="#">Videos</a></li>		
			            <li><a href="#">Audios</a></li>  		            
			            <li><a href="#">Photos</a></li>         		
			        </ul>			
			    </li>		
			    <li><a href="#">Contact</a></li>	
			</ul>
		</div>
	
		<div id="login">
			<a href="#" rel="#mies1"> Se connecter </a>  <span> &nbsp; | &nbsp; </span>
			<a href="#" rel="#mies2"> S'inscrire </a>
			
			<!-- overlays -->
			<div class="login_overlay" id="mies1" style="top:300px">
				<?php include("./includes/loginForm.php"); ?>
			</div>
			
			<div class="login_overlay" id="mies2">
				<?php include("./includes/inscriptionForm.php"); ?>
			</div>
			
			<script>
				// What is $(document).ready ? See: http://flowplayer.org/tools/documentation/basics.html#document_ready
				$(document).ready(function() {			
					$("a[rel]").overlay({mask: '#000', effect: 'apple'});
				});
			</script>
					
		</div>
 
	</body>
</html>