# 📦 pbackend-atom

Backend del proyecto **Atom**, desarrollado utilizando **Firebase Functions** para manejar la lógica de servidor y la integración con servicios de Firebase.

---

## 📌 Descripción

Este repositorio contiene el backend del proyecto Atom. Provee funciones de servidor, lógica de negocio y comunicación con los servicios de Firebase mediante Cloud Functions.

---

## 🛠 Tecnologías utilizadas

- Firebase Functions
- Node.js
- TypeScript / JavaScript
- Firebase Firestore
- Firebase CLI

---

## 📂 Estructura del proyecto

- functions/
- firebase.json
- firestore.rules
- firestore.indexes.json
- package.json
- README.md

---

## ⚙️ Requisitos previos

- Node.js (versión LTS recomendada)
- npm o yarn
- Firebase CLI

Instalar Firebase CLI:

    npm install -g firebase-tools

---

## 📥 Instalación

Clona el repositorio:

    git clone https://github.com/briangaleano/pbackend-atom.git

Ingresa al proyecto:

    cd pbackend-atom

Instala dependencias:

    cd functions
    npm install

---

## ▶️ Desarrollo local

Inicia sesión en Firebase:

    firebase login

Ejecuta los emuladores:

    firebase emulators:start

Esto permite probar las funciones localmente sin desplegar.

---

## 🚀 Despliegue

Para desplegar las funciones:

    firebase deploy --only functions

---

## 🧩 Desarrollo de funciones

Las funciones se desarrollan dentro del directorio `functions/`.  
Luego de realizar cambios, ejecuta nuevamente el despliegue.

---

## 🔐 Seguridad

Las reglas de seguridad de Firestore se encuentran en el archivo `firestore.rules`.  
Ajusta estas reglas antes de desplegar en producción.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas mediante Pull Requests.

---

## 📄 Licencia

Licencia no especificada.

---

## 👤 Autor

Brian Galeano  
GitHub: https://github.com/briangaleano
