<script src="../../../js/password-protect.js"></script>

---
categorie: ???
tags:
  - rootme
  - "#informatique/cyber"
---
# But

rÃ©cupÃ©rer un flag surmenet dans \<racine\>/.passwd en uploadant un fichier de type .jpg avec du php cachÃ© dedans

# Fourni

un site avec un bouton pour upload un fichier


# MÃ©thode de rÃ©solution

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


![[Pasted image 20241013155311.png]]

en revanche lorsque j'envoie un vrai .png

![[Pasted image 20241013155400.png]]

je vais donc comparer les deux sur burpsuite pour voir ce qui change

Lorsque j'envoie un .php
![[Pasted image 20241013155503.png]]

et une image :

![[Pasted image 20241013155541.png]]


j'envoie donc ma requÃªte dans le repeater :

![[Pasted image 20241013155639.png]]

je change donc le application par image/png


sur le site je vois bien mes diffÃ©rents essais : 

![[Pasted image 20241013160450.png]]


j'ouvre donc le file3.png :

![[Pasted image 20241013160421.png]]


# Conclusion


chal assez bien qui n'Ã©tait pas trop dur Ã  faire