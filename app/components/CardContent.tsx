import {Text} from '@mantine/core';
import BulletedList from "@/app/components/BulletedList";
import LinkCopy from "@/app/components/LinkCopy";
import config from "@/config";

export default function CardContent() {
    return (
        <div className="flex flex-col gap-5">
            <Text className="md:text-lg">/card - 200 OK</Text>
            <div className="flex flex-col gap-1.5">
                <div className="flex flex-col">
                    <div className="flex gap-2">
                        <Text className="text-lg md:text-xl" fw={700}>{config.AUTHOR_SHORT_NAME}</Text>
                        <Text className="text-lg md:text-xl" fw={700}>[{config.AUTHOR_NAME}]</Text>
                    </div>
                    <LinkCopy displayText={config.AUTHOR_EMAIL_ADDRESS} url={`mailto:${config.AUTHOR_EMAIL_ADDRESS}`}/>
                </div>
                <BulletedList items={config.CARD_DISPLAY_ITEMS}/>
            </div>
        </div>
    );
}
