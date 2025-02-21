# Book Store

Este proyecto es una aplicación full-stack para gestionar una librería. Incluye un frontend construido con React, TypeScript y Vite, y un backend construido con Node.js, Express y MongoDB.

## Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts](#scripts)
- [Variables de Entorno](#variables-de-entorno)
- [Endpoints de la API](#endpoints-de-la-api)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Licencia](#licencia)

## Características

- Agregar, editar, eliminar y ver libros.
- Temas dinámicos con modos claro, oscuro y sistema.
- Validación de formularios con Zod.
- Notificaciones emergentes para retroalimentación del usuario.
- Diseño responsivo con Tailwind CSS.

## Instalación

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/your-username/book-store-ts.git
   cd book-store-ts
   ```

2. Instalar dependencias para el frontend y el backend:

   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Crear un archivo `.env` en el directorio `backend` y agregar la cadena de conexión a MongoDB y el puerto:

   ```env
   MONGO='tu-cadena-de-conexión-mongodb'
   PORT='5000'
   ```

## Uso

1. Iniciar el servidor backend:

   ```sh
   cd backend
   npm run dev
   ```

2. Iniciar el servidor de desarrollo del frontend:

   ```sh
   cd frontend
   npm run dev
   ```

3. Abrir el navegador y navegar a `http://localhost:5174`.

## Estructura del Proyecto

```
book-store-ts/
├── backend/
│   ├── middleware/
│   │   └── validateRequestBody.js
│   ├── models/
│   │   └── bookModel.js
│   ├── routes/
│   │   └── booksRoute.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── AddEditForm.tsx
│   │   │   ├── BookTable.tsx
│   │   │   ├── CardBook.tsx
│   │   │   └── mode-toggle.tsx
│   │   ├── hooks/
│   │   │   └── use-toast.ts
│   │   ├── pages/
│   │   │   ├── Books.tsx
│   │   │   └── EditAddBook.tsx
│   │   ├── services/
│   │   │   ├── bookService.ts
│   │   │   └── DocumentTitle.ts
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── .gitignore
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── .gitignore
└── README.md
```

## Scripts

### Frontend

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye el proyecto para producción.
- `npm run lint`: Ejecuta ESLint.
- `npm run preview`: Previsualiza la compilación de producción.

### Backend

- `npm run dev`: Inicia el servidor de desarrollo con nodemon.
- `npm start`: Inicia el servidor en producción.

## Variables de Entorno

Crear un archivo `.env` en el directorio `backend` con las siguientes variables:

```env
MONGO='tu-cadena-de-conexión-mongodb'
PORT='5000'
```

## Endpoints de la API

### Libros

- `GET /api/books`: Obtener todos los libros.
- `GET /api/books/:id`: Obtener un libro por ID.
- `POST /api/books`: Crear un nuevo libro.
- `PUT /api/books/:id`: Actualizar un libro por ID.
- `DELETE /api/books/:id`: Eliminar un libro por ID.

## Capturas de Pantalla

Aquí hay algunas capturas de pantalla del proyecto:

### Modo Oscuro
![Captura de Modo Oscuro](https://i.imgur.com/ehygGuV.png)

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulte el archivo `LICENSE` para más detalles.
