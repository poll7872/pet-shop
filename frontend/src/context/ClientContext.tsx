import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { getClients, createClient, IClient } from "../api/clients";

interface ClientsContextType {
  clients: IClient[];
  fetchClients: () => Promise<void>;
  addClient: (client: Omit<IClient, "_id">) => Promise<void>;
}

const ClientsContext = createContext<ClientsContextType | undefined>(undefined);

export const ClientsProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useState<IClient[]>([]);

  const fetchClients = useCallback(async () => {
    try {
      const fetchedClients = await getClients();
      setClients(fetchedClients);
    } catch (error) {
      console.error("Error obteniendo clients", error);
    }
  }, []); // No tiene dependencias porque `getClients` no cambia

  const addClient = useCallback(async (client: Omit<IClient, "_id">) => {
    try {
      const newClient = await createClient(client);
      setClients((prevClients) => [...prevClients, newClient]);
    } catch (error) {
      console.error("Failed to add client", error);
    }
  }, []);

  return (
    <ClientsContext.Provider value={{ clients, fetchClients, addClient }}>
      {children}
    </ClientsContext.Provider>
  );
};

export const useClients = () => {
  const context = useContext(ClientsContext);
  if (!context) {
    throw new Error("useClients must be used within a ClientsProvider");
  }
  return context;
};

