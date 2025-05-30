import FruitCard from "@/components/FruitCard";
import { Colors } from "@/constants/Color";
import { useAppContext } from "@/context/AppContext";
import { hs, ws } from "@/helpers/Dimension";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, Line, Path } from "react-native-svg";

const Navbar = () => {
  const { name } = useAppContext();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: 36,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TouchableOpacity
          accessible
          accessibilityLabel="Open menu"
          activeOpacity={0.7}
        >
          <Svg
            style={{ width: 28, height: 28 }}
            viewBox="0 0 24 24"
            fill="none"
          >
            <Path
              d="M0 1.375C0 1.01033 0.144866 0.660591 0.402728 0.402728C0.660591 0.144866 1.01033 0 1.375 0H20.625C20.9897 0 21.3394 0.144866 21.5973 0.402728C21.8551 0.660591 22 1.01033 22 1.375C22 1.73967 21.8551 2.08941 21.5973 2.34727C21.3394 2.60513 20.9897 2.75 20.625 2.75H1.375C1.01033 2.75 0.660591 2.60513 0.402728 2.34727C0.144866 2.08941 0 1.73967 0 1.375Z"
              fill="#070648"
            />
            <Path
              d="M1.375 8.25C1.01033 8.25 0.660591 8.39487 0.402728 8.65273C0.144866 8.91059 0 9.26033 0 9.625C0 9.98967 0.144866 10.3394 0.402728 10.5973C0.660591 10.8551 1.01033 11 1.375 11H12.375C12.7397 11 13.0894 10.8551 13.3473 10.5973C13.6051 10.3394 13.75 9.98967 13.75 9.625C13.75 9.26033 13.6051 8.91059 13.3473 8.65273C13.0894 8.39487 12.7397 8.25 12.375 8.25H1.375Z"
              fill="#070648"
            />
          </Svg>
        </TouchableOpacity>

        <TouchableOpacity>
          <Svg
            style={{ width: 24, height: 24 }}
            viewBox="0 0 24 24"
            fill="none"
          >
            <Path
              d="M22.5 10.2857C22.9141 10.2857 23.2676 10.4531 23.5605 10.7879C23.8535 11.1228 24 11.5268 24 12C24 12.4732 23.8535 12.8772 23.5605 13.2121C23.2676 13.5469 22.9141 13.7143 22.5 13.7143H22.3242L20.9766 22.5804C20.9141 22.9911 20.7422 23.3304 20.4609 23.5982C20.1797 23.8661 19.8594 24 19.5 24H4.5C4.14062 24 3.82031 23.8661 3.53906 23.5982C3.25781 23.3304 3.08594 22.9911 3.02344 22.5804L1.67578 13.7143H1.5C1.08594 13.7143 0.732422 13.5469 0.439453 13.2121C0.146484 12.8772 0 12.4732 0 12C0 11.5268 0.146484 11.1228 0.439453 10.7879C0.732422 10.4531 1.08594 10.2857 1.5 10.2857H22.5ZM5.68359 21C5.88672 20.9821 6.05664 20.8817 6.19336 20.6987C6.33008 20.5156 6.39062 20.308 6.375 20.0759L6 14.5045C5.98438 14.2723 5.89648 14.0781 5.73633 13.9219C5.57617 13.7656 5.39453 13.6964 5.19141 13.7143C4.98828 13.7321 4.81836 13.8326 4.68164 14.0156C4.54492 14.1987 4.48438 14.4063 4.5 14.6384L4.875 20.2098C4.89062 20.433 4.9707 20.6205 5.11523 20.7723C5.25977 20.9241 5.42969 21 5.625 21H5.68359ZM10.5 20.1429V14.5714C10.5 14.3393 10.4258 14.1384 10.2773 13.9688C10.1289 13.7991 9.95312 13.7143 9.75 13.7143C9.54688 13.7143 9.37109 13.7991 9.22266 13.9688C9.07422 14.1384 9 14.3393 9 14.5714V20.1429C9 20.375 9.07422 20.5759 9.22266 20.7455C9.37109 20.9152 9.54688 21 9.75 21C9.95312 21 10.1289 20.9152 10.2773 20.7455C10.4258 20.5759 10.5 20.375 10.5 20.1429ZM15 20.1429V14.5714C15 14.3393 14.9258 14.1384 14.7773 13.9688C14.6289 13.7991 14.4531 13.7143 14.25 13.7143C14.0469 13.7143 13.8711 13.7991 13.7227 13.9688C13.5742 14.1384 13.5 14.3393 13.5 14.5714V20.1429C13.5 20.375 13.5742 20.5759 13.7227 20.7455C13.8711 20.9152 14.0469 21 14.25 21C14.4531 21 14.6289 20.9152 14.7773 20.7455C14.9258 20.5759 15 20.375 15 20.1429ZM19.125 20.2098L19.5 14.6384C19.5156 14.4063 19.4551 14.1987 19.3184 14.0156C19.1816 13.8326 19.0117 13.7321 18.8086 13.7143C18.6055 13.6964 18.4238 13.7656 18.2637 13.9219C18.1035 14.0781 18.0156 14.2723 18 14.5045L17.625 20.0759C17.6094 20.308 17.6699 20.5156 17.8066 20.6987C17.9434 20.8817 18.1133 20.9821 18.3164 21H18.375C18.5703 21 18.7402 20.9241 18.8848 20.7723C19.0293 20.6205 19.1094 20.433 19.125 20.2098ZM5.57812 3.91071L4.48828 9.42857H2.94141L4.125 3.52232C4.27344 2.73661 4.62109 2.09598 5.16797 1.60045C5.71484 1.10491 6.33984 0.857143 7.04297 0.857143H9C9 0.625 9.07422 0.424107 9.22266 0.254464C9.37109 0.0848214 9.54688 0 9.75 0H14.25C14.4531 0 14.6289 0.0848214 14.7773 0.254464C14.9258 0.424107 15 0.625 15 0.857143H16.957C17.6602 0.857143 18.2852 1.10491 18.832 1.60045C19.3789 2.09598 19.7266 2.73661 19.875 3.52232L21.0586 9.42857H19.5117L18.4219 3.91071C18.3359 3.51786 18.1582 3.19643 17.8887 2.94643C17.6191 2.69643 17.3086 2.57143 16.957 2.57143H15C15 2.80357 14.9258 3.00446 14.7773 3.17411C14.6289 3.34375 14.4531 3.42857 14.25 3.42857H9.75C9.54688 3.42857 9.37109 3.34375 9.22266 3.17411C9.07422 3.00446 9 2.80357 9 2.57143H7.04297C6.69141 2.57143 6.38086 2.69643 6.11133 2.94643C5.8418 3.19643 5.66406 3.51786 5.57812 3.91071Z"
              fill="#FFA451"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text
          style={{
            fontSize: 24,
            marginVertical: 6,
            color: Colors.foreground_header,
            fontWeight: 600,
          }}
        >
          <Text style={{ fontWeight: 400 }}>Hello {name ?? "Tony"}</Text>, What
          fruit salad combo do you want today?
        </Text>
      </View>
    </View>
  );
};
const SearchArea = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 6,
        gap: 6,
      }}
    >
      <View
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: 4,
          height: 44,
          backgroundColor: Colors.light_shade,
          borderRadius: 6,
          elevation: 1,
          paddingHorizontal: 12,
        }}
      >
        <View style={{ width: 24, marginBottom: 4 }}>
          <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.442 10.442C10.5349 10.3491 10.6452 10.2753 10.7666 10.225C10.888 10.1746 11.0181 10.1487 11.1495 10.1487C11.2809 10.1487 11.411 10.1746 11.5324 10.225C11.6538 10.2753 11.7641 10.3491 11.857 10.442L15.707 14.292C15.8946 14.4795 16.0001 14.7339 16.0002 14.9992C16.0003 15.2644 15.895 15.5189 15.7075 15.7065C15.52 15.8942 15.2656 15.9996 15.0004 15.9997C14.7351 15.9998 14.4806 15.8945 14.293 15.707L10.443 11.857C10.35 11.7642 10.2763 11.6539 10.2259 11.5325C10.1756 11.4111 10.1497 11.2809 10.1497 11.1495C10.1497 11.0181 10.1756 10.888 10.2259 10.7666C10.2763 10.6452 10.35 10.5349 10.443 10.442H10.442Z"
              fill="#86869E"
            />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.5 12C7.22227 12 7.93747 11.8577 8.60476 11.5813C9.27205 11.3049 9.87837 10.8998 10.3891 10.3891C10.8998 9.87837 11.3049 9.27205 11.5813 8.60476C11.8577 7.93747 12 7.22227 12 6.5C12 5.77773 11.8577 5.06253 11.5813 4.39524C11.3049 3.72795 10.8998 3.12163 10.3891 2.61091C9.87837 2.10019 9.27205 1.69506 8.60476 1.41866C7.93747 1.14226 7.22227 1 6.5 1C5.04131 1 3.64236 1.57946 2.61091 2.61091C1.57946 3.64236 1 5.04131 1 6.5C1 7.95869 1.57946 9.35764 2.61091 10.3891C3.64236 11.4205 5.04131 12 6.5 12ZM13 6.5C13 8.22391 12.3152 9.87721 11.0962 11.0962C9.87721 12.3152 8.22391 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5Z"
              fill="#86869E"
            />
          </Svg>
        </View>
        <TextInput
          placeholder="Search for fruit salad combos"
          style={{ flex: 1, fontSize: 16 }}
        ></TextInput>
      </View>
      <View
        style={{
          height: 17,
          width: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Svg width="26" height="17" viewBox="0 0 26 17" fill="none">
          <Line
            x1="8"
            y1="4"
            x2="24"
            y2="4"
            stroke="#070648"
            stroke-width="2"
            stroke-linecap="round"
          />
          <Line
            x1="18"
            y1="13"
            x2="2"
            y2="13"
            stroke="#070648"
            stroke-width="2"
            stroke-linecap="round"
          />
          <Circle cx="4" cy="4" r="3.5" stroke="#070648" />
          <Circle
            cx="22"
            cy="13"
            r="3.5"
            transform="rotate(-180 22 13)"
            stroke="#070648"
          />
        </Svg>
      </View>
    </View>
  );
};
const RecommendedCombo = () => {
  const { data } = useAppContext();
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 600,
          marginTop: 24,
          marginBottom: 16,
          color: Colors.foreground_header,
        }}
      >
        Recommended Combo
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {data.map((item, i) => (
            <FruitCard data={item} key={i} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const HomeScreen = () => {
  return (
    <>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={{ backgroundColor: "#f8fafc", flex: 1 }}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: ws * 0.04,
            paddingVertical: hs * 0.02,
          }}
        >
          <Navbar />
          <SearchArea />
          <RecommendedCombo />
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
