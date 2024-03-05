import React, { useContext, useEffect, useState } from 'react';
import { View, Text,Linking, Platform, StyleSheet, Image, Pressable, Dimensions, ScrollView, SafeAreaView, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { LoaderContext } from '../src/context/LoaderContext';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const PanicButtonScreen = ({navigation}) => {
    const [location, setLocation] = useState(null);
    const {loader, innerSetLoader} = useContext(LoaderContext);
    const [phoneNumber, setPhoneNumber] = useState('3212360103');

    useEffect(()=>{
        getLocations();
    },[])


    const getCityFromLocation = async (latitude, longitude) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&zoom=5&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            const { city, country, state } = data.address;
            innerSetLoader(false);
            return { city, country, state };
        } catch (error) {
            innerSetLoader(false);
            console.error('Error getting city from location:', error);
            return null;
        }
    };


    const getLocations = ()=>{
        innerSetLoader(true);
        Geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const locationData = await getCityFromLocation(latitude, longitude);
            if (locationData) {
                const { city, country, state } = locationData;
                console.log("location Data",locationData, state);
                switch (`${state}, ${country}`) {
                    case 'Huila, Colombia':
                        setPhoneNumber('000000000');
                    break;
                    case 'Antioquia, Colombia':
                        setPhoneNumber('111111111');
                    break;
                    case 'Magdalena, Colombia':
                        setPhoneNumber('3158211394');
                    break;
                    default:
                        Alert.alert('No se encontró un número para esta ubicación');
                    break;
                }
            } else {
                Alert.alert('No se pudo obtener la ubicación');
            }
        },
        (error) => {
            // See error code charts below.
            console.log("error", error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 })
    }

    const makeEmergencyCall = () => {
        if (Platform.OS === 'android') {
            // Para Android, verifica los permisos de llamada telefónica
            Linking.openURL(`tel:${phoneNumber}`);
        } else if (Platform.OS === 'ios') {
            // Para iOS, no es necesario solicitar permisos previamente
            Linking.openURL(`tel://${phoneNumber}`);
        }
        const startTime = new Date();
        fetch("https://webtronick.com/", {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.text())
        .then(result => {
            console.log(result)
            let endTime = new Date();
            let responseTime = endTime - startTime;
            console.log("respuesta en "+ responseTime+ "ms");
        })
        .catch(error => console.log('error', error));
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
        <SafeAreaView>
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
        </SafeAreaView>
        
    );


  
}

export default PanicButtonScreen;