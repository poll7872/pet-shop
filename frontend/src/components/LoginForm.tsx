import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setError(null)
      await login(email, password)
      navigate('/productos')
    } catch (err) {
      console.error('Error al iniciar sesión', err)
      setError('Contraseña incorrecta, intentalo de nuevo')
    }
  }

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <div className="container-logo">
        <img src="/logo-login.png" alt="logo mascotas" />
        <h2>Iniciar Sesión</h2>
      </div>
      <div className="div-form">
        <label htmlFor="password">Correo</label>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="div-form">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button className="btn-dos" type="submit">Iniciar Sesión</button>
    </form >
  );
}
