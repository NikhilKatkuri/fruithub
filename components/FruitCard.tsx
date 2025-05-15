import { Colors } from "@/constants/Color";
import Data from "@/interface/Data";
import React from "react";
import { Image, Text, View } from "react-native";

const FruitCard = ({ data }: { data: Data }) => {
  return (
    <View
      style={{
        height: 200,
        width: 180,
        elevation: 0.7,
        backgroundColor: "white",
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <View></View>
      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row", 
        }}
      >
        <Image
          source={{ uri: data.imageUrl }}
          style={{ height: 100, width: 100, borderRadius: 50 }}
        />
      </View>
      <View style={{}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: Colors.foreground_header,
          }}
        >
          {data.title}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 4,
          }}
        >
          <Text style={{ fontWeight: 600, color: Colors.highlight }}>
            ${" " + data.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FruitCard;
