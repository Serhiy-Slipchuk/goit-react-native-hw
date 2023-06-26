import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const RegistrationForm = function () {
  return (
    <View style={styles.form}>
      <View style={styles.inputsThumb}>
        <TextInput
          style={styles.input}
          name="login"
          textContentType="nickname"
          placeholder="Логін"
          placeholderTextColor="#BDBDBD"
        />
        <TextInput
          style={styles.input}
          name="email"
          textContentType="emailAddress"
          placeholder="Адреса електронної пошти"
          placeholderTextColor="#BDBDBD"
        />
        <TextInput
          style={styles.input}
          name="password"
          textContentType="password"
          placeholder="Пароль"
          placeholderTextColor="#BDBDBD"
        />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  inputsThumb: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    marginBottom: 43,
  },
  
  input: {
    height: 50,
    width: 343,
    padding: 15,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
  },
  button: {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    width: 353,
    height: 51,
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#ff6c00",
  },

  buttonText: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: "#ffffff"
  }
});

export default RegistrationForm;
