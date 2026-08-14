

Readme · MD
# 💧🚰Acueducto Campo Amor
 
## Descripción
Aplicación para la gestión del acueducto veredal Campo Amor. Permite administrar usuarios, pagos, facturación y notificaciones, facilitando el control del cobro de la cuota fija del servicio de agua y la comunicación entre administrador, fontanero y usuarios.
 
## Tecnologías o stack tecnológico
- **Flutter** – Desarrollo de la aplicación (frontend multiplataforma)
- **Dart** – Lenguaje de programación
- **Supabase** – Backend as a Service (base de datos, autenticación y API)
- **PostgreSQL** – Motor de base de datos (gestionado por Supabase)
- **Postman** – Pruebas de endpoints de la API
- **Git & GitHub** – Control de versiones y trabajo colaborativo
## Características del proyecto
- Registro e inicio de sesión de usuarios
- Gestión de usuarios y administrador
- Rol de fontanero con notificaciones asignadas
- Generación y gestión de facturas
- Alertas y notificaciones de pago
- Cobro por cuota fija (sin medición de consumo)
## Instalación y configuración
 
### Requisitos previos
- Flutter SDK instalado (`flutter doctor` sin errores)
- Cuenta y proyecto creado en [Supabase](https://supabase.com)
- Editor de código (VS Code recomendado)
### Pasos
1. Clonar el repositorio:
```bash
   git clone https://github.com/jhonjamergdevarasanchez32-sketch/Acueducto_Campo_Amor.git
   cd Acueducto_Campo_Amor
```
2. Instalar las dependencias:
```bash
   flutter pub get
```
3. Configurar las credenciales de Supabase (URL del proyecto y `anon key`) en el archivo de inicialización (`main.dart` o archivo de configuración/entorno).
4. Ejecutar la aplicación:
```bash
   flutter run
```
 
## Estructura del proyecto
```
acueducto_app/
├── lib/
│   ├── main.dart
│   ├── models/          # Modelos de datos (usuario, factura, pago, etc.)
│   ├── screens/          # Pantallas de la aplicación
│   ├── services/          # Conexión y consultas a Supabase
│   └── widgets/          # Componentes reutilizables
├── assets/                # Imágenes y recursos
├── pubspec.yaml           # Dependencias del proyecto
└── README.md
```
 
## Autores
- *(agrega aquí tu nombre y el de tus compañeros)*
