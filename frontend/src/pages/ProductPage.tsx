import React, { useState, useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import { ProductTable } from '../components/product/ProductTable';
import { ProductForm } from '../components/product/ProductForm';
import { AddSquareFilled } from '@fluentui/react-icons';

export const ProductsPage: React.FC = () => {
  const { products, fetchProducts } = useProducts()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div>
      <h2>Administrador de Productos</h2>
      <div className='container'>
        <div className='container-search'>
          <input className="input-search" type="text" placeholder="Buscar Clientes..." />
          <button className='btn'>Buscar</button>
        </div>
        <button className='btn-search' onClick={handleOpenModal}>
          Agregar
          <AddSquareFilled className='icons-btn' />
        </button>

        <ProductTable products={products} />
        {isModalOpen && (
          <ProductForm onClose={handleCloseModal} onProductAdded={fetchProducts} />
        )}
      </div>
    </div>
  )
}

