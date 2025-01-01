import { Text } from '@mantine/core';
import BulletedList from "@/app/components/BulletedList";
import LinkCopy from "@/app/components/LinkCopy";

export default function HomeContent() {
    const items = [
        'human being,',
        'software engineer,',
        'purveyor of silliness and empathy, and',
        'curator of colors, shapes, and sounds;'
    ];

    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-col">
                <div className="flex gap-2 text-lg font-bold">
                    <Text>Sam</Text>
                    <Text>[Samuel Marks]</Text>
                </div>
            </div>
            <LinkCopy displayText="sam@justcallmesam.com" url="mailto:sam@justcallmesam.com" />
            <BulletedList items={items} />
        </div>
    );
};
