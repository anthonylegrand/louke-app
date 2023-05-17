import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import AuthPage from './pages/Auth'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'

export default function App() {
  const [page, setPage] = useState('Auth')

  const getCurrentPage = () =>{
    switch (page) {
      case "Login":
        return <Login setPage={setPage} login />

      case "Register":
        return <Login setPage={setPage} register />

      case "Dashboard":
        return <Dashboard setPage={setPage}/>
    
      default:
        return <AuthPage setPage={setPage}/>
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {
        getCurrentPage()
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
