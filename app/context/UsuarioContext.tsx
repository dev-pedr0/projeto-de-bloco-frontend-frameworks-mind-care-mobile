import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Usuario } from '../data/usuariosFake';

interface UsuarioContextType {
  usuario: Usuario | null;
  login: (usuario: Usuario) => void;
  logout: () => void;
}

const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

export const UsuarioProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const login = (usuarioLogado: Usuario) => {
    setUsuario(usuarioLogado);
  };

  const logout = () => {
    setUsuario(null);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioProvider;

export const useUser = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de UsuarioProvider');
  }
  return context;
};