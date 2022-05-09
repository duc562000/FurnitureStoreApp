import React,{useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text,ScrollView,FlatList,TouchableOpacity,StyleSheet,ImageBackground } from "react-native";
import images from '../../constants/images';
import { COLORS } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';

const data =
      [
        {
          id: 0,
          name: "Chair",
          title: "chairs",
          productList: [
              {
                  productId: 1,
                  productName: 'Chair Green Colour',
                  price: 10.00,
                  image: images.greenChair,
              },
              {
                  productId: 2,
                  productName: 'Chair Peach Colour',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 3,
                  productName: 'Chair White Colour',
                  price: 10.00,
                  image: images.whiteChair,
              },
          ]
      },
      {
          id: 1,
          name: "Cupboard",
          title: 'cupboards',
          productList: [
              {
                  productId: 4,
                  productName: 'Product 4',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 5,
                  productName: 'Product 5',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 6,
                  productName: 'Product 6',
                  price: 10.00,
                  image: images.redChair,
              },

          ]
      },
      {
          id: 2,
          name: "Table",
          title: 'tables',
          productList: [
              {
                  productId: 7,
                  productName: 'Product 7',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 8,
                  productName: 'Product 8',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 9,
                  productName: 'Product 9',
                  price: 10.00,
                  image: images.redChair,
              },
            ]
      },
      {
        id: 3,
        name: "Accessorice",
        title: 'accessorice',
        productList: [
            {
                productId: 10,
                productName: 'Product 7',
                price: 10.00,
                image: images.redChair,
            },
            {
                productId: 11,
                productName: 'Product 8',
                price: 10.00,
                image: images.redChair,
            },
            {
                productId: 12,
                productName: 'Product 9',
                price: 10.00,
                image: images.redChair,
            },
          ]
    }
      ]
const Tab = createMaterialTopTabNavigator();


function MaterialTopTab(props) {
  const [selectedTab,setSelectedTab] = useState(data[0])
  const onPressTab = (value) => {
    setSelectedTab(value)
  }
  const navigate = useNavigation()
  return (
      <View style={{flex:1}}>
        <View 
          style={{
            paddingVertical:15,
            paddingHorizontal:10,
            flex:0.2,
          }}
        >
          <Text style={styles.txtTitle}>Collection of </Text>
          <Text style={styles.txtTitle}>{selectedTab?.name}</Text>
        </View>
        <View style={{flex:0.15}}>
          <FlatList
          contentContainerStyle={{height:50}}
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor= {item => item.id}
          renderItem = {({item}) => (
            <>
              <TouchableOpacity
                style={{paddingHorizontal:20,alignItems:'center'}}
                onPress={() => onPressTab(item)}
              >
                <Text style={[styles.txt,{
                  color : selectedTab?.id === item.id ? COLORS.black : COLORS.darkGray
                }]}>
                  {item.name}
                </Text>
                {selectedTab?.id === item.id && (
                  <View style={styles.dotBlue}/>
                )
                }
              </TouchableOpacity>
            </>
          )}
          />
        </View>
        <View style={{flex:1,marginLeft:15}}>
          <FlatList
            data={selectedTab?.productList}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor= {item => item.id}
            renderItem = {({item}) => (
              <TouchableOpacity
                onPress={() => navigate.navigate('chairDetails',{item,selectedTab})}
              >
                <ImageBackground
                  resizeMode="cover"
                  borderRadius={20}
                  source={item.image}
                  style={styles.img}
                >
                  <View style={{
                    flex:1,
                    justifyContent:'space-between',
                    marginVertical:20,
                    marginHorizontal:30
                    }}>
                    <View>
                      <Text style={styles.txtFurniture}>Furniture</Text>
                      <Text style={styles.txtProductName}>{item.productName}</Text>
                    </View>
                    <View style={{
                      width:120,
                      height:45,
                      borderRadius:20,
                      backgroundColor:COLORS.transparentLightGray,
                      alignItems:'center',
                      justifyContent:'center'
                    }}>  
                      <Text style={styles.txtPrice}>$ {item.price}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      
  );
}

const styles = StyleSheet.create({
  txt:{
    fontSize:18,
    fontWeight:'300',
  },
  txtTitle:{
    fontSize:39,
    fontWeight:'bold'
  },
  dotBlue:{
    width:8,
    height:8,
    backgroundColor:COLORS.blue,
    borderRadius:10,
    marginVertical:10
  },
  img:{
    width:220,
    height:400,
    marginRight:30,
  },
  txtFurniture:{
    fontSize:16,
    fontWeight:'700',
    color:COLORS.lightGray,
    paddingBottom:10
  },
  txtProductName:{
    fontSize:18,
    fontWeight:'bold',
    color:COLORS.white,
  },
  txtPrice:{
    fontSize:20,
    fontWeight:'600',
    color:COLORS.black
  }
})

export default MaterialTopTab
