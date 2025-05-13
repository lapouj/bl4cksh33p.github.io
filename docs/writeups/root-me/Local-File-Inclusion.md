<script src="../../../js/password-protect.js"></script>

---
categorie: web-server
tags:
  - rootme
  - "#informatique/cyber"
lien: https://www.root-me.org/fr/Challenges/Web-Serveur/Local-File-Inclusion
---
# But
```
Rendez vous dans la section dâ€™administration.
```


trouver le flag dans la partie admin du site
# Fourni

un site : 

http://challenge01.root-me.org/web-serveur/ch16/

![[Pasted image 20241013163424.png]]



# MÃ©thode de rÃ©solution



on va donc essayer de jouer avec les urls dont on se sert

![[Pasted image 20241013163600.png]]


lorsque je clique sur une catÃ©gorie, le paramÃ¨tre GET files se set dans l'url


![[Pasted image 20241013163638.png]]

lorsque je clique sur un fichier, c'est le paramÃ¨tre f qui se set


lorsque j'essaie de jouer un peu avec les urls, je test de set le f a ../../../etc/passwd

ou admin, mais rien ne fonctionne trop

je vois dans les message d'erreur l'utilisation de la fonction realpath qui m'indique que seul le nom du fichier est utilisÃ© et non pas le chemin

j'essaie enfin de mettre ../ dans la variable file

![[Pasted image 20241013164633.png]]

je vois donc le index.php sur lequel j'attrris au lancement du challenge

je vois aussi un .gif, un dossier file et un dossier admin

par curiositÃ©, je vais voir le dossier files![[Pasted image 20241013164859.png]]

je vois que les diffÃ©rents dossier sont ceux que l'on me propose


je fais la mÃªme manipulation pour mettre admin
![[Pasted image 20241013164957.png]]

je vois qu'il n'y a qu'un seul fichier, je l'ouvre

![[Pasted image 20241013165026.png]]


je trouve mon flag

je peux aussi voir comment rend la page chargÃ©e en rentrant admin et le flag dans le champs pour s'authentifier

![[Pasted image 20241013165122.png]]


# Conclusion

un chouette challenge