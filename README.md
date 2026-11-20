<div align="center">

# 🎓 Gestion-Estudiantes-Js

**Sistema Interactivo de Gestión y Administración de Estudiantes en JavaScript**

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

</div>

---

## 📖 Descripción

**Gestion-Estudiantes-Js** es una aplicación interactiva desarrollada en **JavaScript puro (Vanilla JS)** que implementa un sistema CRUD completo para la administración académica de estudiantes.

El proyecto pone un fuerte énfasis en la validación defensiva de datos, control de flujo interactivo mediante menú en consola/navegador y manejo estructurado de colecciones de objetos en memoria.

---

## 🚀 Características Principales

- **Registro de Estudiantes (Create):** Validación de ID numérico único (prevención de duplicados), nombre, edad (rango válido 0-120), curso y estado académico (`active` / `inactive`).
- **Consulta General (Read All):** Visualización formateada de todos los estudiantes inscritos con sus atributos detallados.
- **Búsqueda por Identificación (Read One):** Localización inmediata de un estudiante a partir de su documento/ID.
- **Actualización de Información (Update):** Modificación en caliente de nombre, edad, curso y estado con revalidación de entradas.
- **Eliminación de Registros (Delete):** Remoción segura de registros del listado con verificación previa de existencia.
- **Validación Robusta:** Control contra valores nulos, cadenas vacías, números negativos y cancelación de operaciones.

---

## 📂 Estructura del Proyecto

```text
Gestion-Estudiantes-Js/
├── index.html              # Punto de entrada HTML
├── LICENSE                 # Licencia MIT
├── README.md               # Documentación del proyecto
└── src/
    ├── css/
    │   └── style.css       # Estilos visuales
    └── js/
        └── main.js         # Lógica CRUD, validaciones y menú interactivo
```

---

## 🛠️ Tecnologías Utilizadas

- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

---

## ⚙️ Ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Danilo-Doria/Gestion-Estudiantes-Js.git
   cd Gestion-Estudiantes-Js
   ```

2. Abre el archivo `index.html` en cualquier navegador web moderno (o utiliza una extensión como *Live Server* en VS Code).

3. Abre la consola de desarrollador del navegador (`F12` o `Ctrl + Shift + I` / `Cmd + Option + I`) para interactuar con los diálogos y visualizar los reportes estructurados.

---

## 👨💻 Author

- GitHub: **[Danilo-Doria](https://github.com/Danilo-Doria)**
- LinkedIn: **[Danilo Doria Diaz](https://www.linkedin.com/in/danilo-doria-diaz)**
- Mail: **danilodoria519@gmail.com**

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
