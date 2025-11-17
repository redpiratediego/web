# 🏎️ Performance & Chrome: Venta y Personalización de Piezas de Alto Nivel

Este repositorio contiene los archivos finales para la página web de una empresa especializada en la venta de piezas de coche de alto rendimiento y servicios de personalización.

El diseño utiliza una paleta de colores **gris, antracita y plateado (cromo)** para evocar un ambiente de **ingeniería de precisión, lujo y alta tecnología**.

## 🚀 Características Clave

* **Diseño Profesional:** Estética minimalista y audaz que resalta el rendimiento y la calidad.
* **Paleta de Colores:** Uso estratégico de fondos oscuros (`#1a1a1a`, `#2c3e50`) y acentos metálicos (`#c9d6de`) para un *look* de cromo pulido.
* **Diseño Responsivo (Mobile-First):** La estructura se adapta perfectamente a móviles, tabletas y escritorios, gracias al uso de **Flexbox** y **Media Queries**.
* **Animaciones Elegantes:** Implementación de **JavaScript (Intersection Observer)** para un efecto *fade-in* y *slide-up* en las secciones y tarjetas al hacer scroll, mejorando la experiencia de usuario (UX).

## 🗂️ Estructura del Proyecto

El sitio web está compuesto por tres archivos principales que deben estar ubicados en la misma carpeta:

1.  **`index.html`**: Contiene el marcado semántico HTML5 de la página. Incluye las secciones Hero, Categorías, Proyectos y Contacto.
2.  **`style.css`**: Contiene todos los estilos CSS, las variables de color, y la lógica de las **Media Queries** para el diseño responsivo. También define las clases para las animaciones.
3.  **`script.js`**: Contiene la lógica JavaScript para:
    * Gestionar la animación **Intersection Observer** para cargar contenido al hacer scroll.
    * Un sutil efecto de texto en *hover* en el logo.

## 🛠️ Cómo Visualizar la Web

1.  Asegúrate de que los tres archivos (`index.html`, `style.css`, y `script.js`) están en el mismo directorio.
2.  Abre el archivo **`index.html`** en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).

## 🎨 Notas de Diseño y Personalización

* **Tipografía:** Utiliza **Oswald** para titulares de impacto y **Lato** para el cuerpo de texto, transmitiendo potencia y legibilidad.
* **Acentos:** El color `--acento-plateado` (`#c9d6de`) es clave para destacar los CTA y el logotipo. Se incluyó un color de énfasis secundario, `--acento-rojo` (`#a30000`), para sugerir rendimiento y velocidad.
* **Animación:** Si deseas que un elemento se anime al aparecer en pantalla, simplemente añade la clase **`animate-on-scroll`** a su etiqueta HTML.
