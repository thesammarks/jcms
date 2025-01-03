interface IconProps {
    icon: React.ElementType;
    width: number;
    height: number;
    onPress: () => void;
    className?: string;
}

export default function Icon(props: IconProps) {
    return (
        <props.icon
            className={`
                stroke-[2] cursor-pointer 
                transition-all duration-300 ease-in-out
                ${props.className || ''}
            `}
            width={props.width}
            height={props.height}
            onClick={props.onPress}
        />
    );
}
