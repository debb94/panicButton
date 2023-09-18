import React from 'react';
import { View, Text, Button, Linking, Platform, StyleSheet, Image, Pressable, Dimensions, ScrollView } from 'react-native';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const PanicButtonScreen = ({navigation}) => {

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
        boldContainer:{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#004aba',
            height: height
        },
        headerContainer:{
            flex:1,
            display: 'flex',
            alignItems: 'center'
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
            height: width*0.22,
            marginBottom: 10
        },
        textHeader:{
            fontSize: width* 0.05,
            fontWeight: 'bold',
            color: "#004aba",
            marginBottom: 18
        },
        bodyContainer:{
            flex:3,
            backgroundColor: '#004aba',
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center'
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
        footerContainer:{
            flex:1,
            display: 'flex',
            alignItems:'center'
        },

        footerContentBtns:{
            display: 'flex',
            marginTop: "4.5%",
            width: width,
            flexDirection: 'row',
            height: "100%",
            justifyContent: 'space-around',
            alignItems: "flex-start"
        },
        footer:{
            backgroundColor: "#fff000",
            height: 400,
            width: 800,
            position: "relative",
            bottom: -30,
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
    })

    return (
        <ScrollView >
            <View style={styles.boldContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <Image source={require("../assets/img/Logo_Meditech.png")} style={styles.imageHeader}></Image>
                        <Text style={styles.textHeader}>Bienvenido</Text>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.textBody}>Si te encuentras ante un caso de emergencia pulsa este botón!</Text>
                    <Pressable onPress={makeEmergencyCall}>
                        <Image source={require("../assets/img/boton_llamar.png")} style={styles.btnLlamar}></Image>
                    </Pressable>
                </View>
                <View style={styles.footerContainer}>
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