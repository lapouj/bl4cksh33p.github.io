---
categorie: app-systeme
tags:
  - rootme
  - "#informatique/cyber"
---
# But :

Acceder au .passwd

# code :

```
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <ctype.h>

#define DEFAULT_LEN 16

void admin_shell(void)
{
	system("C:\\Windows\\system32\\cmd.exe");
}

int main(void)
{
	char buff[DEFAULT_LEN] = {0};

	gets(buff);
	for (int i = 0; i < DEFAULT_LEN; i++) {
		buff[i] = toupper(buff[i]);
	}
	printf("%s\n", buff);
}
```

# Solution :

J'ai rien compris, il fallait windows, j'ai trouvÃ© la solution...

https://corruptedprotocol.medium.com/pe32-stack-buffer-overflow-basic-rootme-app-system-877a4bb457c1

le concept est assez simple, mais il fallait windows