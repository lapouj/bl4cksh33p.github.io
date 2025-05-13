<script src="../../../js/password-protect.js"></script>

---
categorie: reseau
tags:
  - rootme
  - "#informatique/cyber"
---
# But
Trouver le mot de passe de l'utilisateur, le flag est son mot de passe en SHA1
# Fourni

Un .pcap qui contient la séquence d'authentification xmpp

# Méthode de résolution
*Aide trouvé  : https://stackoverflow.com/questions/29298346/xmpp-sasl-scram-sha1-authentication
	
Je vais suivre la procédure expliquée sur stack overflow :
![[Pasted image 20240413134437.png]]



j'ai trouvé son nom d'utilisateur : 
koma_test
![[Pasted image 20240413134234.png]]
![[Pasted image 20240413134304.png]]

la réponse du serveur : 

r=hydra4OjoFBGFJyzTaBWKiGfuqNM+v9rDA0wn,s=qgiJIJQsQPhvAotJWVNHPQ==,i=4096


	