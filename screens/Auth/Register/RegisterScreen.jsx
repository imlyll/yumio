// React Native
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
} from "react-native"

// Expo
import { router } from "expo-router";

// Custom Components
import { CustomButton } from "../../../components/CustomButton/CustomButton";
import { CheckBox } from "../../../components/CheckBox/CheckBox";

// Icons
import { ArrowBackIcon } from "../../../components/icons/ArrowBackIcon";

// Constants
import { colors } from "../../../constants/color";

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ArrowBackIcon />
                <Text style={styles.headerRight}>Skip</Text>
            </View>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../../assets/image/logo.png")}></Image>
                <Text style={styles.title}>
                    Welcome to Yumio
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.googleButton}>
                    <Image source={require("../../../assets/image/google.png")}></Image>
                    <Text style={styles.googleLabel}>
                        Continue with Google
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lines}>
                <View style={styles.line}></View>
                <Text style={styles.lineText}>Or</Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.label}>
                <Text style={styles.labelText}>Email</Text>
                <Text style={styles.labelRequired}>*</Text>
            </View>
            <View>
                <TextInput style={styles.input} placeholder="example@gmail.com" />
            </View>
            <View style={styles.pravicyRow}>
                <CheckBox />
                <Text style={{ color: colors.grayColor, fontFamily: "DMSansRegular" }}>By continuing, you agree to our <Text style={{ color: colors.blackColor, fontFamily: "DMSansRegular" }}>Privacy Policy.</Text></Text>
            </View>
            <View>
                <CustomButton action={() => router.push("/sign-up")}>
                    Continue with email
                </CustomButton>
            </View>
            <View style={{ marginTop: 24 }}>
                <Text style={{ textAlign: "center", fontSize: 16, color: colors.grayColor, fontFamily: "DMSansMedium" }}>Already have an account? <Text style={{ color: colors.blackColor, fontFamily: "DMSansSemiBold" }}>Log in</Text></Text>
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
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerRight: {
        color: colors.secondaryColor,
        fontFamily: "PlusJakartaSansMedium",
    },
    logoContainer: {
        paddingTop: 24,
        alignItems: "center",
    },
    title: {
        marginTop: 12,
        fontSize: 24,
        color: colors.blackColor,
        fontFamily: "PlusJakartaSansBold",
    },
    googleButton: {
        gap: 8,
        marginTop: 64,
        marginBottom: 24,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.borderColor,
        backgroundColor: colors.secondaryBackgroundColor,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    googleLabel: {
        fontFamily: "DMSansSemiBold",
    },
    lines: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 24,
    },
    line: {
        height: 1,
        flex: 1,
        backgroundColor: colors.borderColor,
    },
    lineText: {
        color: colors.blackColor,
        fontFamily: "DMSansBold",
    },
    label: {
        flexDirection: "row",
        gap: 4,
        marginBottom: 8,
    },
    labelText: {
        color: colors.grayColor,
        fontFamily: "DMSansRegular",
    },
    labelRequired: {
        color: colors.dangerColor,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        backgroundColor: colors.secondaryBackgroundColor,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
        height: 48,
        fontFamily: "DMSansRegular",
    },
    pravicyRow: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        marginTop: 12,
        marginBottom: 48,
    },
});