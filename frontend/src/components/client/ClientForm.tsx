import React, { useState, ChangeEvent, FormEvent } from "react";
import { createClient } from "../../api/clients";

interface ClientFormProps {
  onClose: () => void;
  onClientAdded: () => void;
}

export const ClientForm: React.FC<ClientFormProps> = ({ onClose, onClientAdded }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createClient(formData);
      onClientAdded();
      onClose();
    } catch (error) {
      console.error("Error creating client:", error);
    }
  };

  return (
    <div className="modal">
      <div className="form-container">
        <h2>Crear Cliente</h2>
        <form onSubmit={handleSubmit}>
          <div className="div-form">
            <label htmlFor="firstname">Nombre</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Nombre del cliente..."
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="div-form">
            <label htmlFor="lastname">Apellidos</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Apellido del cliente..."
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="div-form">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo del cliente..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="div-form">
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              name="address"
              placeholder="Añade la dirección..."
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="div-form">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Número de teléfono..."
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="container-btn">
            <button className="btn" type="submit">Crear</button>
            <button className="btn-dos" type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

