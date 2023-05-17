import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';

import cross from './../assets/icons/cross_black.png'
import favorits from './../assets/icons/Favorits.png'
import truck from './../assets/icons/truck.png'
import truck_close from './../assets/icons/truck_close.png'
import Logo from './../assets/Logo.png'

import { TrucksList } from '../utils/TrucksList';

import FoodTruck from './component/FoodTruck';

import { COLORS, STYLES } from './../utils/GlobalStyle'

const screen = Dimensions.get('window');

export default function Dashboard(props) {
    const [location, setLocation] = useState(null);
    const [selected, setSelected] = useState(null)

    useEffect(()=>{
        askLocation()
    }, [])

    const askLocation = async ()=>{
        let { status } = await Location.requestForegroundPermissionsAsync();
        if(status === 'granted') {
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        }else{
            askLocation()
        }
    }


  return (
    <View style={ styles.container }>
        <View style={ styles.header }>
            <TouchableOpacity style={styles.header_btn} onPress={()=>props.setPage('Auth')}>
                <Image source={cross} style={ styles.header_icon } />
            </TouchableOpacity>

            <Image style={{ width: 100, height: 32 }} source={Logo} />

            <TouchableOpacity style={styles.header_btn}>
                <Image source={favorits} style={ styles.header_icon } />
            </TouchableOpacity>
        </View>

        {
            selected !== null && <FoodTruck selected={selected}/>
        }
        
        <MapView
            onPress={()=>setSelected(null)}
            style={styles.map}
            showsUserLocation={true}
            initialRegion={{"latitude": 44.32452906790077, "latitudeDelta": 20.751943848032496, "longitude": -0.6833200715482235, "longitudeDelta": 18.3738549426198}}>

            {
                TrucksList.map((el, i) => 
                    <Marker
                        key={i}
                        coordinate={{ latitude : el.lat , longitude : el.lng }}
                        image={el.open ? truck : truck_close}
                        onPress={()=>setSelected(el)}
                    />
                )
            }
            
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    header: {
        height: screen.height*0.1,
        width: screen.width*0.8,
        marginTop: Constants.statusBarHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    map: {
        width: screen.width,
        height: screen.height*0.9,
        zIndex: 10
    },
    header_btn: {
        padding: 10,
        marginHorizontal: -10
    },
    header_icon: {
        height: 16,
        width: 16
    }
});
