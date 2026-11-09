import Svg, { Circle } from 'react-native-svg';

export const EllipseIcon = () => {
    return (
        <Svg
            width={6}
            height={6}
            viewBox="0 0 6 6"
            fill="none"
        >
            <Circle
                cx={3}
                cy={3}
                r={3}
                fill="#22C55E"
                fillOpacity={0.16}
            />
        </Svg>
    );
};