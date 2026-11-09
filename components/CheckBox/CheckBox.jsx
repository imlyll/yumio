// React
import { useState, useEffect } from "react"

// React Native
import { StyleSheet, TouchableOpacity } from "react-native"

// Icons
import { TickIcon } from "../icons/TickIcon"

// Constants
import { colors } from "../../constants/color"

export const CheckBox = () => {
    const [check, setCheck] = useState(false);

    const handleToggle = () => setCheck(!check);

    const style = [styles.checkBox, (check && {...styles.checked})];

    return (
        <TouchableOpacity onPress={handleToggle} style={style}>
            {check && <TickIcon/>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkBox: {
        borderRadius: 3,
        width: 15,
        height: 15,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.borderColor,
    },
    checked: {
        backgroundColor: colors.secondaryColor,
        borderColor: colors.secondaryColor,
    }
})