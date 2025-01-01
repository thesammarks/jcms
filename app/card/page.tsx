import { Card } from '@mantine/core';
import Icons from "@/app/components/Icons";
import CardContent from "@/app/components/CardContent";

export default function App() {
    return (
        <div className="
            flex justify-center
            items-center max-md:items-start
            min-h-screen w-full
        ">
            <Card
                shadow="sm"
                padding="xl"
                className="
                    relative overflow-visible
                    w-[450px] max-w-[85%] max-md:mt-10
                    border border-neutral-300
                ">
                <Icons />
                <CardContent />
            </Card>
        </div>
    );
}
