<script src="../../../js/password-protect.js"></script>

---
categorie: reseau
tags:
  - rootme
  - "#informatique/cyber"
---
# But

Acceder Ã  la page /admin du local a travers le url grabber

# Fourni

un site internet qui "frame" une recherche et l'affiche

# MÃ©thode de rÃ©solution

Il faut faire un dns rebinding hack, en gros dans le code source, y'a deux appels dns , et si je peux faire en sorte que la rÃ©solution change entre l'appel qui vÃ©rifie que je vise pas une ip local et l'appel qui fait le vrai GET. Il est possible que j'arrive a chopÃ© la page en interne du /admin

Il ne faut pas oublier de mettre le port 

![[Pasted image 20240410211146.png]]

![[Pasted image 20240410211214.png]]

Il faut savoir que c'est full random, et que quasiment a chaque appel j'ai : 

![[Pasted image 20240410211237.png]]

![[Pasted image 20240410211308.png]]
ou le chien (parce qu'il essaie de frame l'autre ip, avec un port et un "/admin" qui veut rien dire sur cette autre adresse)


[http://s-1.2.3.4-127.0.0.1-2514387277-fs-e.d.rebind.it:54022/admin](http://s-1.2.3.4-127.0.0.1-2514387277-fs-e.d.rebind.it:54022/admin)

Ã§a fonctionne carÃ©ment mieux avec le projet singularity :https://github.com/nccgroup/singularity