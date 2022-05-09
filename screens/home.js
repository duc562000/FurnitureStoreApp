import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import icons from '../constants/icons';
import MaterialTopTab from "./MaterialTopTab/materialTopTab"
import images from "../constants/images"
import { COLORS } from '../constants/theme';



const Home = () => {
  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <SafeAreaView style={{flex:0.2,backgroundColor:'#fff'}}>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingHorizontal:10,
          paddingTop:10
          }}>
          <TouchableOpacity>
            <Image
            source={icons.menu}
            style={{
              width:25,
              height:25
            }}
            resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
            source={icons.cart}
            style={{
              width:25,
              height:25
            }}
            resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={{flex:3.5}}>
        <MaterialTopTab/>
        <View style ={{flex:0.2}}>
          <View style={[styles.btnAddCart,{flexDirection:'row'}]}>
            <View style={{
              backgroundColor:COLORS.transparentLightGray,
              width:40,
              height:80,
              alignItems:'center',
              justifyContent:'center',
              borderRadius:15
            }}>
              <Image
                source={images.sofa}
                style={styles.img}
              />
            </View>
            <View style={{paddingRight:100,paddingLeft:20}}>
              <Text style={styles.txtTitle}>Special offer</Text>
              <Text style={styles.txt}>Adding to cart</Text>
            </View>
            <TouchableOpacity style={styles.btnRight}>
              <AntDesign name="right" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img:{
    width:20,
    height:45
  },
  btnAddCart:{
    height:100,
    alignItems:'center',
    backgroundColor:COLORS.white,
    marginHorizontal:20,
    borderRadius:15,
    justifyContent:'center',              
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  btnRight:{
    width:42,
    height:60,
    backgroundColor:COLORS.primary,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  txtTitle:{
    fontSize:20,
    fontWeight:'600',
    paddingVertical:5
  },
  txt:{
    fontSize:18,
    fontWeight:'300',
  }
});

export default Home