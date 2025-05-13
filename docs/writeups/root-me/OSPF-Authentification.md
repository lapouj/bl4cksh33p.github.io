---
categorie: reseau
tags:
  - rootme
  - "#informatique/cyber"
---
# but

trouver le mot de passe de l'authentification ospf


# Fichier
on nous donne un fichier .pcap (wireshark)

![[Pasted image 20240407193434.png]]


# MÃ©thode de rÃ©solution

Il faut d'abord extraire les hash md5 

```
ettercap -Qtr ./<le fichier>
```

![[Pasted image 20240407193617.png]]

une fois qu'on les Ã  on peut copier dans un fichier ces 15 hashs

ensuite on utilise john the ripper et une wordlist (ici rockyou)

![[Pasted image 20240407193654.png]]

on a le flag "#10pokemonmaster"
