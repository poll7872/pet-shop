import React from "react";
import { IClient } from "../../api/clients";
import { DeleteFilled, EditPersonFilled } from "@fluentui/react-icons";

type ClientTableProps = {
  clients: IClient[]
}

export const ClientTable: React.FC<ClientTableProps> = ({ clients }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>apellidos</th>
          <th>Correo</th>
          <th>Dirección</th>
          <th>Telefono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client._id}>
            <td>{client.firstname}</td>
            <td>{client.lastname}</td>
            <td>{client.email}</td>
            <td>{client.address}</td>
            <td>{client.phone}</td>
            <td className="icons-tables">
              <EditPersonFilled className="icons-actions" />
              <DeleteFilled className="icons-actions" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
