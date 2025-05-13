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


j'ai un cookie qui n'est pas un jwt ni du base 64 lorsque je me connecte :

```
.eJw1zjsSgkAMANC7bG2xySaBcBlm8xttQSrHu0tj_4r3aXsdeT7b9j6ufLT9FW1r0JUmVa7hYGI2sGSlQQSTBbtOE04akT4EakHiZEMhzTWdemFy6DqxdGrFwGGQTH6D3gmi3DiMhUqcigwCaZk-IFwHl2q7I9eZx3_Tvj_p5S-g.Z0M2cQ.nCTDRyeKnWvMe-jkbuS4DLHe3bc 
```


```
.eJwljjEOwzAIAP_iuQMmEON8JgIMalenmar-vZZ6-53uU86ccT3L8Z53PMr5GuUowbC59OEpJkNG9gbcaiRbNu26B7upQd1R0TktNbNy5cytMg0BNAVUYySUBXXvK2RsGzlQ1q4NCQTDQSWEzZVxEC27E5c1cl8x_zdYvj8oGC-i.ZzoIiA.fp1FvcXFhKECv6wYJ6X-tTF9QpM
```

# Pistes

- [ ] voir le type de jeton, s'il est sÃ©curisÃ© ou non


# Solution

une fois que j'ai testÃ© les diffÃ©rents endpoints de l'api, je regarde un peu plus prÃ©cisement 

sur la fonction user, on peut prÃ©ciser un user, mais l'api ne le fait pas : 

![[Pasted image 20241124152823.png]]


mÃªme lorsque je  spÃ©cifie l'user "43", il ne se passe rien, donc je passe sur burp, et j'essaie d'ajouter un 1 a la fin de la requete pour voir s'il se passe quelque chose


![[Pasted image 20241124152928.png]]


on a donc une faille de type IDOR