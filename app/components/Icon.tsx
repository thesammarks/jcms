'use client'

interface IconProps {
    icon: React.ElementType;
    width: number;
    height: number;
    onPress: () => void;
}

export default function Icon(props: IconProps) {
    return (
        <props.icon
            className="cursor-pointer hover:stroke-[2] hover:text-blue-500 transition-all duration-300 ease-in-out"
            stroke="1.5"
            color="currentColor"
            width={props.width}
            height={props.height}
            onClick={props.onPress}
        />
    );
}
