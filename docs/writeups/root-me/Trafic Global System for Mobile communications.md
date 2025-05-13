<script src="../../../js/password-protect.js"></script>

---
categorie: reseau
tags:
  - rootme
  - "#informatique/cyber"
---
# But

trouver quelque chose dans un fichier pcap

# Fourni

un fichier pcap

# Méthode de résolution

on trouve assez rapidement un paquet qui est plus long que les autres

dans la data on trouve : 

```
00ff9c0402030201ffff0b5a0791233010210068040b917120336603f800002140206165028047c7f79b0c52bfc52c101d5d0699d9e133283d0785e764f87b6da7956bb7f82d2c8b
```

![[Pasted image 20240407214936.png]]


visiblement ça ne passe pas, mais les messages semblent commencer par 0791.....

et dans notre message on retrouve ça, donc on met a partir de ça :

![[Pasted image 20240407215022.png]]


# Trouvé dans les solutions: 
un message qui parle du paquet :

En le regardant plus attentivement, et en comparant avec les autres paquets pour déterminer ce qui est de la metadata de ce qui est pertinent, on trouve un préfixe 0791, qui est symptomatique d’un encodage SMS via GSM. Ca ne s’invente pas, ça s’apprend en se renseignant un peu sur le GSM.  
Exemples ici :  
[http://www.gsm-modem.de/sms-pdu-mode.html](http://www.gsm-modem.de/sms-pdu-mode.html)  
[https://www.gsmfavorites.com/documents/sms/packetformat/](https://www.gsmfavorites.com/documents/sms/packetformat/)
