import { Colors } from "@/constants/Color";
import { ws } from "@/helpers/Dimension";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const hero = require("../assets/images/WelcomeScreenHero.png");
  const router = useRouter();
  return (
    <>
      <StatusBar backgroundColor={Colors.hero_bg} />
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            height: 469,
            width: ws,
            backgroundColor: Colors.hero_bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 469 * 0.06,
          }}
        >
          <Image source={hero} style={{ height: 304, width: 303 }} />
        </View>
        <View
          style={{
            flex: 1,
            width: ws,
            padding: ws * 0.05,
            display: "flex",
            flexDirection: "column",
            gap: 48,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 700,
                lineHeight: 24,
                letterSpacing: -0.2,
                marginVertical: 20,
                color: Colors.hero_foreground,
              }}
            >
              Get The Freshest Fruit Salad Combo
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 20,
                letterSpacing: -0.2,
                color: Colors.hero_foreground_light,
              }}
            >
              We deliver the best and freshest fruit salad in town. Order for a
              combo today!!!
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: Colors.hero_bg,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              padding: 12,
              borderRadius: 8,
            }}
            onPress={() => {
              console.log("Continue pressed");
              router.push("/AuthScreen");
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Let&apos;s Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
