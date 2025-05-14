import { Colors } from "@/constants/Color";
import { ws } from "@/helpers/Dimension";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, View } from "react-native";

const AuthScreen = () => {
  const hero = require("../assets/images/AuthScreenHero.png");
  return (
    <>
      <StatusBar backgroundColor={Colors.hero_bg} />
      <View style={{ flex: 1 }}>
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
          <Image source={hero} style={{ height: 304, width: 304 }} />
        </View>
      </View>
    </>
  );
};

export default AuthScreen;
