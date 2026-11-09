// React Native
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
} from "react-native"

// Expo
import { router } from "expo-router";

// Custom Components
import { CustomButton } from "../../../components/CustomButton/CustomButton";

// Icons
import { VisibilityIcon } from "../../../components/icons/VisibilityIcon";

// Constants
import { colors } from "../../../constants/color";

export const LogInScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerRight}>Skip</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Log in</Text>
                <Text style={styles.subtitle}>Hi! Welcome back, you’ve been missed</Text>
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
            <View style={{ marginBottom: 24 }}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>Email</Text>
                    <Text style={styles.labelRequired}>*</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="example@gmail.com" />
                </View>
            </View>
            <View style={{ marginBottom: 4 }}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>Password</Text>
                    <Text style={styles.labelRequired}>*</Text>
                </View>
                <View style={styles.passwordBox}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Enter password"
                        placeholderTextColor={colors.grayColor}
                        secureTextEntry
                    />
                    <TouchableOpacity>
                        <VisibilityIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.forget}>
                <Text style={styles.forgetText}>Forgot password?</Text>
            </View>
            <View>
                <CustomButton styles={{ marginBottom: 24 }} action={() => router.push("/preference")}>Log in</CustomButton>
                <Text style={{ textAlign: "center", fontSize: 16, color: colors.grayColor, fontFamily: "DMSansMedium" }}>Don't have an account? <Text style={{ color: colors.blackColor, fontFamily: "DMSansSemiBold" }}>Sign up</Text></Text>
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
        justifyContent: "flex-end",
    },
    headerRight: {
        color: colors.secondaryColor,
        fontFamily: "PlusJakartaSansMedium",
    },
    titleContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 24,
        paddingHorizontal: 26.5,
        marginBottom: 40,
    },
    title: {
        fontSize: 24,
        color: colors.blackColor,
        fontFamily: "PlusJakartaSansBold",
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 12,
        fontFamily: "PlusJakartaSansRegular",
        color: colors.grayColor,
    },
    googleButton: {
        gap: 8,
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
    passwordBox: {
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.borderColor,
        backgroundColor: colors.secondaryBackgroundColor,
        borderRadius: 8,
        paddingHorizontal: 16,
        gap: 8,
    },
    passwordInput: {
        flex: 1,
        height: "100%",
        padding: 0,
        fontFamily: "DMSansRegular",
        fontSize: 14,
        color: colors.blackColor,
    },
    forget: {
        alignItems: "flex-end",
        marginBottom: 56,
    },
    forgetText: {
        fontSize: 14,
        fontFamily: "DMSansRegular",
        color: colors.grayColor,
        marginTop: 4,
    }
})