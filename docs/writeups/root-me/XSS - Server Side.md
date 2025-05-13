<script src="../../../js/password-protect.js"></script>

---
categorie: web-serveur
tags:
  - rootme
  - "#informatique/cyber"
lien:
---
# But

Récupérer un flag dans /flag.txt

# Fourni

un site qui permet de créer des pages PDF avec un message

![[Pasted image 20241207221619.png]]

je peux donc faire une attestation, je peux me log et je peux créer un compte

j'ai donc plusieurs champs pour essayer de faire une injection, je peux tester dans le champs de ce que je met dans le pdf, mais j'ai aussi vu que si j'étais logué ou non, cela change le début du PDF, car mon nom peut être écrit ou non. Et lorsquse je met les balise script, mon nom n'apparait plus, ce qui peut indiquer un manque de sanitization 

![[Pasted image 20241207221828.png]]

![[Pasted image 20241207221924.png]]


# Méthode de résolution

je vais donc essayer de faire afficher un fichier à la place de mon nom :

je vais donc me faire des compte avec en nom ou prénom des injections


```
<iframe src=file:///flag.txt></iframe>
```


![[Pasted image 20241207223216.png]]
