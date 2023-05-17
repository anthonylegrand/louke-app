import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import LoginHeader from './../assets/LoginHeader.png'

import Google_icon from './../assets/icons/Google.png'
import Facebook_icon from './../assets/icons/Facebook.png'
import Apple_icon from './../assets/icons/Apple.png'

import cross from './../assets/icons/cross.png'

import { COLORS, STYLES } from './../utils/GlobalStyle'

const screen = Dimensions.get('window');

export default function Login(props) {
  const PREFIX = props.login ? "Connexion" : "Inscription"

  return (
    <View style={styles.container}>
        <StatusBar style="light" />

        <View style={{ alignItems: 'center' }}>
            <Image source={LoginHeader} style={{ width: screen.width, height: (screen.width*780)/708 }} />

            <TouchableOpacity style={styles.cross_back} onPress={()=>props.setPage('Auth')}>
                <Image source={cross} style={{ height: 16, width: 16 }} />
            </TouchableOpacity>

            <View style={{ width: screen.width*0.85, margin: -50 }}>
                <Text style={ [STYLES.page_title, styles.page_title] }>{PREFIX}</Text>
                <Text style={ STYLES.secondary_text }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
            </View>
        </View>

        <View>
            <TouchableOpacity style={[ STYLES.button, styles.button, { backgroundColor: "#F39C12" } ]} activeOpacity={.6}>
                <Image style={ styles.icon } source={Google_icon} />
                <Text style={[STYLES.buttonText, styles.buttonText]}>{PREFIX} avec Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[ STYLES.button, styles.button, { backgroundColor: "#2980B9" } ]} activeOpacity={.6}>
                <Image style={ styles.icon } source={Facebook_icon} />
                <Text style={[STYLES.buttonText, styles.buttonText]}>{PREFIX} avec Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[ STYLES.button, styles.button, { backgroundColor: "#000000" } ]} activeOpacity={.6}>
                <Image style={ styles.icon } source={Apple_icon} />
                <Text style={[STYLES.buttonText, styles.buttonText]}>{PREFIX} avec Apple</Text>
            </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#7D8FAB', fontSize: 16 }}>{ props.login ? "Tu n’as pas de compte?" : "Tu as déjà un compte?" }</Text>
            <TouchableOpacity onPress={()=>props.setPage( props.login ?  'Register' : "Login")}>
                <Text style={ styles.footerText }>{props.login ? "Inscrit toi" : "Connect toi"}</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: screen.width*0.85
  },
  cross_back: {
    position: 'absolute',
    padding: 10,
    top: 70,
    left: 30,
  },
  page_title: {
    fontSize: 27,
    marginBottom: 15
  },
  button: {
    width: screen.width*0.85
  },
  buttonText: {
    color: '#FFF',
    width: screen.width*0.55,
    marginLeft: 6
  },
  icon: {
    height: 25,
    width: 25
  },
  footerText: {
    color: COLORS['main-color'], 
    fontSize: 16, 
    marginLeft: 5, 
    fontWeight: 'bold', 
    textDecorationLine: 'underline'
  }
});
