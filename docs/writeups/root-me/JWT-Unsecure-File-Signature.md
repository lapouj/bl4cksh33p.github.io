---
categorie: web-server
tags:
  - rootme
  - "#informatique/cyber"
lien:
---
# But

se logguer en admin avec le jwt qui Ã  une faille


# Fourni

![[Pasted image 20241208191317.png]]


![[Pasted image 20241208191334.png]]



# MÃ©thode de rÃ©solution


en analysant le jwt, on voit que le header KID est utilisÃ©, on va donc essayer de l'utiliser pour casser le jwt

![[Pasted image 20241208191353.png]]

on sait que kid est key identifyer et que c'est un nom de fichier qui peut Ãªtre utilisÃ© pour valider le jeton

aprÃ¨s avoir testÃ© les diffÃ©rents path traversal et autre injection sql on peut tester de faire un "../../../dev/null" et de signer sois mÃªme le jeton

il y a une sÃ©curitÃ© sur l'utilsation des "." et des "/" mais elle est mal mise en place, apres un peu de trial and error, on passe de : 
![[Pasted image 20241208191709.png]]

 Ã  
 ![[Pasted image 20241208191727.png]]
ce qui indique que le chemin n'est plus invalide, c'est maintenant la signature qui l'est

ce [lien](https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-kid-header-path-traversal) nous indique comment crÃ©er une clÃ© bidon avec un null byte 

ensuite on signe le token et on oublie pas de prÃ©ciser que le compte n'est plus guest mais admin

![[Pasted image 20241208191853.png]]
![[Pasted image 20241208191902.png]]

![[Pasted image 20241208191917.png]]
