import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AppContextType = {
  name: string;
  setname: (name: string) => void;
  StoreName: (value: string) => void;
  GetName: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [name, setname] = useState<string>("Tony");
  const router = useRouter();
 
  useEffect(() => {
    const loadName = async () => {
      try {
        const storedName = await AsyncStorage.getItem("@Storage_name");
        if (storedName) {
          setname(storedName);  
          router.push("/(user)/HomeScreen");  
        }
      } catch (error) {
        console.log("Error loading name:", error);
      }
    };

    loadName();
  }, [router]);

  // ✅ Store provided value, not state
  const StoreName = async (value: string) => {
    try {
      await AsyncStorage.setItem("@Storage_name", value);
      setname(value); // update state
      
      router.push("/(user)/HomeScreen");
    } catch (error) {
      console.log("Error storing name:", error);
    }
  };
 
  const GetName = async () => {
    try {
      const value = await AsyncStorage.getItem("@Storage_name");
      if (value) {
        setname(value);
        console.log(name);
        router.push("/(user)/HomeScreen");
      }
    } catch (error) {
      console.log("Error getting name:", error);
    }
  };

  return (
    <AppContext.Provider value={{ name, setname, StoreName, GetName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
