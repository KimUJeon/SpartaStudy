import React from 'react';
import main from './assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

export default function App() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석 처리
  return (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>나만의 꿀팁</Text>
    <Image style={styles.mainImage} source={main}/>
    <ScrollView style={styles.middleContainer} horizontal={true}>
      <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
      <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
      <TouchableOpacity style={styles.middleButton03}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
      <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
    </ScrollView>
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{uri:"[https://storage.googleapis.com/sparta-image.appspot.com/lecture/pizza.png](https://storage.googleapis.com/sparta-image.appspot.com/lecture/pizza.png)"}}/>
        <Text style={styles.cardText}>
          <Text style={styles.cardTtitle}>먹남 피촉!</Text>
          <Text style={styles.cardDesc} numberOfLines={3}>먹남피수날!!!!!먹남피수날!!!!!
          먹남피수날!!!!!먹남피수날!!!!!먹남피수날!!!!!먹남피수날!!!!!
          먹남피수날!!!!!먹남피수날!!!!!먹남피수날!!!!!먹남피수날!!!!!
          먹남피수날!!!!!먹남피수날!!!!!먹남피수날!!!!!먹남피수날!!!!!</Text>
          <Text style={styles.cardDate}>1111.1111.111</Text>
        </Text>
      </View>
    </View>
  </ScrollView>)
  
  }
  
  const styles = StyleSheet.create({
    container:{
      // backgroundColor:"#fff"
    },
    title:{
      fontSize:20,
      fontWeight:"700",
      marginTop:50,
      marginLeft:20
    },
    mainImage:{
      width: "90%",
      height: 200,
      borderRadius: 10,
      marginTop: 20,
      alignSelf:"center",
    },
    middleContainer:{
      marginTop: 20,
      marginLeft: 10,
      height: 60,
    },
    middleButton01: {
      width: 100,
      height: 50,
      padding: 15,
      backgroundColor:"#fdc453",
      borderRadius: 15,
      margin: 7
    },
    middleButton02: {
      width: 100,
      height: 50,
      padding: 15,
      backgroundColor:"#9adbc5",
      borderRadius: 15,
      margin: 7
    },
    middleButton03: {
      width: 100,
      height: 50,
      padding: 15,
      backgroundColor:"#f886a8",
      borderRadius: 15,
      margin: 7
    },
    middleButton04: {
      width: 100,
      height: 50,
      padding: 15,
      backgroundColor:"#fdc113",
      borderRadius: 15,
      margin: 7
    },
    middleButtonText: {
      color:"black",
      fontWeight:"700",
      textAlign:"center"
    },
    cardContainer: {
      borderWidth: 1,
      marginTop: 10,
      marginLeft: 10
    },
    card:{
      felx: 1,
      flexDirection: "row",
      margin: 10,
    },
    cardImage: {
      flex: 1,
      width: 100,
      height: 100,
      borderRadius: 10
    },
    cardText: {
      flex:2,
      flexDirection:"column",
      marginLeft: 10
    },
    cardTitle: {
      fontSize: 20,
      fontWeight:"700"
    },
    cardDesc: {
      fontSize: 15
    },
    cardDate: {
      fontSzie: 10
    }
  })