import React from 'react';
import { View, Text, Button, Linking, Platform, StyleSheet, Image, Pressable, Dimensions, ScrollView } from 'react-native';

const PanicButtonScreen = ({navigation}) => {

    var width = Dimensions.get("window").width;
    var height = Dimensions.get("window").height;

    const makeEmergencyCall = () => {
        const phoneNumber = '911'; // Número de emergencia
        if (Platform.OS === 'android') {
        // Para Android, verifica los permisos de llamada telefónica
        Linking.openURL(`tel:${phoneNumber}`);
        } else if (Platform.OS === 'ios') {
        // Para iOS, no es necesario solicitar permisos previamente
        Linking.openURL(`tel://${phoneNumber}`);
        }
    };
    const styles = StyleSheet.create({
        sectionContainer: {
            borderEndStartRadius: 20,
            borderEndEndRadius: 20,
        },
        containerHeader:{
            display: 'flex',
            alignItems: 'center',
            height: height * 0.255,
            backgroundColor: "#004aba",
            // backgroundColor: "red"
        },
        
        header:{
            backgroundColor: "white",
            height: 400,
            borderBottomLeftRadius: 450,
            borderBottomRightRadius: 450,
            width: 800,
            position: 'relative',
            top: -250,
            zIndex:1,
            display: 'flex',
            justifyContent: "flex-end",
            alignItems: "center",
        },
        imageHeader:{
            width: width*0.55,
            // width: 195,
            // height: 80,
            height: width*0.22,
            marginBottom: 10
        },
        textHeader:{
            fontSize: width* 0.05,
            fontWeight: 'bold',
            color: "#004aba",
            marginBottom: 18
        },
        body: {
            // height: height - (height*0.4),
            height: height - (height * 0.255) - (height*0.21),
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
            backgroundColor: "#004aba",
        },
        textBody:{
            fontSize: width* 0.04,
            fontWeight: "bold",
            color: "white",
            marginBottom: 20,
            textAlign: 'center',
            width: width*0.5
        },
        btnLlamar:{
            width: width*0.5,
            height: width*0.5,
        },
        containerFooter:{
            display: 'flex',
            alignItems: 'center',
            height:100,
            backgroundColor: "#004aba",
            position: "relative",
        },
        footer:{
            backgroundColor: "#fff000",
            height: 400,
            width: 800,
            position: "relative",
            bottom: -10,
            borderTopLeftRadius: 450,
            borderTopRightRadius: 450,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-around",
            alignItems: "flex-start",

        },
        imgFooter:{
            width: 50,
            height: 50
        },
        footerContentBtns:{
            display: 'flex',
            width: width,
            flexDirection: 'row',
            height: 85,
            justifyContent: 'space-around',
            alignItems: "flex-end"
        },
    })

    return (
        <ScrollView >
            <View style={styles.sectionContainer}>
                <View style={styles.containerHeader}>
                    <View style={styles.header}>
                        <Image source={require("../assets/img/Logo_Meditech.png")} style={styles.imageHeader}></Image>
                        <Text style={styles.textHeader}>Bienvenido{height}</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.textBody}>Si te encuentras ante un caso de emergencia pulsa este botón!</Text>
                    <Pressable onPress={makeEmergencyCall}>
                        <Image source={require("../assets/img/boton_llamar.png")} style={styles.btnLlamar}></Image>
                    </Pressable>
                </View>
                <View style={styles.containerFooter}>
                    <View style={styles.footer}>
                        <View style={styles.footerContentBtns}>
                            <Pressable onPress={()=>console.log("aca")}>
                                <Image source={require("../assets/img/Telefono_activo.png")} style={styles.imgFooter}></Image>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('Info')}>
                                <Image source={require("../assets/img/Quienes_Somos_inactivo.png")} style={styles.imgFooter}></Image>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        
    );


  
}

export default PanicButtonScreen;