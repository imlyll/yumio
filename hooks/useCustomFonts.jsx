// Expo
import { useFonts } from 'expo-font';

export const useCustomFonts = () => {
    const [loaded, error] = useFonts({
        'DMSansRegular': require('../assets/fonts/DMSans/DMSansRegular.ttf'),
        'DMSansMedium': require('../assets/fonts/DMSans/DMSansMedium.ttf'),
        'DMSansSemiBold': require('../assets/fonts/DMSans/DMSansSemiBold.ttf'),
        'DMSansBold': require('../assets/fonts/DMSans/DMSansBold.ttf'),

        'PlusJakartaSansRegular': require('../assets/fonts/PlusJakartaSans/PlusJakartaSansRegular.ttf'),
        'PlusJakartaSansMedium': require('../assets/fonts/PlusJakartaSans/PlusJakartaSansMedium.ttf'),
        'PlusJakartaSansBold': require('../assets/fonts/PlusJakartaSans/PlusJakartaSansBold.ttf')
    });

    return { loaded, error };
}