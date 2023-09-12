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
            // height: 400,
            height: height*0.5,
            borderBottomLeftRadius: 450,
            borderBottomRightRadius: 450,
            width: 800,
            position: 'relative',
            // top: -250,
            top: -1*(height*0.3),
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
            height: height - (height * 0.215) - (height*0.200),
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
            backgroundColor: "#004aba",
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
            // marginBottom: 20,
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
                    <Text style={[styles.textBodyTitle,{marginBottom:20}]}>FUNDACIÓN PARA LA INVESTIGACIÓN YEDUCACIÓN MÉDICA Y TÉCNICA ENEMERGENCIAS Y DESASTRES</Text>
                    <Text style={styles.textBodyYellow}>Somos una fundación educativa y deinvestigación con espíritu deemprendimiento social, dirigidos allenar brechas dentro de los aspectosde salud pública de países demedianos y bajos ingresos,especialmente en el áreaLatinoamericana.</Text>
                    <Text style={styles.textBody}>Contacto:</Text>
                    <Text style={styles.textBody}>Calle 7a # 44-103 Nueva Tequendama. Cali –Colombia.</Text>
                    <Text style={styles.textBody} onPress={handleEmailLink} >direccion@meditechhubcol.org</Text>
                    <Text style={styles.textBody} onPress={handleWebsiteLink}>www.fundacionmeditech.com</Text>
                </View>
                <View style={styles.containerFooter}>
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