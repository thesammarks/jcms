import {Text} from '@mantine/core';

interface BulletedListProps {
    items: string[],
}

export default function BulletedList(props: BulletedListProps) {

    const listItemProps = `
        relative flex items-start pl-4
        before:content-['•'] before:absolute
        before:left-0 before:font-bold
    `;

    return (
        <ul className="list-disc ml-4">
            {props.items.map((item, index) => (
                <li key={index} className={listItemProps}>
                    <Text className="md:text-lg">{item}</Text>
                </li>
            ))}
        </ul>
    );
}
