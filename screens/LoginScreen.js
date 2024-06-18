import {View,Text, TextInput, Image, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
        <Text style={{color:'#356899', fontSize:22, fontWeight:'600',marginBottom:10, marginTop:50}}>Jobizz</Text>
        <View style={{color:'#0D0D26'}}>
          <Text style={{fontWeight:'600', fontSize:24, marginBottom:10}}>Welcome Back 👋</Text>
          <Text style={{fontWeight:'400', fontSize:14, color:'#AFB0B6'}}>Let's log in. Apply to jobs!</Text>
        </View>
        <View style={{marginTop:40}}> 
          <TextInput placeholder='Name' style={styles.textinput} ></TextInput>
          <TextInput placeholder='Email' style={styles.textinput} inputMode='email'></TextInput>
          <TouchableOpacity style={{backgroundColor:'#356899',width:327, height:56,alignItems: 'center', marginTop:25,borderRadius:5, justifyContent: 'center' }}>
            <Text style={{color:'#fff'}}>Log in </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection:'row', marginTop: 30, width:327,marginBottom:20}}>
          <View style={{backgroundColor:'#AFB0B6',width:100,height:1,marginTop:10,marginRight:10}}>
          </View>
          <Text style={{color:'#AFB0B6'}}>Or continue with</Text>
          <View style={{backgroundColor:'#AFB0B6',width:100,height:1, marginTop:10,marginLeft:10 }}>
        </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:20, width: 300, marginLeft:10   }}>
          <View style={styles.logocontainer}>
          <Image source={require('../assets/apple-logo.png')}style={styles.logo}/>
          </View>
          <View style={styles.logocontainer}>
            <Image source={require('../assets/google.png')} style={styles.logo}/>
          </View>
          <View style={styles.logocontainer}>
          <Image source={require('../assets/facebook.png')} style={styles.logo} />
          </View>
        </View>
        
        <Text style={{color:'#AFB0B6',textAlign:'center', marginTop:30}}>Haven't an account? <Text style={{color:'#356899'}}>Register</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    fontFamily:'Poppins',
    flex:1,
    padding:30,
    marginTop:40
  },

  textinput:{
    borderWidth: 1,
    width: 327,
    height:52,
    marginBottom:15,
    borderRadius:10,
    borderColor:'rgba(0,0,0,0.5)',
    padding:10,
    opacity:.5

  },

  logo:{
    width:26,
    height:26,
   
  },

  logocontainer:{
    width:56,
    height:56,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:100
  }
})