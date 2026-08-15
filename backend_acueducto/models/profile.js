import { DataTypes } from "sequelize";
import sequelize from "../server.js";

const Profile = sequelize.define(
  "Profile",
  {
    id_profile: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    direccion: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    foto: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "profiles",
    timestamps: true,
  }
);

export default Profile;