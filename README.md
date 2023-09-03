# TravelAgencyAngularFirebase

Este proyecto es construido en [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0, usando [Firebase](https://firebase.google.com/) y [PrimenG](https://primeng.org/)

# Cómo iniciar

Después de descargar el proyecto ingresar a la carpeta contenedora y correr:
`npm i`
y luego correr:

`ng serve`

Ahora el proyecto está corriendo en el puerto `4200`, puede abrir la url: `http://localhost:4200/` y empezar a usarlo.

## Usuarios

Existen dos usuarios precreados con dos roles diferentes:

Usuario Agencia: `francisco@email.com`
password: `123456789`

Usuario Viajero: `miguel@email.com`
password: `123456789`

El usuario de la agencia puede crear y administrar hoteles. El usuario viajero puede hacer reservas en los hoteles.

## Docker

El repositorio incluye un Dockerfile para desplegar de forma facil y rapida en cualquier servidor que pueda usar Docker, con los siguientes comandos:
`docker build -t TravelAgencyAngularFirebase`
`docker run -p 80:80 TravelAgencyAngularFirebase`

## GitHub

El repositorio incluye archivos de Github actions para desplegar en el hosting de firebase de forma continua. El proyecto queda desplegado en el siguiente [enlace](https://travel-agency-angular-firebase.web.app/)
