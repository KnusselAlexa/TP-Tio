Como trabajamos con github remoto?
1) clonamos el repo.
2) git checkout -b [nombreRamaLocal] (esto nos crea la rama local, y nos para sobre ella)
3) git pull origin refactorizacion (rama a la cual vayamos a trabajar en el remote, en nuestro caso refactorizacion)
4) modificamos lo que queremos en el trabajo (chequear que estamos trabajando sobre nuestra nueva rama que creamos)
5) git add .
6) git commit -m "msj claro del cambio realizado"
7) git push origin [ramaLocal]:refactorizacion

ej:
git checkout -b pablo
(hago cambios - add - commit)
git push origin pablo:refactorizacion