import React, { useEffect, useState } from "react"; 
import { Image, Dimensions, ScrollView, View, TouchableOpacity } from 'react-native';
import { getImagesFromApi } from './Images'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const Home = ({ navigation }) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        const setImagesAsync = async () => {
            setImages(await getImagesFromApi())
        }
        setImagesAsync()
    }, [])

    return (
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {
            images.map((imageUrl, index) => {
                console.log(imageUrl)
                return (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate("ImageView", { url: imageUrl })}>
                        <Image source={{uri: imageUrl}}
                            style={{
                                width: deviceWidth / 3 - 6,
                                height: deviceHeight / 3 - 6,
                                borderRadius: 10,
                                margin: 2
                            }}
                        />
                        </TouchableOpacity>
                )
            })
        }
        </View>
      </ScrollView>
    );
  }
  