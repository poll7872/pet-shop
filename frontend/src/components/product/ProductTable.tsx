import React from "react";
import { IProduct } from "../../api/products";
import { BoxEditFilled, DeleteFilled } from "@fluentui/react-icons";

type ProductTableProps = {
  products: IProduct[]
}

export const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Categoria</th>
          <th>Precio</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>${product.price}</td>
            <td>{product.description}</td>
            <td className="icons-tables">
              <BoxEditFilled className="icons-actions" />
              <DeleteFilled className="icons-actions" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
