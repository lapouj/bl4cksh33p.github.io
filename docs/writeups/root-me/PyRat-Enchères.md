---
categorie: realiste
tags:
  - rootme
  - "#informatique/cyber"
---

# But

trouver le mot de passe root de la base de donnÃ©e sur le site

# Fourni


une url avec le site "PyRat enchÃ¨res"
d'apres les indices il faudra faire une LFI / RFI 
un autre indice semble indiquer qu'il faudra utiliser phpinfo pour faire cette LFI

# MÃ©thode de rÃ©solution

je voudrais commencer par faire du fuzzing pour rÃ©cupÃ©rer des fichiers que je connais pas encore

puis je trouve le moyen d'upload un fichier pour faire un lfi 

---

je ne parvient pas a lancer burpsuite, donc je vais faire sans pour le moment

il faut que je fasse un script python de fuzzing

pseudo code : 

liste de mots qui sont des pages probables
envoie sur l'url 
j'itÃ¨re dans ma liste de mots
	j'envoie : http://challenge01.root-me.org/realiste/ch2/index.php?page=${mot}
	je print les mots dont le code de retour n'est pas 404

PremiÃ¨re erreur : 
je n'ai pas de 404 quand je demande une page qui n'est pas prÃ©sente
j'ai un warning dans la page

donc il faut que je traite en fonction de la rÃ©ponse que j'obtient

le programme de fuzzing python que j'ai fait n'a servi a rien

je regarde les indices sur le forum

- erreur dans l'url
- nullbyte 
-  regarder dans le code source de la page
- manipulation PHP.<qqchose>



regarder plus tard la suite de la discussion : 
```
https://www.root-me.org/?page=forum&id_thread=202&lang=fr
```

l'url de wikipedia est fausse  :(celle du chal puis la vraie)
http://fr.wikipedia.org/wiki/Ench%C3%A8re#Ench.C3.A8re_invers.C3.A9e
http://fr.wikipedia.org/wiki/Ench%C3%A8re#Les_ench%C3%A8res_invers%C3%A9es

les % sont remplacÃ©s par des .