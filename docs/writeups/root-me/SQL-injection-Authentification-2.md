categorie: web-server
tags:
  - rootme
  - "#informatique/cyber"
---
# But

Trouver le mot de passe admin Ã  l'aide d'un formulaire de connexion en "v0.02"

# Fourni

Une fiche sur les injections SQL et une fiche sur l'outil SQLMAP



# MÃ©thode de rÃ©solution


comme l'injection sql n'affiche plus le mot de passe 

![[Pasted image 20241012132215.png]]

il faut trouver un moyen ingÃ©nieux de rÃ©cupÃ©re le mot de passe


UNION ne fonctionne pas non plus, car le mot est flaguÃ© directement ![[Pasted image 20241012132309.png]]

j'ai donc essayÃ© de cadrer le mot de passe avec cette commande : 

admin' AND length((SELECT password from users where username='admin')) < 10 -- -

puis j'ai pu trouver la taille exacte


admin' AND length((SELECT password from users where username='admin'))=8 -- -

il ne me reste plus qu'a faire un script avec Curl qui puisse utiliser "LIKE" pour trouver lettre par lettre

admin' and password like 'a%' -- -;


http://challenge01.root-me.org/web-serveur/ch10/



j'utilise le repeater de burp pour faire un char a la fois


![[Pasted image 20241012135712.png]]
j'en suis actuellement rendu a e2az...

je sais qu'il n'y a que 8 char donc Ã§a devrait aller asse vite


![[Pasted image 20241012135854.png]]

je lance l'attque, je trie par lenght de rÃ©ponse, et des que j'ai un autre 858, c'est que j'ai le bon prochain char

le mot de passe final devait Ãªtre : e2azo93i

ce n'est pa encore bon...
![[Pasted image 20241012140928.png]]

en effet j'ai dÃ©couvert que LIKE ne prend pas en compte la casse

donc il fallait que je teste toutes les configuration de lettres en Maj ou non

le mot de passe de base est donc : e2azo93i
si je retire les chiffre qui ne peuvent Ãªtre accentuÃ©
eazoi
pour chaque lettre j'ai deux possibilitÃ©, lower ou upper
donc je peux representer en binaire
00000

donc je commencer a Ã©numÃ©rer mes valeurs

00000 = 0 = eazoi =e2azo93i
00001 = 1 = eazoI = e2azo93I
00010 = 2 = eazOi = e2azO93i
00011 ...
...

une fois que j'ai ma liste, je la met dans burp 

![[Pasted image 20241012141324.png]]

![[Pasted image 20241012141442.png]]


![[Pasted image 20241012141408.png]]



![[Pasted image 20241012140913.png]]



dans ce challenge j'ai utilisÃ© SQLITE3 dans mon terminal pour faire des tests : 



sqlite> CREATE TABLE users (user NOT NULL, password NOT NULL);
sqlite> INSERT INTO users (user, password) VALUES ('admin', 'flagflagflag');

j'ai aussi Ã©tÃ© voir : https://sql.sh/cours/where/ pour avoir un peu de thÃ©orique sur le SQL
