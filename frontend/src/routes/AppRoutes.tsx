import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductPage";
import { ClientPage } from "../pages/ClientPages";
import { AuthContext } from "../context/AuthContext";
import { ProductsProvider } from "../context/ProductContext";
import { ClientsProvider } from "../context/ClientContext";
import { Sidebar } from "../components/SideBar";
import { UsersPage } from "../pages/UsersPage";

export const AppRoutes: React.FC = () => {
  const { token } = useContext(AuthContext);

  return (
    <Router>
      <ProductsProvider>
        <ClientsProvider>
          <div className="app-layout">
            {/* Renderiza el Sidebar solo si el usuario está autenticado */}
            {token && <Sidebar />}

            <div className="content">
              <Routes>
                {/* Ruta de Login */}
                <Route path="/login" element={<LoginPage />} />

                {/* Rutas protegidas */}
                <Route
                  path="/productos"
                  element={token ? <ProductsPage /> : <Navigate to="/login" />}
                />
                <Route
                  path="/clientes"
                  element={token ? <ClientPage /> : <Navigate to="/login" />}
                />
                <Route
                  path="/usuarios"
                  element={token ? <UsersPage /> : <Navigate to="/login" />}
                />


                {/* Ruta por defecto */}
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </div>
          </div>
        </ClientsProvider>
      </ProductsProvider>
    </Router>
  );
};

