import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function HomeScreen() {
    const usuarioFalso = { tipo: "paciente" };

    const navegacao =
        usuarioFalso.tipo === "paciente"
            ? [
                  { nome: "Agendar Consulta" },
                  { nome: "Progresso Terapêutico" },
                  { nome: "Documentos" },
                  { nome: "Conversa com Terapeuta" },
              ]
            : [
                  { nome: "Agenda de Horários" },
                  { nome: "Anotações" },
                  { nome: "Documentos" },
                  { nome: "Conversa com Paciente" },
              ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>MindCare - Um Espaço Acolhedor</Text>

                <TouchableOpacity style={styles.buttonSair}>
                    <Text style={styles.buttonSairText}>x</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <View style={styles.sideMenu}>
                    {navegacao.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.navItem}>
                            <Text style={styles.navItemText}>{item.nome}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.contentContainer}>
                    <ScrollView>
                        <Text style={styles.navItemText}>
                            Conteúdo da página selecionada aparece aqui.
                        </Text>
                    </ScrollView>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Todos os direitos reservados</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    header: {
        backgroundColor: "#204e53",
        width: "100%",
        paddingVertical: 6,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    headerTitle: {
        color: "#fff",
        fontSize: 18,
        margin: 0,
        padding: 0,
    },
    main: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "justify",
    },
    buttonSair: {
        position: "absolute",
        right: 5,
        top: 0,
        padding: 0,
        backgroundColor: "transparent",
    },
    buttonSairText: {
        fontSize: 28,
        color: "white",
        paddingRight: 6,
    },
    sideMenu: {
        width: "100%",
        backgroundColor: "#204e53",
        paddingVertical: 10,
    },
    navItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#d2d5a8",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
    },
    navItemText: {
        color: "black",
        fontSize: 16,
    },
    contentContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    section: {
        backgroundColor: "#d2d5a8",
        padding: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        width: "100%",
    },
    footer: {
        backgroundColor: "#204e53",
        width: "100%",
        paddingVertical: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    footerText: {
        color: "white",
        fontSize: 14,
    },
});