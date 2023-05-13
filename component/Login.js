import { StyleSheet, View, SafeAreaView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import {
  TextInput,
  Text,
  useTheme,
  Avatar,
  Appbar,
  Card,
  SegmentedButtons
} from 'react-native-paper';
import { Button, Tab } from '@rneui/themed';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>

        <Image source={require('../img/LALAWTALK_112.png')} style={{ width: 350, height: 180 }} ></Image>
      </View>
      <Text style={{ color: "black", textAlign: "right", maxWidth: 370, padding: 5 }} variant="labelSmall">ปรึกษากฎหมายและจ้างทนายความ</Text>


      <View style={styles.container2}>


        

        <View style={styles.container3}>
          <Text variant="titleSmall" style={{ color: "black", padding: 14, fontWeight: "bold" }}>เข้าสู่ระบบด้วยอีเมล</Text>

          <View style={styles.inputcontainer}>
            <TextInput style={styles.input}
              underlineColor="#FBD653"
              outlineColor="#FBD653"
              backgroundColor="white"

              label="อีเมล"
              value={username}
              onChangeText={text => setUsername(text)}
            />
            <TextInput style={styles.input}
              backgroundColor="white"
              underlineColor="#FBD653"
              outlineColor="#FBD653"
              label="รหัสผ่าน"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry

            />
          </View>
          <Text variant="labelSmall" style={{ color: "red", textAlign: "right", padding: 8 }}>ลืมรหัสผ่าน ?</Text>

          <View style={styles.buttoncontainer}>
            <Button color="#FBD653" title="เข้าสู่ระบบ" onPress={() => console.log('Pressed') } titleStyle={{ marginHorizontal: 10, color: 'black' }}>
            </Button>
          </View>

          <Text variant="bodySmall" style={{ color: "black", textAlign: "center", padding: 2 }}>คุณยังไม่มีบัญชี?
            <Text style={{ fontWeight: "bold" }}>ลงทะเบียน</Text></Text>

          <Text variant="bodySmall" style={{ color: "black", textAlign: "center", padding: 10 }}>หรือ</Text>

          <View style={styles.top1}>
            <Avatar.Image size={20} source={require('../img/R.png')} onPress={_handleSearch} backgroundColor="white"
              color="white" />
            <Avatar.Image size={20} source={require('../img/imgbin-google-pay-send-computer-icons-google-logo-g-suite-new-entry-QbvHZFS4EX9dVGJ0vVqgmBLAV.jpg')} onPress={_handleSearch} style={{ color: "black", textAlign: "center" }} />
            <Avatar.Image size={20} source={require('../img/Apple-Icon_1.png')} onPress={_handleMore} style={{ color: "white", textAlign: "center" }} />
            </View>

          

          <Text variant="bodySmall" style={{ color: "black", textAlign: "center", padding: 2 }}>ลงทะเบียน  ผู้ให้คำปรึกษาทางกฎหมาย</Text>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: '#FFFF',


  },
  imagecontainer: {
    alignSelf: "center",
    justifyContent: "center"



  },
  top1: {
    alignSelf: "center",
    justifyContent: "center",
    padding: 5,
    flexDirection: 'row',
    marginBottom:1,
    justifyContent:"space-between",
    
  },
  inputcontainer: {
    padding: 10
  },
  container2: {

    width: '100%',
    maxWidth: 400,
    maxHeight: 450,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: '#FBD653',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    margin: 10,
    padding:12


  },
  container3: {

    width: '100%',
    maxWidth: 380,
    maxHeight: 900,

    alignSelf: "center",
    
    backgroundColor: '#FFFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    margin: 20


  },
  buttoncontainer: {
    alignSelf: "center",
    justifyContent: "center",
    width: '80%',
    
  },
  top: {
    alignSelf: "center",
    justifyContent: "center",
    padding: 10,
    
  },

})