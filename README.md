# 🎉 Amigo Secreto

Una aplicación web simple y elegante para realizar sorteos de amigo secreto de forma aleatoria. Perfecta para organizar intercambios de regalos en fiestas, eventos familiares o con amigos.

## ✨ Características

- **Interfaz intuitiva**: Diseño moderno y fácil de usar
- **Agregar amigos**: Añade nombres a la lista de participantes
- **Validación inteligente**: Previene nombres vacíos y duplicados
- **Sorteo aleatorio**: Selección completamente aleatoria del amigo secreto
- **Gestión de lista**: Elimina participantes si es necesario
- **Responsive**: Funciona en dispositivos móviles y desktop
- **Animaciones suaves**: Experiencia visual atractiva

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con variables CSS y flexbox

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/EdwinEstrella/amigo-secreto.git
```

2. Navega al directorio del proyecto:
```bash
cd amigo-secreto
```

3. Abre `index.html` en tu navegador favorito o usa un servidor local:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes live-server instalado)
live-server

# Con PHP
php -S localhost:8000
```

## 📁 Estructura del Proyecto

```
amigo-secreto/
│
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── app.js              # Lógica JavaScript
├── assets/             # Recursos estáticos
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md           # Este archivo
```

## 🎮 Cómo Usar

1. **Agregar participantes**:
   - Escribe el nombre de un amigo en el campo de texto
   - Haz clic en "Añadir" o presiona Enter
   - El nombre aparecerá en la lista debajo

2. **Gestionar la lista**:
   - Puedes eliminar nombres haciendo clic en el botón "×" junto a cada nombre
   - No se permiten nombres duplicados o vacíos

3. **Realizar el sorteo**:
   - Una vez que tengas al menos un nombre en la lista
   - Haz clic en "Sortear amigo"
   - El resultado aparecerá con una animación

4. **Repetir el proceso**:
   - Puedes realizar múltiples sorteos
   - Agrega o quita participantes cuando quieras

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar el proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📝 Ideas para Futuras Mejoras

- [ ] Persistencia de datos con localStorage
- [ ] Historial de sorteos anteriores
- [ ] Exportar resultados a PDF o imagen
- [ ] Modo oscuro
- [ ] Sonidos y efectos adicionales
- [ ] Restricciones personalizadas (ej: que una persona no se saque a sí misma)
- [ ] Múltiples listas de grupos
- [ ] PWA (Progressive Web App)

## 🐛 Reportar Problemas

Si encuentras algún bug o tienes sugerencias, por favor:
1. Revisa si ya existe un issue similar
2. Crea un nuevo issue describiendo el problema
3. Incluye pasos para reproducir el error si es aplicable

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: https://github.com/EdwinEstrella
- LinkedIn: https://linkedin.com/in/edwin-gabriel-estrella-florentino-85369118a
- Proyecto: https://edwinestrella.github.io/amigo-secreto/

---

⭐ ¡No olvides dar una estrella al proyecto si te gustó!

## 🙏 Agradecimientos

- Iconos de [Google Material Icons](https://material.io/icons/)
- Fuentes de [Google Fonts](https://fonts.google.com/)
- Inspiración en diseños modernos de aplicaciones web
