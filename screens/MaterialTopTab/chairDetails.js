import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text,SafeAreaView,Image,TouchableOpacity,ImageBackground,StyleSheet} from "react-native";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { COLORS } from "../../constants/theme";


const ChairDetails = (props) => {
  const item = props.route.params.item
  const selectedTab = props.route.params.selectedTab
  const navigate = useNavigation()
  return (
    <ImageBackground resizeMode="cover" source={item.image} style={{flex:1}}>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingHorizontal:10,
          paddingTop:60,
          flex:0.7
          }}>
          <TouchableOpacity
            onPress={() => navigate.goBack()}
          >
            <Image
            source={icons.back}
            style={{
              width:25,
              height:25,
              tintColor:COLORS.white
            }}
            resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
            source={icons.search}
            style={{
              width:25,
              height:25,
              tintColor:COLORS.white
            }}
            resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
        <View style={{
          flex:0.8,
          marginLeft:50,
          flexDirection:'row',
          justifyContent:"space-evenly",
          alignItems:'center'
          }}>
          <View style={{
            width:40,
            height:40,
            borderRadius:40,
            backgroundColor:COLORS.transparentLightGray,
            alignItems:'center',
            justifyContent:'center'
          }}>
            <View style={styles.dotBlue}/>
          </View>
          <View style={{
            width:200,
            height:80,
            borderRadius:20,
            backgroundColor:COLORS.transparentLightGray,
            paddingHorizontal:20,
            justifyContent:'center'
          }}>
            <Text style={styles.txtGray}>{selectedTab?.name}</Text>
            <Text style={styles.txtPrice}>$ {item.price}</Text>
          </View>
        </View>
        <View style={{flex:0.5,paddingHorizontal:20}}>
          <Text style={styles.txtFurniture}>Furniture</Text>
          <Text style={styles.txtProductName}>{item.productName}</Text>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  txtFurniture:{
    fontSize:18,
    fontWeight:'700',
    color:COLORS.lightGray3,
  },
  txtProductName:{
    fontSize:23,
    fontWeight:'800',
    color:COLORS.white,
    width:200,
    paddingVertical:20
  },
  dotBlue:{
    width:8,
    height:8,
    backgroundColor:COLORS.blue,
    borderRadius:10,
    marginVertical:10
  },
  txtGray:{
    fontSize:18,
    fontWeight:'700',
    color:COLORS.darkGray,
  },
  txtPrice:{
    color:COLORS.darkGreen,
    fontSize:18,
    fontWeight:'800'
  }
})

export default ChairDetails;
