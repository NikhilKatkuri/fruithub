import { Colors } from "@/constants/Color";
import { useAppContext } from "@/context/AppContext";
import { ws } from "@/helpers/Dimension";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
const AuthScreen = () => {
  const hero = require("../assets/images/AuthScreenHero.png");
  const { StoreName, GetName,name, setname } = useAppContext();

  useEffect(() => {
    GetName();
  }, [GetName]);
  return (
    <>
      <StatusBar backgroundColor={Colors.hero_bg} />
      <View style={{ flex: 1, backgroundColor: "white" }}>
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
        <View
          style={{
            flex: 1,
            padding: ws * 0.05,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 700,
                lineHeight: 28,
                letterSpacing: -0.1,
                marginVertical: 28,
                color: Colors.hero_foreground,
              }}
            >
              What is your firstname?
            </Text>
            <TextInput
              placeholder={name ?? "Tony"}
              onChangeText={(e) => {
                setname(e);
              }}
              style={{
                width: "100%",
                paddingHorizontal: 10,
                paddingVertical: 16,
                borderRadius: 10,
                backgroundColor: Colors.Input_bg,
                color: Colors.Input_foreground,
                fontSize: 16,
                fontWeight: 600,
              }}
            />
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
              StoreName(name);
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Start ordering</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AuthScreen;
