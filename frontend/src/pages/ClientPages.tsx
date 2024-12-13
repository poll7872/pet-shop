import React, { useState, useEffect } from 'react';
import { useClients } from '../context/ClientContext';
import { ClientForm } from '../components/client/ClientForm';
import { ClientTable } from '../components/client/ClientTable';
import { AddSquareFilled } from '@fluentui/react-icons';

export const ClientPage: React.FC = () => {
  const { clients, fetchClients } = useClients()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchClients()
  }, [fetchClients])

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div>
      <h2>Administrador de Clientes</h2>
      <div className='container'>
        <div className='container-search'>
          <input className="input-search" type="text" placeholder="Buscar Productos..." />
          <button className='btn'>Buscar</button>
        </div>
        <button className='btn-search' onClick={handleOpenModal}>
          Agregar
          <AddSquareFilled className='icons-btn' />
        </button>
        <ClientTable clients={clients} />
        {isModalOpen && (
          <ClientForm onClose={handleCloseModal} onClientAdded={fetchClients} />
        )}
      </div>
    </div>
  )
}

