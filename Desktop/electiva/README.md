# DevOps Task Manager

## Descripción del Proyecto
DevOps Task Manager es una aplicación web sencilla para la gestión de tareas tipo checklist, desarrollada con **Node.js y Express**, que permite agregar y listar tareas desde una interfaz web.  
El proyecto está diseñado para demostrar la aplicación de prácticas **DevOps**, incluyendo contenedorización con Docker, pruebas automatizadas y un pipeline de Integración Continua (CI).

---

## Objetivos
- Implementar una aplicación web funcional.
- Aplicar buenas prácticas de desarrollo con control de versiones.
- Contenerizar la aplicación utilizando Docker.
- Automatizar pruebas y construcción mediante GitHub Actions.
- Documentar correctamente el proceso de instalación, ejecución y operación.

---

## Tecnologías Utilizadas
- **Node.js**
- **Express**
- **HTML / JavaScript**
- **Docker**
- **Jest**
- **Supertest**
- **GitHub Actions**

---

## Estructura del Proyecto
```text
ELECTIVA/
├─ server.js
├─ package.json
├─ Dockerfile
├─ .gitignore
├─ public/
│  └─ index.html
├─ tests/
│  └─ server.test.js
├─ .github/workflows/
│  └─ ci-cd.yml
└─ README.md
```


## Instalación Local

### Requisitos
- Node.js (v18 o superior)
- npm
- Docker (opcional)

### Pasos
```bash
npm install
node server.js
```
## Aplicación disponible en
http://localhost:3000

## TEST
npm test

## Docker
docker build -t devops-task-manager .

docker run -p 3000:3000 devops-task-manager


## Pipeline CI/CD

El proyecto incluye un pipeline de GitHub Actions que ejecuta automáticamente:

Instalación de dependencias

Ejecución de pruebas automatizadas

Construcción de la imagen Docker

## Autor

Proyecto desarrollado como práctica académica para la asignatura DevOps.