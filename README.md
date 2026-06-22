# Servicios APROS - Landing Page en WordPress

**Santiago Valencia García**

Instalación local de WordPress con una landing page responsive para los servicios de APROS.

## Requisitos previos

- [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/install/) instalados.

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Tiago0507/landing-page-wordpress.git
cd landing-page-wordpress
```

2. Levantar los contenedores:

```bash
docker compose up -d
```

3. Abrir `http://localhost:8083` en el navegador y completar el asistente de instalación de WordPress (idioma, usuario administrador y contraseña).

4. En el panel de administración, ir a **Apariencia > Temas** y activar el tema **Servicios APROS**. Al activarse, la página se crea automáticamente y se establece como página de inicio.

5. Acceder a `http://localhost:8083` para ver la landing page.

Para detener los contenedores:

```bash
docker compose down
```

## Estructura del proyecto

```
├── docker-compose.yml
└── wp-content/themes/servicios-apros-theme/
    ├── style.css                  Declaración del child theme
    ├── functions.php              Registro de assets y configuración automática
    ├── page-servicios-apros.php   Template de la landing page
    ├── css/
    │   └── landing.css            Estilos responsive con soporte para tema claro y oscuro
    └── js/
        └── landing.js             Lógica de filtrado, ordenamiento, cambio de tema e idioma
```

## Tecnologías utilizadas

- **WordPress 7.0** como CMS, instalado localmente con Docker.
- **HTML5** semántico dentro de un page template de WordPress.
- **CSS3** con variables CSS, Flexbox, Grid y media queries.
- **JavaScript ES6+** sin librerías externas.

## Funcionalidades implementadas

- Página "Servicios APROS" con título, subtítulo, descripción, tarjetas de servicios y botón principal.
- Botón para filtrar y mostrar solo los servicios activos.
- Botón para ordenar los servicios por precio de menor a mayor.
- Ambos filtros se pueden combinar y se resetean con el botón "Todos".
- Cambio de tema (oscuro / claro) con persistencia en el navegador.
- Cambio de idioma (español / inglés) con persistencia en el navegador.
- Diseño responsive adaptado a móviles, tablets y desktop.

## Decisiones tomadas

**Docker Compose para el entorno local.** Se usa Docker en lugar de XAMPP o instalaciones manuales para que cualquier persona pueda levantar el proyecto sin configurar nada extra. Solo necesita ejecutar `docker compose up -d`.

**Tema hijo de Twenty Twenty-Four.** Se crea un tema hijo en lugar de modificar un tema existente. Esto permite que el tema padre se actualice sin perder los cambios y mantiene el código separado y organizado.

**Template propio para la landing.** La página usa su propio template PHP con control total del HTML, en lugar de depender del editor de bloques. Así se evitan estilos heredados del tema padre que puedan afectar el diseño.

**Configuración automática al activar el tema.** Cuando se activa el tema, la página "Servicios APROS" se crea sola y se establece como página de inicio. Esto simplifica la instalación.

**Variables CSS para el cambio de tema.** Los colores se manejan con variables CSS que cambian según el tema seleccionado (claro u oscuro). Esto evita duplicar estilos.

**JavaScript sin dependencias.** Toda la interactividad se maneja con JavaScript puro, sin jQuery ni librerías externas. Esto mantiene la carga liviana y sin dependencias innecesarias.

**Convención BEM para las clases CSS.** Se usa la convención Block-Element-Modifier para nombrar las clases, lo que facilita el mantenimiento y evita conflictos de estilos.

## Mejoras futuras

- Animaciones de entrada para las tarjetas al hacer scroll.
- Formulario de contacto funcional con validación.
- URLs limpias configurando los permalinks de WordPress.
- Optimización de carga de las fuentes tipográficas.
