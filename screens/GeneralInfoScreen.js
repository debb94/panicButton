import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, Image, Pressable, Linking } from 'react-native';

const GeneralInfoScreen = ({navigation}) => {
    var width = Dimensions.get("window").width;
    var height = Dimensions.get("window").height;

    const handleWebsiteLink = () => {
        const websiteURL = 'https://www.fundacionmeditech.com'; // Reemplaza con la URL de tu sitio web
        Linking.openURL(websiteURL);
      };
    
      const handleEmailLink = () => {
        const emailAddress = 'direccion@meditechhubcol.org'; // Reemplaza con tu dirección de correo electrónico
        Linking.openURL(`mailto:${emailAddress}`);
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
        textBodyTitle:{
            fontSize: width* 0.04,
            fontWeight: "bold",
            color: "white",
            textAlign: 'center',
            width: width*0.9
        },
        textBody:{
            fontSize: width* 0.035,
            fontWeight: "bold",
            color: "white",
            textAlign: 'center',
            width: width*0.95
        },
        textBodyYellow:{
            fontSize: width* 0.04,
            fontWeight: "medium",
            color: "#fff000",
            marginBottom: 20,
            textAlign: 'center',
            width: width*0.9
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
                    <View style={styles.body}>
                        <Text style={[styles.textBodyTitle,{marginBottom:20}]}>FUNDACIÓN PARA LA INVESTIGACIÓN YEDUCACIÓN MÉDICA Y TÉCNICA ENEMERGENCIAS Y DESASTRES</Text>
                        <Text style={styles.textBodyYellow}>Somos una fundación educativa y deinvestigación con espíritu deemprendimiento social, dirigidos allenar brechas dentro de los aspectosde salud pública de países demedianos y bajos ingresos,especialmente en el áreaLatinoamericana.</Text>
                        <Text style={styles.textBody}>Contacto:</Text>
                        <Text style={styles.textBody}>Calle 7a # 44-103 Nueva Tequendama. Cali –Colombia.</Text>
                        <Text style={styles.textBody} onPress={handleEmailLink} >direccion@meditechhubcol.org</Text>
                        <Text style={styles.textBody} onPress={handleWebsiteLink}>www.fundacionmeditech.com</Text>
                    </View>
                </View>
                <View style={styles.footerContainer}>
                    <View style={styles.footer}>
                        <View style={styles.footerContentBtns}>
                            <Pressable onPress={()=>navigation.navigate('Home')}>
                                <Image source={require("../assets/img/Telefono_inactivo.png")} style={styles.imgFooter}></Image>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('Info')}>
                                <Image source={require("../assets/img/Quienes_Somos_activo.png")} style={styles.imgFooter}></Image>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>  
    );
}

export default GeneralInfoScreen;