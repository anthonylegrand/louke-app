import { Dimensions, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import Logo from './../assets/Logo.png'
import Truck from './../assets/Truck_shape.png'

import { COLORS, STYLES } from './../utils/GlobalStyle'

const screen = Dimensions.get('window');

export default function Auth(props) {
  return (
    <View style={styles.container}>
      <View></View>

      <View style={ styles.header }>
        <Image style={[ STYLES.logo, { marginBottom: 15 } ]} source={Logo} />
        <Text style={STYLES.page_title}>Les meilleur Pankacks de ta ville</Text>
      </View>
      
      <Image style={{ height: screen.width*0.8, width: screen.width }} source={Truck} />

      <View>
        <TouchableOpacity
          style={[ STYLES.button, styles.button ]} 
          activeOpacity={.8}
          onPress={()=>props.setPage("Dashboard")}>
            
          <Text style={STYLES. buttonText}>Commencer</Text>

        </TouchableOpacity>

        <TouchableOpacity 
          style={[STYLES.button, styles.button, { backgroundColor: COLORS['main-color'] }]}
          activeOpacity={.8}
          onPress={()=>props.setPage("Login")}>

          <Text style={[STYLES.buttonText, { color: COLORS['background-color'] }]}>Connexion</Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  header: {
    alignItems: 'center'
  },
  button: {
    width: screen.width*0.85
  }
});
