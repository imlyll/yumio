// React Native
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

// Constants
import { colors } from "../../constants/color";

export const CustomButton = ({ children, action, text, styles = {}, disabled = false }) => {
    return (
        <TouchableOpacity
            style={[s.button, styles, disabled && s.buttonDisabled]}
            onPress={action}
            disabled={disabled}
        >
            <Text style={[s.buttonText, disabled && s.buttonTextDisabled]}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const s = StyleSheet.create({
    button: {
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primaryColor,
        borderRadius: 8,
    },
    buttonText: {
        color: colors.secondaryBackgroundColor,
        fontSize: 16,
        fontFamily: "DMSansSemiBold"
    },
    buttonDisabled: {
        backgroundColor: colors.grayBackgroundColor,
    },
    buttonTextDisabled: {
        color: colors.grayTitleColor,
    },
})