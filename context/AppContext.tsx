import Data from "@/interface/Data";
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
  data: Data[];
  setData: (data: Data[]) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [name, setname] = useState<string>("Tony");
  const [data, setData] = useState([
    // Hottest (6)
    {
      id: 1,
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/09/26/13/31/apple-2788616_1280.jpg",
      liked: true,
      added: true,
      price: 1.99,
      title: "Fresh Red Apple",
      category: "hottest",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/09/03/20/48/bananas-1642706_1280.jpg",
      liked: false,
      added: false,
      price: 0.89,
      title: "Organic Bananas",
      category: "hottest",
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/12/28/15/25/tangerines-1111529_1280.jpg",
      liked: true,
      added: false,
      price: 2.29,
      title: "Juicy Oranges",
      category: "hottest",
    },
    {
      id: 4,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/07/22/02/58/mango-1534061_1280.jpg",
      liked: true,
      added: true,
      price: 3.99,
      title: "Alphonso Mango",
      category: "hottest",
    },
    {
      id: 5,
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/04/11/15/13/pineapple-4119946_1280.jpg",
      liked: false,
      added: true,
      price: 2.99,
      title: "Golden Pineapple",
      category: "hottest",
    },
    {
      id: 6,
      imageUrl:
        "https://cdn.pixabay.com/photo/2013/04/02/21/47/strawberries-99551_1280.jpg",
      liked: true,
      added: false,
      price: 3.49,
      title: "Sweet Strawberries",
      category: "hottest",
    },

    // Popular (6)
    {
      id: 7,
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/08/28/04/20/kiwi-6579961_640.jpg",
      liked: false,
      added: false,
      price: 1.59,
      title: "Zespri Kiwi",
      category: "popular",
    },
    {
      id: 8,
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/07/18/13/01/blueberry-5417154_640.jpg",
      liked: true,
      added: true,
      price: 4.79,
      title: "Blueberries",
      category: "popular",
    },
    {
      id: 9,
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/03/28/12/45/grapes-2182073_1280.jpg",
      liked: true,
      added: false,
      price: 2.69,
      title: "Seedless Grapes",
      category: "popular",
    },
    {
      id: 10,
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/05/14/16/06/pomegranate-6253869_1280.jpg",
      liked: false,
      added: true,
      price: 3.89,
      title: "Pomegranate",
      category: "popular",
    },
    {
      id: 11,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/08/02/23/05/watermelon-1562813_1280.jpg",
      liked: true,
      added: true,
      price: 5.99,
      title: "Watermelon",
      category: "popular",
    },
    {
      id: 12,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/08/10/15/53/peach-1583609_1280.jpg",
      liked: false,
      added: false,
      price: 2.19,
      title: "California Peach",
      category: "popular",
    },

    // New (6)
    {
      id: 13,
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/07/06/15/45/dragon-fruit-7304381_1280.jpg",
      liked: true,
      added: false,
      price: 4.99,
      title: "Dragon Fruit",
      category: "new",
    },
    {
      id: 14,
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/01/19/18/56/jackfruit-5932786_1280.jpg",
      liked: false,
      added: true,
      price: 6.49,
      title: "Jackfruit",
      category: "new",
    },
    {
      id: 15,
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/05/16/16/45/starfruit-3408496_1280.jpg",
      liked: true,
      added: false,
      price: 3.29,
      title: "Star Fruit",
      category: "new",
    },
    {
      id: 16,
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/06/17/23/25/lychee-3482253_1280.jpg",
      liked: false,
      added: false,
      price: 4.59,
      title: "Litchi Box",
      category: "new",
    },
    {
      id: 17,
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/04/27/01/51/blackberries-2262812_1280.jpg",
      liked: true,
      added: true,
      price: 5.99,
      title: "Blackberries",
      category: "new",
    },
    {
      id: 18,
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/06/14/21/27/cherries-3474647_1280.jpg",
      liked: true,
      added: false,
      price: 6.49,
      title: "Fresh Cherries",
      category: "new",
    },

    // Combo (6)
    {
      id: 19,
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/03/26/16/01/fruit-4969224_1280.jpg",
      liked: false,
      added: true,
      price: 10.99,
      title: "Mixed Fruit Box",
      category: "combo",
    },
    {
      id: 20,
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/01/20/15/08/berries-1995077_1280.jpg",
      liked: true,
      added: true,
      price: 7.49,
      title: "Berry Mix Combo",
      category: "combo",
    },
    {
      id: 21,
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/08/10/06/49/tropical-fruits-6534346_1280.jpg",
      liked: true,
      added: false,
      price: 12.99,
      title: "Tropical Combo",
      category: "combo",
    },
    {
      id: 22,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/01/20/13/05/orange-1152178_1280.jpg",
      liked: false,
      added: false,
      price: 9.49,
      title: "Citrus Fruit Combo",
      category: "combo",
    },
    {
      id: 23,
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/01/31/17/22/apple-3123896_1280.jpg",
      liked: false,
      added: true,
      price: 8.75,
      title: "Green Fruit Box",
      category: "combo",
    },
    {
      id: 24,
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/08/10/07/32/orange-2611511_1280.jpg",
      liked: true,
      added: true,
      price: 11.49,
      title: "Vitamin C Fruit Box",
      category: "combo",
    },

    // Top (6)
    {
      id: 25,
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/04/16/22/13/pear-2238197_1280.jpg",
      liked: false,
      added: false,
      price: 2.49,
      title: "Juicy Pear",
      category: "top",
    },
    {
      id: 26,
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/08/14/13/23/plums-3605925_1280.jpg",
      liked: true,
      added: false,
      price: 3.19,
      title: "Red Plums",
      category: "top",
    },
    {
      id: 27,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/03/27/13/16/guava-694221_1280.jpg",
      liked: false,
      added: true,
      price: 1.79,
      title: "Guava",
      category: "top",
    },
    {
      id: 28,
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/05/27/15/21/melon-3435074_1280.jpg",
      liked: true,
      added: true,
      price: 5.59,
      title: "Sweet Melon",
      category: "top",
    },
    {
      id: 29,
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/10/06/20/04/cranberries-2829702_1280.jpg",
      liked: true,
      added: false,
      price: 4.99,
      title: "Cranberries",
      category: "top",
    },
    {
      id: 30,
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/02/12/12/46/avocado-4842353_1280.jpg",
      liked: false,
      added: true,
      price: 3.89,
      title: "Fresh Avocado",
      category: "top",
    },
  ]);
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
    <AppContext.Provider
      value={{ name, setname, StoreName, GetName, data, setData }}
    >
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
