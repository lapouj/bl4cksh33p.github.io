---
categorie: web-server
tags:
  - rootme
  - "#informatique/cyber"
---
# But

Trouver le flag qui est dans une section cachÃ©e du site 

# Fourni

http://challenge01.root-me.org/web-serveur/ch15/ch15.php?

![[Pasted image 20241012142455.png]]



# MÃ©thode de rÃ©solution


lorsqu'on arrive sur le site on voit qu'on peut cliquer sur les sections
on est de base dans la section apps, mais si on clique sur apps :

![[Pasted image 20241012142540.png]]

on voit dans l'url apparaitre "?galerie=apps"

donc j'essaie de voir ce que m'affiche "?galerie="

![[Pasted image 20241012142623.png]]

une nouvelle catÃ©gorie est apparue, elle commence par 86hv...

un petit f12 me montre qu'elle s'apelle : 86hwnX2r

donc je l'ajoute dans l'url : "?galerie=86hwnX2r"

et je dÃ©couvre le contenu de la section cachÃ©e

![[Pasted image 20241012142826.png]]


je fais glisser l'image ( qui est en fait un .txt) dans un nouvel onglet 

![[Pasted image 20241012142854.png]]
