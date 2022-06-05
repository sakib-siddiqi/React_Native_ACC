import { View, StyleSheet, Image, FlatList,ScrollView } from "react-native";
import React from "react";
import _sizes from "../constants/sizes";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../components/common/Text";
import { _theme } from "../constants/theme";
import MenuToggler from "../SVG/MenuToggler";
import Cart from "../SVG/Cart";
import { AntDesign } from "@expo/vector-icons";
import BtnTow from "../components/common/Buttons/BtnTow";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';




const prevent = [
  {
    id: 1,
    image: require("../assets/images/preventing_1.png"),
    title: "Avoid close contact",
  },
  {
    id: 2,
    image: require("../assets/images/preventing_2.png"),
    title: "Clean your hands often",
  },
  {
    id: 3,
    image: require("../assets/images/preventing_3.png"),
    title: "Wear a facemask",
  },
];

function PreventingCard({ data = {} }) {
  return (
    <View
      style={{
        marginHorizontal: _sizes.size[0] / 4,
        width: _sizes.container_width / 3,
      }}
    >
      <Image
        source={data.image}
        style={{
          width: "100%",
        }}
        resizeMode="contain"
      />

      <Text
        style={{
          textAlign: "center",
          color: _theme.deep_blue,
          fontWeight:'800'
        }}
      >
        {data.title}
      </Text>
    </View>
  );
}

export default function Screen3() {
  function _render_header() {
    return (
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: _sizes.container,
          }}
        >
          <MenuToggler />
          <Cart />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: _sizes.container,
          }}
        >
          <Text preset="h2" style={styles.white_test}>
            Covid 19
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: _sizes.size[0] / 2,
              backgroundColor: _theme.white,
              borderRadius: 100,
            }}
          >
            <Image
              source={require("../assets/images/us.png")}
              style={{
                height: _sizes.size[2],
                width: _sizes.size[2],
                borderRadius: _sizes.size[2] / 2,
              }}
              resizeMode="cover"
            />
            <View
              style={{
                paddingHorizontal: _sizes.size[0] / 2,
              }}
            >
              <Text style={{ fontWeight: "800", fontSize: 18 }}>USA</Text>
            </View>
            <AntDesign
              name="caretdown"
              size={_sizes.size[0] + 4}
              color={_theme.deep_blue}
            />
          </View>
        </View>
        <View>
          <Text preset="h3" style={styles.white_test}>
            Are you feeling sick?
          </Text>
          <Text
            style={{
              color: _theme.light,
              lineHeight: 22,
              marginTop: _sizes.size[0] / 2,
            }}
          >
            If you feel sick with any of covid-19 symptoms please call or SMS us
            immediately for help.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: _sizes.size[0],
          }}
        >
          <BtnTow style={styles.btn}>
            <Ionicons
              name="call"
              size={24}
              color={_theme.light}
              style={{ marginEnd: _sizes.size[0] / 2 }}
            />
            <Text style={styles.btn_font}>Call Now</Text>
          </BtnTow>
          <BtnTow style={[styles.btn,{backgroundColor:_theme.blue}]}>
            <Ionicons
              name="md-chatbubble"
              size={24}
              color={_theme.light}
              style={{ marginEnd: _sizes.size[0] / 2 }}
            />
            <Text style={styles.btn_font}>Send SMS</Text>
          </BtnTow>
        </View>
      </View>
    );
  }

  function _render_prevent_section() {
    return (
      <View
        style={{
          padding: _sizes.container,
        }}
      >
        <Text preset="h2">Prevents</Text>
        <FlatList
          data={prevent}
          renderItem={({ item }) => <PreventingCard data={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            flexDirection: "row",
          }}
          style={{
            marginTop: _sizes.size[0],
          }}
        />
      </View>
    );
  }

  function _render_call_to_action() {
    return (
      <View style={{
        margin:_sizes.container,
        marginTop:_sizes.container*3,
        position:'relative',
        overflow:'visible',
      }}>
        <LinearGradient
        colors={['#56549E', '#AEA1E6']}
        end={{
          x: -1, y: 0
        }}
        style={{
          borderRadius:_sizes.size[0],
          flexDirection:'row',
          justifyContent:'flex-end'
        }}
        >
          <Image source={require("../assets/images/girl.png")}
          style={{
            width:_sizes.container_width*0.45,
            height:_sizes.container_width*0.4,
            position:'absolute',
            bottom:0,
            left:0
          }}
            resizeMode='contain'
          />
        <View style={{
          width:_sizes.container_width*0.6,
          padding:_sizes.size[0],
        }}>
          <Text style={{color:_theme.light,marginBottom:_sizes.size[0]}} preset="h3">Do your own test!</Text>
          <Text style={{color:_theme.light}}>Follow the instructions to do your own test.</Text>
        </View>
        </LinearGradient>
        
      </View>
    );
  }

  return (
    <ScrollView style={{flex:1}}>
      {_render_header()}
      {_render_prevent_section()}
      {_render_call_to_action()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: _sizes.container,
    backgroundColor: _theme.deep_blue,
    borderBottomEndRadius: _sizes.size[2],
    borderBottomLeftRadius: _sizes.size[2],
    paddingVertical: _sizes.size[1],
  },
  white_test: {
    color: _theme.white,
  },
  btn_font: {
    fontFamily: "display",
    fontSize: _sizes.size[0] + 4,
    fontWeight: "700",
    color: _theme.light,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
