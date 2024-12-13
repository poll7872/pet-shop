import React, { useState, ChangeEvent, FormEvent } from "react";
import { createProduct } from "../../api/products";

interface ProductFormProps {
  onClose: () => void;
  onProductAdded: () => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({ onClose, onProductAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: 0,
    description: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "price" ? parseFloat(value) : value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createProduct(formData);
      onProductAdded();
      onClose();
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="modal">
      <div className="form-container">
        <h2>Crear Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="div-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre del producto..."
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="div-form">
            <label htmlFor="category">Categoria</label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Añade la categoría..."
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="div-form">
            <label htmlFor="price">Precio</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Precio..."
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="div-form">
            <label htmlFor="description">Descripción</label>
            <textarea
              name="description"
              id="description"
              placeholder="Descripción..."
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="container-btn">
            <button className="btn" type="submit">Crear</button>
            <button className="btn-dos" type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div >
    </div >
  );
};

