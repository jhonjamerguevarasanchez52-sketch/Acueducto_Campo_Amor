class AppUser {
  final String id;
  final String email;
  final String nombre;
  final String? telefono;
  final String? direccion;
  final String rol; // 'usuario', 'administrador', 'fontanero'
  final DateTime? createdAt;

  AppUser({
    required this.id,
    required this.email,
    required this.nombre,
    this.telefono,
    this.direccion,
    required this.rol,
    this.createdAt,
  });

  // Convierte un Map (respuesta de Supabase) a un objeto AppUser
  factory AppUser.fromMap(Map<String, dynamic> map) {
    return AppUser(
      id: map['id'] as String,
      email: map['email'] as String,
      nombre: map['nombre'] as String,
      telefono: map['telefono'] as String?,
      direccion: map['direccion'] as String?,
      rol: map['rol'] as String,
      createdAt: map['created_at'] != null
          ? DateTime.parse(map['created_at'] as String)
          : null,
    );
  }

  // Convierte el objeto AppUser a un Map (para insertar/actualizar en Supabase)
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'email': email,
      'nombre': nombre,
      'telefono': telefono,
      'direccion': direccion,
      'rol': rol,
    };
  }

  // Helpers para verificar el rol fácilmente
  bool get esAdministrador => rol == 'administrador';
  bool get esFontanero => rol == 'fontanero';
  bool get esUsuario => rol == 'usuario';

  @override
  String toString() {
    return 'AppUser(id: $id, nombre: $nombre, rol: $rol)';
  }
}