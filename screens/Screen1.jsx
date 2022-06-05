import React from "react";
import Text from "../components/common/Text";
import Layout from "../components/common/Layout";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import _sizes from "../constants/sizes";
import { _theme } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import BlockLogo from "../SVG/BlockLogo";
import BtnOne from "../components/common/Buttons/BtnOne";
import { useNavigation } from "@react-navigation/native";

export default function Screen1() {
  const navigation=useNavigation();

  const go_to_screen=(screen)=>navigation.navigate(screen);

  return (
    <View style={{ position: "relative" }}>
      <View style={[styles.header]}>
        <SafeAreaView>
          <View style={[styles.container]}>
            <View style={styles.logo}>
              <Image
                source={require("../assets/images/LOGO.png")}
                style={{
                  height: 35,
                  width: 35,
                  resizeMode: "contain",
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
      <SafeAreaView style={styles.body}>
        <ScrollView style={[styles.container]}>
          <View
            style={{
              padding: _sizes.container,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.largeLogo}>
              <BlockLogo />
            </View>
            <View style={{ marginVertical: _sizes.size[1] }}>
              <Text
                preset="h1"
                style={[styles.centeredText, { color: _theme.deep_purple }]}
              >
                Non-Contact Deliveries
              </Text>
            </View>
            <View>
              <Text
                preset="text"
                style={[
                  styles.centeredText,
                  {
                    fontSize: 17,
                    lineHeight: _sizes.size[1],
                    color: _theme.light_purple,
                  },
                ]}
              >
                When placing an order, select the option “Contactless delivery”
                and the courier will leave your order at the door.
              </Text>
            </View>
            <View style={{marginTop:20}}>
              <BtnOne style={{width:_sizes.container_width}} onPress={()=>go_to_screen('Screen2')}>
                <Text style={{color:_theme.white}}>ORDER NOW</Text>
              </BtnOne>
              <BtnOne style={{width:_sizes.container_width,backgroundColor:'transparent'}} onPress={()=>go_to_screen('Screen3')}>
                <Text style={{fontWeight:'600',color:_theme.light_purple}}>DISMISS</Text>
              </BtnOne>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  logo: {
    height: 70,
    width: 70,
    borderRadius: 35,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: _theme.light,
    marginTop: 24,
  },
  largeLogo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: _theme.white,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredText: {
    textAlign: "center",
  },
});
