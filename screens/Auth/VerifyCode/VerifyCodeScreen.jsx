// React Native
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native"

// Expo
import { router } from "expo-router";

// Custom Components
import { CustomButton } from "../../../components/CustomButton/CustomButton";

// Icon
import { ArrowBackIcon } from "../../../components/icons/ArrowBackIcon";

// Constants
import { colors } from "../../../constants/color";

export const VerifyCodeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity  onPress={() => router.back()}>
                    <ArrowBackIcon />
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Verify Code</Text>
                <Text style={styles.subtitle}>Please enter the code we just sent to email example@gmail.com</Text>
            </View>
            <View style={styles.otpRow}>
                <TextInput style={styles.otpBox} placeholder="-" placeholderTextColor={colors.grayColor} keyboardType="number-pad" maxLength={1}></TextInput>
                <TextInput style={styles.otpBox} placeholder="-" placeholderTextColor={colors.grayColor} keyboardType="number-pad" maxLength={1}></TextInput>
                <TextInput style={styles.otpBox} placeholder="-" placeholderTextColor={colors.grayColor} keyboardType="number-pad" maxLength={1}></TextInput>
                <TextInput style={styles.otpBox} placeholder="-" placeholderTextColor={colors.grayColor} keyboardType="number-pad" maxLength={1}></TextInput>
            </View>
            <View style={styles.otpText}>
                <Text style={styles.otpTitle}>Don’t receive OTP?</Text>
                <Text style={styles.otpSubtitle}>Resend code</Text>
            </View>
            <View>
                <CustomButton action={() => router.push("/log-in")}>
                    Verify
                </CustomButton>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 16,
        backgroundColor: colors.whiteColor,
    },
    header: {
        paddingVertical: 12,
        justifyContent: "flex-start",
    },
    titleContainer: {
        alignItems: "center",
        gap: 8,
        paddingVertical: 24,
        paddingHorizontal: 26.5,
    },
    title: {
        fontSize: 24,
        color: colors.blackColor,
        fontFamily: "PlusJakartaSansBold",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 12,
        color: colors.grayColor,
        fontFamily: "PlusJakartaSansRegular",
        textAlign: "center",
        lineHeight: 20,
    },
    otpRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40,
        gap: 10
    },
    otpBox: {
        width: 48,
        height: 48,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.borderColor,
        textAlign: "center",
        fontSize: 20,
        fontFamily: "DMSansMedium",
        color: colors.blackColor,
    },
    otpText: {
        paddingTop: 24,
        paddingBottom: 358,
        justifyContent: "center",
        alignItems: "center",
    },
    otpTitle: {
        fontSize: 12,
        fontFamily: "PlusJakartaSansRegular",
        paddingBottom: 8,
        color: colors.grayColor,
    },
    otpSubtitle: {
        fontSize: 12,
        fontFamily: "PlusJakartaSansBold",
        color: colors.grayColor,
        borderBottomWidth: 0.6,
        borderBottomColor: colors.grayColor,
    }
})