// React Native
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from "react-native"

// Expo
import { router } from "expo-router";

// Custom Components
import { CustomButton } from "../../../components/CustomButton/CustomButton";

// Icon
import { VectorIcon } from "../../../components/icons/VectorIcon";
import { CircleIcon } from "../../../components/icons/CircleIcon";

// Constants
import { colors } from "../../../constants/color";

export const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerRight}>Skip</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Create your account</Text>
            </View>
            <View style={styles.field}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>Email</Text>
                    <Text style={styles.labelRequired}>*</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="example@gmail.com" placeholderTextColor={colors.blackColor} />
                </View>
            </View>
            <View style={styles.field}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>First name</Text>
                    <Text style={styles.labelRequired}>*</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="Enter First name" />
                </View>
            </View>
            <View style={styles.field}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>Last name</Text>
                    <Text style={styles.labelRequired}>*</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="Enter Last name" />
                </View>
            </View>
            <View style={styles.field}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>Phone Number</Text>
                    <Text style={styles.labelRequired}>*</Text>
                </View>
                <View style={styles.phoneRow}>
                    <TouchableOpacity style={[styles.input, styles.countryCode]}>
                        <Text style={styles.countryCodeText}>+994</Text>
                        <VectorIcon />
                    </TouchableOpacity>
                    <TextInput
                        style={[styles.input, styles.phoneInput]}
                        placeholder="Enter Phone Number"
                        placeholderTextColor={colors.grayColor}
                        keyboardType="phone-pad"
                    />
                </View>
            </View>
            <View style={styles.field}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>Password</Text>
                    <Text style={styles.labelRequired}>*</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="Enter password" />
                </View>
                <View style={{ marginBottom: 13 }}>
                    <View style={styles.circles}>
                        <CircleIcon />
                        <Text style={styles.circleText}>min. 6 characters</Text>
                    </View>
                    <View style={styles.circles}>
                        <CircleIcon />
                        <Text style={styles.circleText}>1 uppercase letter</Text>
                    </View>
                    <View style={styles.circles}>
                        <CircleIcon />
                        <Text style={styles.circleText}>1 number or special character</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 24 }}>
                    <CustomButton action={() => router.push("/verify-code")}>
                        Create account
                    </CustomButton>
                </View>
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
        alignItems: "center",
        // paddingVertical: 24,
        paddingHorizontal: 26.5,
        marginTop: 20,
        marginBottom: 40,
    },
    title: {
        fontSize: 24,
        color: colors.blackColor,
        fontFamily: "PlusJakartaSansBold"
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
    field: {
        marginBottom: 24,
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderColor: colors.borderColor,
        backgroundColor: colors.secondaryBackgroundColor,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 0,
        fontFamily: "DMSansRegular",
        fontSize: 16,
        color: colors.blackColor,
    },
    phoneRow: {
        flexDirection: "row",
        gap: 8,
    },
    countryCode: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    phoneInput: {
        flex: 1,
    },
    countryCodeText: {
        fontFamily: "DMSansRegular",
        fontSize: 16,
        color: colors.blackColor,
    },
    circles: {
        marginTop: 8,
        flexDirection: "row",
        alignItems: "center",
    },
    circleText: {
        marginLeft: 9.17,
        color: colors.grayColor,
        fontSize: 14,
        fontFamily: "DMSansRegular",
    }
})