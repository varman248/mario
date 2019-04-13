<!DOCTYPE html>

<html>
	<head>
		<title>MARIO</title>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="normalize.css">
		<link rel="stylesheet" type="text/css" href="style.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	</head>

	<body>
		<header>
			<h1>Super Mario Bros</h1>
			<nav>
				<a href="index.php">Accueil</a>
				<a href="ardoise.php">Ardoise Magique</a>
				<a href="propos.php">à propos</a>
			</nav>
		</header>
		<main>
			<?php include $page; ?>
		</main>
		
		<footer>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</footer>
	</body>

</html>