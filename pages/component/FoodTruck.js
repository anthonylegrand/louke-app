import { Dimensions, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import { COLORS, STYLES } from './../../utils/GlobalStyle'

import foodtruckPicture from './../../assets/temp/foodtruck-picture.png'

const screen = Dimensions.get('window');

export default function FoodTruck(props) {
    const DATA = props.selected.data

  return (
    <View style={ styles.container }>
        <View style={[ styles.body, STYLES.shadow ]}>

            <Image style={ styles.body_picture } source={foodtruckPicture} />

            <View style={{ width: '50%' }}>
                <Text style={[ STYLES.main_text, {fontSize: 16} ]}>{DATA.name}</Text>
                <Text style={[ STYLES.secondary_text, {fontSize: 13} ]}>{DATA.adresse}</Text>
                <Text style={[ STYLES.secondary_text, {fontSize: 13} ]}>{DATA.open}</Text>
                <View style={ styles.tags }>
                    <View style={[ styles.tag, { backgroundColor: COLORS['main-color'], marginRight: 10 } ]}>
                        <Text style={[ styles.tagText, { color: "#fff" } ]}>{DATA.stars}</Text>
                    </View>

                    <View style={ styles.tag }>
                        <Text style={ styles.tagText }>100 m</Text>
                    </View>
                </View>
            </View>

        </View>
        <View style={[ styles.footer, STYLES.shadow ]}>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        width: screen.width*0.9,
        bottom: 20,
        left: screen.width*0.05,
        zIndex: 99
    },
    body: {
        backgroundColor: "#fff",
        width: '100%',
        height: screen.height*0.2,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    body_picture: {
        height: screen.height*0.13,
        width: screen.width*0.25,
    },
    tags: {
        flexDirection: 'row',
        marginTop: 5
    },
    tag: {
        borderColor: COLORS['main-color'],
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 5
    },
    tagText: {
        color: COLORS['main-color'],
        fontWeight: 'bold'
    },
    footer: {
        backgroundColor: "#fff",
        width: '60%',
        height: screen.height*0.05,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15
    }
});
