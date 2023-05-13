import { StyleSheet,  View } from 'react-native'
import React,{ useState,useEffect} from 'react'
import { TextInput, 
  Button,
  Text,
  useTheme,
   Avatar, 
   Appbar,
  Card,
  SegmentedButtons} from 'react-native-paper';

const Loginphone = () => {
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');
  
  return (
    <View style ={ styles.container}> 
    
    <View style = {styles.textcotainer}>
       <View style = {styles.text1cotainer}>
       <Text  style={{color:"white",fontFamily: "Sans-serif"}} variant="displayLarge">LALAWLALK</Text>
      
        </View> 
        <View style = {styles.text2cotainer}>
        <Text style={{color:"white"}} variant="displayMedium">ปรึกษากฎหมาย</Text>
        </View>
       
     
  <Card style={styles.container2}>
    <Card.Actions style={styles.top1} >
      <Button buttonColor="white" textColor='black' >Email</Button>
      <Button buttonColor="white" textColor='black' onPress={() => console.log('Pressed')}>Phone Number</Button>
    </Card.Actions>
  
      
       
  <Text variant="titleSmall" style={{color:"black",padding:20,fontWeight:"bold"}}>Login With Phone Number</Text>

    <View style ={styles.inputcontainer}>
      <TextInput style ={styles.input}
      outlineColor="black"
      backgroundColor="white"
    
      label="Username"
      value={username}
      onChangeText={text => setUsername(text)}
      />
     
      </View> 
      <Text variant="labelSmall" style={{color:"blue",textAlign:"right"}}>Forgot Password ?</Text>

      <View style ={styles.buttoncontainer}>
      <Button buttonColor="#3e2723" 	 mode="contained" onPress={() => console.log('Pressed')}>
       Login
      </Button>
      </View>
     <Text variant="bodySmall" style={{color:"black",textAlign:"center"}}>Or Sign up With</Text>
     
     <Card.Actions style={styles.top1}>
        <Avatar.Image size={40}  source={require('../img/R.png')} onPress={_handleSearch} backgroundColor="white"
        color="white"   />
        <Avatar.Image size={40}  source={require('../img/imgbin-google-pay-send-computer-icons-google-logo-g-suite-new-entry-QbvHZFS4EX9dVGJ0vVqgmBLAV.jpg')} onPress={_handleSearch}  style={{color:"black",textAlign:"center"}}/>
        <Avatar.Image size={40}  source={require('../img/Apple-Icon_1.png')} onPress={_handleMore}  style={{color:"white",textAlign:"center"}} /> 
        </Card.Actions >
     
     <Text variant="bodySmall" style={{color:"black",textAlign:"center"}}>Don't have account?
         <Text style={{fontWeight:"bold"}}>Create Account</Text></Text>

     <Text variant="bodySmall" style={{color:"black",textAlign:"center"}}>ลงทะเบียนผู้ให้คำปรึกษาทางกฎหมาย</Text>
     
     </Card>
    
    </View>

    
   </View>
  )
}
export default Loginphone

const styles = StyleSheet.create({container:{
  flex:1,
  width:'100%',
  maxWidth:400,
  alignSelf: "center",
  justifyContent:"center",
  backgroundColor:'#3e2723',
  textColor:"white"
  
},
textcotainer:{
  padding:10,
  color:"pink"

},
text1cotainer:{
  alignSelf: "center",
  justifyContent:"center",
  color:"white"
  

},
text2cotainer:{
  alignSelf: "center",
  justifyContent:"center",
  color:"white"
},
inputcontainer:{
  paddingBottom:20,
  outlineColor:"black",
 
  

},
buttoncontainer:{
  paddingBottom:15,
  

},
bottom2container:{
  alignSelf: "center",
  justifyContent:"center",
  
  color:"white"
  

},
top: {
  
  backgroundColor: 'white',
  borderWidth: 0.1,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  width:'20%',
  flex:1
},

top1: {
  
  alignSelf: "center",
  justifyContent:"center"

},
input:{
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5

},
container1:{
  flex: 1,
   alignItems: 'center'
},
container2:{
  width:'100%',
  maxWidth:340,
  alignSelf: "center",
  justifyContent:"center",
  maxHeight:500,
  padding:6,
  margin: 40,
  backgroundColor:'#a1887f'
  

}


})
