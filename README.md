# Posts React

Aplicación de práctica que consume la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/) y muestra las **primeras 10 publicaciones** en forma de tarjetas con Bootstrap. Desarrollada como ejercicio para aprender los fundamentos de React.

---

## Descripción del proyecto

El objetivo de este proyecto es practicar los conceptos esenciales de React con un caso de uso realista y muy común: **pedir datos a una API y mostrarlos en pantalla**, manejando correctamente los tres estados típicos de una petición asíncrona:

1. **Cargando** — mientras esperamos la respuesta, mostramos un spinner.
2. **Error** — si algo falla, mostramos una alerta con el mensaje.
3. **Éxito** — cuando llegan los datos, los renderizamos como tarjetas.
---

## Stack tecnológico

| Herramienta  | Para qué sirve                                                  |
| ------------ | --------------------------------------------------------------- |
| **React 19** | Librería para construir la interfaz a base de componentes       |
| **Vite**     | Bundler y servidor de desarrollo ultrarrápido con HMR           |
| **Bootstrap 5** | Framework CSS para estilos responsive sin escribir CSS       |
| **JavaScript (ES Modules)** | Lenguaje y sistema de módulos del proyecto         |
| **ESLint**   | Linter para detectar errores y malas prácticas en el código    |

Datos: API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) (gratuita, sin autenticación, ideal para prototipos).

---

## Instalación y ejecución

### Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior
- npm (incluido con Node)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/<tu-usuario>/posts-react.git
cd posts-react

# 2. Instalar las dependencias
npm install

# 3. Arrancar el servidor de desarrollo
npm run dev
```

Una vez arrancado, abre la URL que imprime la terminal (normalmente `http://localhost:5173`) en tu navegador.

### Otros scripts disponibles

```bash
npm run build     # Genera la versión optimizada de producción en /dist
npm run preview   # Sirve localmente el build de producción
npm run lint      # Ejecuta ESLint sobre el código
```

---

## Conceptos de React aplicados

Este proyecto, aunque pequeño, toca buena parte de los fundamentos de React moderno:

- **Componentes funcionales**: `App` y `PostsList` son funciones que devuelven JSX. Es la forma estándar de escribir componentes desde React 16.8.
- **JSX**: sintaxis tipo HTML dentro de JavaScript. Atención a detalles como `className` en lugar de `class`.
- **Composición de componentes**: `App` utiliza `PostsList` como un hijo. Así se construyen las apps en React, componiendo piezas pequeñas.
- **Hook `useState`**: para gestionar los tres estados locales del componente (`posts`, `loading`, `error`). Cambiar el estado dispara un nuevo render.
- **Hook `useEffect`**: para ejecutar un efecto secundario (el `fetch`) **una sola vez**, al montar el componente, usando un array de dependencias vacío `[]`.
- **Peticiones asíncronas con `async/await`**: la función interna del efecto usa `try/catch/finally` para controlar éxito, error y siempre apagar el `loading`.
- **Renderizado condicional**: con _early returns_ mostramos spinner, alerta o tarjetas según el estado actual. Es una forma limpia de evitar ternarios anidados.
- **Renderizado de listas con `.map()` y `key`**: convertimos el array de posts en un array de `<div>` con tarjetas. Cada elemento tiene una `key` única (el `post.id`) para que React pueda reconciliar eficientemente.
- **Inmutabilidad del estado**: usamos `slice(0, 10)` (que devuelve una copia nueva) en lugar de mutar el array original. React detecta los cambios comparando referencias.
- **Separación de responsabilidades**: `main.jsx` monta la app, `App.jsx` define el layout, `PostsList.jsx` se encarga de los datos. Cada archivo tiene un rol claro.
- **Accesibilidad básica**: `role="status"` en el spinner, `role="alert"` en la alerta y `visually-hidden` para texto que leen los lectores de pantalla.

---

## Estructura de carpetas

```
posts-react/
├── public/                 # Archivos estáticos servidos tal cual
├── src/
│   ├── assets/             # Imágenes y recursos usados por los componentes
│   ├── components/
│   │   └── PostsList.jsx   # Componente que hace el fetch y renderiza las tarjetas
│   ├── App.jsx             # Componente raíz con el layout principal
│   ├── index.css           # Estilos globales mínimos (el resto lo pone Bootstrap)
│   └── main.jsx            # Punto de entrada: monta <App /> en el DOM
├── .gitignore
├── eslint.config.js        # Configuración de ESLint
├── index.html              # HTML base que carga main.jsx
├── package.json            # Dependencias y scripts del proyecto
├── README.md               # Este archivo
└── vite.config.js          # Configuración de Vite
```

---
