import React from "react";
import Text from "../components/common/Text";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import _sizes from "../constants/sizes";
import { _theme } from "../constants/theme";
import BtnOne from "../components/common/Buttons/BtnOne";
import Heart from "../SVG/Heart";
import Cart from "../SVG/Cart";
import { useNavigation } from "@react-navigation/native";

export default function Screen2() {

  const navigation=useNavigation();
  
  const go_to_screen=(screen)=>navigation.navigate(screen);

  return (
    <View
      style={{
        position: "relative",
      }}
    >
      <View style={styles.header}>
        <Image
          source={require("../assets/images/leaves.png")}
          reiszeMode='cover'
        />
      </View>
      <View style={[styles.body, { paddingVertical: _sizes.size[1] }]}>
        <ScrollView
          style={{
            flex: 1,
          }}
        >
          <View style={styles.container}>
            <Text
              preset="h1"
              style={{
                color: _theme.deep_purple,
              }}
            >
              Boston Lettuce
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Text
                preset="h1"
                style={{
                  marginEnd: _sizes.size[0],
                  fontWeight: "700",
                  color: _theme.deep_purple,
                }}
              >
                1.10
              </Text>
              <Text
                preset="h2"
                style={{
                  fontWeight: "400",
                  color: _theme.light_purple,
                }}
              >
                € / piece
              </Text>
            </View>
            <Text style={{ fontWeight: "500", color: _theme.green }}>
              ~ 150 gr / piece
            </Text>
            <View
              style={{
                marginTop: _sizes.size[1],
              }}
            >
              <Text preset="h3" style={{ color: _theme.deep_purple }}>
                Spain
              </Text>
              <Text
                style={{
                  lineHeight: 25,
                  fontSize: 17,
                  color: _theme.light_purple,
                  marginTop: _sizes.size[0] / 2,
                }}
              >
                Lettuce is an annual plant of the daisy family, Asteraceae. It
                is most often grown as a leaf vegetable, but sometimes for its
                stem and seeds. Lettuce is most often used for salads, although
                it is also seen in other kinds of food, such as soups,
                sandwiches and wraps; it can also be grilled.
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: _sizes.size[0],
              }}
            >
              <BtnOne
                style={{
                  paddingVertical: _sizes.size[1] - 4,
                  paddingHorizontal: _sizes.size[1] + 4,
                  marginEnd: _sizes.size[0],
                  backgroundColor: _theme.white,
                  borderWidth: 1,
                  borderColor: "#D9D0E3",
                }}
                
                onPress={()=>go_to_screen('Screen1')}
              >
                <Heart />
              </BtnOne>
              <BtnOne
                style={{
                  flex: 1,
                  paddingVertical: _sizes.size[1] - 4,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={()=>go_to_screen('Screen3')}
              >
                <Cart
                  style={{
                    marginEnd: _sizes.size[0],
                  }}
                />
                <Text
                  style={{
                    fontSize: _sizes.size[0],
                    textTransform: "uppercase",
                    fontWeight: "600",
                    color: _theme.white,
                  }}
                >
                  add to cart
                </Text>
              </BtnOne>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: _sizes.container,
  },
  header: {
    height: _sizes.height * 0.45,
    width: _sizes.width,
    backgroundColor: _theme.purple,
    position: "absolute",
    top: 0,
    left: 0,
  },
  body: {
    height: _sizes.height * 0.65,
    width: _sizes.width,
    backgroundColor: _theme.light,
    position: "absolute",
    top: _sizes.height * 0.4,
    borderTopLeftRadius: _sizes.size[2],
    borderTopEndRadius: _sizes.size[2],
  },
});
