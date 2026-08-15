// models/notification.js

import { supabase } from "../config/supabase.js";

// Crear una notificación
export const createNotification = async ({
  user_id,
  title,
  message,
  type = "info",
}) => {
  const { data, error } = await supabase
    .from("notifications")
    .insert([
      {
        user_id,
        title,
        message,
        type,
        read: false,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error creando notificación:", error);
    throw error;
  }

  return data;
};

// Obtener notificaciones de un usuario
export const getNotificationsByUser = async (user_id) => {
  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error obteniendo notificaciones:", error);
    throw error;
  }

  return data;
};

// Marcar una notificación como leída
export const markNotificationAsRead = async (id) => {
  const { data, error } = await supabase
    .from("notifications")
    .update({ read: true })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error marcando notificación:", error);
    throw error;
  }

  return data;
};

// Eliminar una notificación
export const deleteNotification = async (id) => {
  const { error } = await supabase
    .from("notifications")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error eliminando notificación:", error);
    throw error;
  }

  return true;
};