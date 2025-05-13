---
categorie: cryptanalyse
tags:
  - rootme
  - "#informatique/cyber"
---
![[Pasted image 20230917202630.png]]

d'apres le fichier, on trouve le hash que l'on cherche d'apres les information entre parentheses : 
(iud:rid:lmhash:nthash)

![[Pasted image 20230917202636.png]]

En allant sur    [hashcat.net](https://hashcat.net/hashcat/), je rÃ©cupere l'identifiant des hash Lm (3000)
![[Pasted image 20230917202644.png]]

Puis dans le terminal j'Ã©xÃ©cute la commande 
```
hashcat -m <identifiant du hash> -a <le hash> <chemin/vers/une/wordlist>
```
![[Pasted image 20230917202649.png]]