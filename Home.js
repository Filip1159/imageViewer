import React from "react"; 
import { View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Images from './Images'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const Home = ({ navigation }) => {
    return (
      <ScrollView>  
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            {
                Images.map((image, index) => {
                    console.log('a')
                    return (
                    <TouchableOpacity key={index} onPress={() => {
                        navigation.navigate("ImageView", { url: image.url })
                    }}>
                        <Image source={image.url} style={{
                            width: deviceWidth / 3 - 6,
                            height: deviceHeight / 3 - 6,
                            borderRadius: 10,
                            margin: 2
                        }} />
                    </TouchableOpacity>
                )})
            }
        </View>
      </ScrollView>
    );
  }
  