import React, { useState } from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import { Canvas, Blur, Image, useImage, DisplacementMap, Turbulence, BackdropFilter, ColorMatrix } from "@shopify/react-native-skia";
import { FilterSlider } from "./FilterSlider";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const BLACK_AND_WHITE = [
    0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
];

const mapBlackWhiteMatrix = (factor) => {
    return BLACK_AND_WHITE.map(item => item * factor)
}

export const ImageView = (props) => {
    const [grayscale, setGrayscale] = useState(0)
    const [blur, setBlur] = useState(0)
    const [turbulence, setTurbulence] = useState(0)
    const image = useImage(props.route.params.url);
    if (!image) return null;
    return (
        <View style={{ width: deviceWidth, height: deviceHeight }}>
            <Canvas style={{ flex: 1, width: deviceWidth, height: deviceHeight }}>
                <Image
                    x={10 - turbulence * 5}
                    y={0}
                    width={deviceWidth - 20}
                    height={deviceHeight - 100}
                    image={image}
                    fit="contain"
                >
                    <Blur blur={blur * 5} />
                    <DisplacementMap channelX="g" channelY="a" scale={turbulence * 20}>
                        <Turbulence freqX={0.01} freqY={0.05} octaves={2} seed={2} />
                    </DisplacementMap>
                </Image>
                <BackdropFilter
                    clip={{ x: 0, y: 0, width: deviceWidth, height: deviceHeight }}
                    filter={<ColorMatrix matrix={mapBlackWhiteMatrix(grayscale)} />}
                />
            </Canvas>
            <FilterSlider
                value={grayscale}
                onChange={value => setGrayscale(value)}
                name="Grayscale"
                color="#AAA"
                thumbColor="#555"
            />
            <FilterSlider
                value={blur}
                onChange={value => setBlur(value)}
                name="Blur"
                color="#FB4"
                thumbColor="#C91"
            />
            <FilterSlider
                value={turbulence}
                onChange={value => setTurbulence(value)}
                name="Turbulence"
                color="#63D"
                thumbColor="#306"
            />
        </View>
    )
}
