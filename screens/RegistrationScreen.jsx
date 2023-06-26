import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View, StyleSheet, Pressable } from "react-native";
import backgroundImage from "../assets/photoBg.jpg";
import { AntDesign } from "@expo/vector-icons";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationScreen = function () {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.image}
    >
      <StatusBar style="auto" backgroundColor="transparent" />
      <View style={styles.container}>
        <View style={styles.formThumb}>
          <View style={styles.photoThumb}>
            <View style={styles.icon}>
              <AntDesign name="pluscircleo" size={25} color="#ff6c00" />
            </View>
          </View>
          <Text style={styles.formTitle}>Реєстрація</Text>
          <RegistrationForm />
          <View style={styles.link}>
            <Text>Вже є аккаунт? </Text>
            <Pressable><Text>Увійти</Text></Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  image: {
    flex: 1,
  },

  text: {
    fontSize: 30,
    fontWeight: 700,
    color: "white",
  },

  formThumb: {
    position: "relative",
    height: 549,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  photoThumb: {
    position: "absolute",
    transform: [{ translateX: -60 }, { translateY: -60 }],
    left: "50%",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
  },

  icon: {
    position: "absolute",
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#ffffff",
  },

  formTitle: {
    marginTop: 92,
    marginBottom: 32,
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 1,
    color: "#212121",
    textAlign: "center",
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  }
});

export default RegistrationScreen;
