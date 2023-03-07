import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { ImageBackground, View, Dimensions } from "react-native";
import Images from "./Images";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const ImageView = (props) => {
    const [opacity, setOpacity] = useState(0.5)
    return (
        <View>
            <ImageBackground source={props.route.params.url} style={{
                height: deviceHeight,
                width: deviceWidth,
                opacity
            }} />
            <Slider value={opacity} onValueChange={value => setOpacity(value)}></Slider>
        </View>
    )
}