import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

export const FilterSlider = ({value, onChange, name, color, thumbColor}) => {
    return (
        <View style={styles.container}>
                <Text style={styles.text}>{name}</Text>
                <Slider
                    value={value}
                    onValueChange={value => onChange(value)}
                    trackStyle={{ ...styles.track, backgroundColor: color }}
                    thumbStyle={{ ...styles.thumb, backgroundColor: thumbColor }}
                    minimumTrackTintColor={thumbColor}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        maxHeight: 60,
        flex: 1,
        marginLeft: 20,
        marginRight: 20
    },
    text: {
        fontSize: 18
    },
    thumb: {
        height: 20
    },
    track: {
        height: 5,
    }
});
