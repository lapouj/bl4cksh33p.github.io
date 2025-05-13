<script src="../../../js/password-protect.js"></script>

---
categorie: web-server
tags:
  - rootme
  - "#informatique/cyber"
---
# But

retrouver le mot de passe admin du site
# Fourni

un lien vers un site
2 fiches vulns
https://www.root-me.org/Insecure-Code-Management
https://www.root-me.org/Outil-Gitdumper

# MÃ©thode de rÃ©solution


je sais qu'il faut utiliser git dumper
je sais donc qu'il y a un .git sur ce site

j'ajoute .git et je peux voir quelques fichiers de git, les commits et autres

J'utililise git dumper pour rÃ©cupÃ©rer les fichiers, puis j'utilise extractor : 

```
wget https://raw.githubusercontent.com/internetwache/GitTools/master/Extractor/extractor.sh
./extractor.sh ./extraction_example/ ./new_example
```


et je peux naviguer dans mon dossier ./new_example, ce qui me permet de voir les diffÃ©rentes version du code. Je sais d'aprÃ¨s les commits que le mots de passe Ã  changÃ©, puis que seulement le sha256 Ã  Ã©tÃ© stockÃ©, mais entre le nouveau mot de passe et le sha256 il ne semble pas avoir changÃ©, donc on rÃ©cupÃ¨re la derniere version du mot de passe en clair et on obtient le flag.