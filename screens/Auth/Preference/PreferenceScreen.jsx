import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native"

// Expo
import { router } from "expo-router";

// Custom Component
import { CustomButton } from "../../../components/CustomButton/CustomButton";

// Icons
import { EllipseIcon } from "../../../components/icons/EllipseIcon";
import { EllipseActiveIcon } from "../../../components/icons/EllipseActiveIcon";

// Import
import { colors } from "../../../constants/color";

// Data
const cuisines = [
    "Pizza",
    "Sushi",
    "Burger",
    "Seafood platter",
    "Barbecue",
    "Cheeseburger",
    "Crepes",
    "Italian",
    "Vegan",
    "Asian",
    "Healthy",
    "Desserts",
];

const dietary = [
    "Vegetarian dishes",
    "Gluten free",
    "Vegan dishes",
    "Halal",
    "Organic food",
    "Dairy-free",
]

export const PreferenceScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerRight}>Skip</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What food do you love?</Text>
                <Text style={styles.subtitle}>Select your favorites — we'll personalize your experience.</Text>
            </View>
            <View style={{ marginBottom: 140 }}>
                <View style={styles.section}>
                    <Text style={styles.chipTitle}>Cuisines</Text>
                    <View style={styles.chipList}>
                        {cuisines.map((item) => (
                            <TouchableOpacity key={item} style={styles.chip}>
                                <Text style={styles.chipText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.chipTitle}>Dietary preferences</Text>
                    <View style={styles.chipList}>
                        {dietary.map((item) => (
                            <TouchableOpacity key={item} style={styles.chip}>
                                <Text style={styles.chipText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
            <View style={styles.dots}>
                <EllipseIcon />
                <EllipseIcon />
                <EllipseIcon />
                <EllipseActiveIcon />
            </View>
            <View style={{ paddingVertical: 24 }}>
                <CustomButton disabled>Start exploring</CustomButton>
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
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    headerRight: {
        color: colors.secondaryColor,
        fontFamily: "PlusJakartaSansMedium",
    },
    titleContainer: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingVertical: 12,
        marginBottom: 40,
    },
    title: {
        fontSize: 20,
        color: colors.blackColor,
        fontFamily: "DMSansSemiBold",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 12,
        fontFamily: "DMSansRegular",
        color: colors.grayColor,
    },
    section: {
        marginBottom: 40,
    },
    chipTitle: {
        fontSize: 16,
        fontFamily: "PlusJakartaSansBold",
        marginBottom: 24,
        color: colors.blackColor,
    },
    chipList: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    chip: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: colors.borderColor,
        backgroundColor: colors.secondaryBackgroundColor,
    },
    chipText: {
        fontSize: 12,
        fontFamily: "DMSansRegular",
        color: colors.blackColor,
    },
    dots: {
        marginTop: 19,
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
    }
})