import { router } from 'expo-router';
import React, { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        if (email === 'teste@teste.com' && password === '123') {
            router.replace("/home"); 
        } else {
            alert('Login inválido');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Boas Vindas ao MindCare</Text>
                <Text style={styles.subtitle}>Realize seu Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                {Platform.OS === "android" ? (
                    <Pressable
                        android_ripple={{ color: "#ccc" }}
                        style={styles.button}
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                ): (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.button}
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                )}

                <Text style={styles.linkText}>
                    Não tem conta?{" "}
                    <Text
                        style={styles.link}
                        onPress={() => router.push("/register")}
                    >
                        Fazer Cadastro
                    </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: "100%",
        minWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#A8D5BA",
        padding: 20,
    },

    form: {
        backgroundColor: "#ECECEC",
        borderWidth: 5,
        borderColor: "#3E7C83",
        padding: 20,
        borderRadius: 12,
        width: "90%",
        maxWidth: 400,
        alignItems: "center",
        gap: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 5,
        textAlign: "center",
    },

    subtitle: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: "center",
    },

    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#999",
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#FFF",
    },

    button: {
        width: "100%",
        backgroundColor: "#3E7C83",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    },

    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },

    linkText: {
        marginTop: 10,
        fontSize: 14,
        textAlign: "center",
    },

    link: {
        color: "#007bff",
        fontWeight: "600",
    },
});