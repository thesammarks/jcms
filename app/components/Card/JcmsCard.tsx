import {Card} from '@mantine/core';
import React from "react";

interface CardProps {
    className?: string;
    content: React.ElementType;
}

export default function JcmsCard(props: CardProps) {
    return (
        <Card
            shadow="sm"
            padding="xl"
            className={props.className || ''}
        >
            <props.content />
        </Card>
    );
}
