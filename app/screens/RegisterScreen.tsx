import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [password, setPassword] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("");
    const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);


    const handleRegister = () => {
        alert("Cadastro realizado!");
        router.push("/login");
    };

    const tirarFoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== 'granted') {
            alert('Permissão da câmera necessária!');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            quality: 0.5,
            allowsEditing: true,
            aspect: [1, 1],
        });

        if (!result.canceled) {
            setFotoPerfil(result.assets[0].uri);
        }
    };

    return (
          <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Boas Vindas ao MindCare</Text>
                <Text style={styles.subtitle}>Preencha os Dados Abaixo</Text>

                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    {fotoPerfil ? (
                        <Image source={{ uri: fotoPerfil }} style={styles.foto} />
                    ) : (
                        <View style={styles.fotoPlaceholder}>
                            <Text style={{ color: '#555' }}>Sem foto</Text>
                        </View>
                    )}

                    {Platform.OS === "android" ? (
                        <Pressable
                            android_ripple={{ color: "#ccc" }}
                            style={styles.botaoFoto}
                            onPress={handleRegister}
                        >
                            <Text style={styles.botaoFotoTexto}>Cadastrar</Text>
                        </Pressable>
                    ) : (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.botaoFoto}
                            onPress={handleRegister}
                        >
                            <Text style={styles.botaoFotoTexto}>Cadastrar</Text>
                        </TouchableOpacity>
                    )}
                </View>
                
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu telefone"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu estado"
                    value={estado}
                    onChangeText={setEstado}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua cidade"
                    value={cidade}
                    onChangeText={setCidade}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <View style={styles.pickerWrapper}>
                    <Picker
                        selectedValue={tipoUsuario}
                        onValueChange={(v) => setTipoUsuario(v)}
                    >
                        <Picker.Item label="-- Selecione --" value="" />
                        <Picker.Item label="Psicólogo" value="psicologo" />
                        <Picker.Item label="Paciente" value="paciente" />
                    </Picker>
                </View>

                <Pressable style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#A8D5BA",
    },

    card: {
        width: "100%",
        backgroundColor: "#ECECEC",
        padding: 20,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: "#3E7C83",
        alignItems: "center",
        gap: 16,
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000",
    },

    subtitle: {
        fontSize: 16,
        marginBottom: 10,
        color: "#333",
    },

    input: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#aaa",
        backgroundColor: "white",
    },

    pickerWrapper: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#aaa",
        borderRadius: 8,
        backgroundColor: "white",
    },

    button: {
        width: "100%",
        padding: 12,
        backgroundColor: "#204e53",
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },

    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },

    link: {
        marginTop: 10,
        color: "blue",
        textDecorationLine: "underline",
    },
     foto: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    fotoPlaceholder: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    botaoFoto: {
        backgroundColor: '#204e53',
        padding: 10,
        borderRadius: 8,
    },
    botaoFotoTexto: {
        color: 'white',
        fontWeight: 'bold',
    },
});