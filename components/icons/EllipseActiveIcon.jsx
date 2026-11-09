import Svg, { Circle } from 'react-native-svg';

export const EllipseActiveIcon = () => {
    return (
        <Svg
            width={8}
            height={8}
            viewBox="0 0 8 8"
            fill="none"
        >
            <Circle
                cx={4}
                cy={4}
                r={4}
                fill="#22C55E"
            />
        </Svg>
    );
};