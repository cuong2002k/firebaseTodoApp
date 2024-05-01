import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React from 'react'
import { auth } from "../Database/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const HandlerRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => alert("Dang ki thanh cong"))
            .catch((e) => alert(e))
    }

    return (
        <View style={styles.container}>
            <Text>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
            ></TextInput>
            <Text>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true}
            ></TextInput>
            <Button title="Sign Up!" onPress={() => HandlerRegister()} />
        </View>
    );
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
});