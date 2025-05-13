<script src="../../../js/password-protect.js"></script>

---
categorie: web-serveur
tags:
  - rootme
  - "#informatique/cyber"
lien:
---


# But

rÃ©cupÃ©rer des droits admins sur une API swagger

# Fourni


la doc d'une api swagger 

# MÃ©thode de rÃ©solution

je commence par crÃ©er un utilisateur : 
```
{
  "username": "test_user_31",
  "password": "string"
}
```



# Pistes

essayer de faire un mass assignement 

-> dans le changement de note ajouter les champs:
iduser, status, username, ou encore password pour se passer admin
![[Pasted image 20241124163752.png]]
ne fonctionne pas


lors de la crÃ©ation de user, ajouter un champs "status" ou essayer de faire l'utilsateur admin ne fonctionne pas

![[Pasted image 20241124163925.png]]
# Solution

Je fini par tester  la mÃ©thode "OPTIONS"  sur tous les end points, et je me rends compte que la mÃ©thode put est autorisÃ©e pour le end points /api/user

donc j'envoie cette requÃªte: 

![[Pasted image 20241124165041.png]]


je vois que la requete passe, je fais donc un vrai get sur /api/user et je vois que je suis bien admin :


![[Pasted image 20241124165112.png]]

donc je prend mon cookie et je le met dans la requete de flag

![[Pasted image 20241124165119.png]]

IL FAUT DONC TOUJOURS TESTER LA MÃ‰THODE OPTIONS