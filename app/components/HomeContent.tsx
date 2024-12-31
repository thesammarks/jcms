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
                    <div>Sam</div>
                    <div>[Samuel Marks]</div>
                </div>
            </div>
            <LinkCopy displayText="sam@justcallmesam.com" url="mailto:sam@justcallmesam.com" />
            <BulletedList items={items} />
        </div>
    );
};
