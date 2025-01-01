import { Text } from '@mantine/core';
import BulletedList from "@/app/components/BulletedList";
import LinkCopy from "@/app/components/LinkCopy";

export default function CardContent() {
    const items = [
        'human being,',
        'software engineer,',
        'purveyor of silliness and empathy, and',
        'curator of colors, shapes, and sounds;'
    ];

    return (
        <div className="flex flex-col gap-5">
            <Text>/card - 200 OK</Text>
            <div className="flex flex-col gap-1.5">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <Text size="lg" fw={700}>Sam</Text>
                            <Text size="lg" fw={700}>[Samuel Marks]</Text>
                        </div>
                    </div>
                    <LinkCopy displayText="sam@justcallmesam.com" url="mailto:sam@justcallmesam.com"/>
                </div>
                <BulletedList items={items}/>
            </div>
        </div>
    );
}
