import {
    IconBrandLinkedin,
    IconBrandGithub,
    IconBrandInstagram,
    IconCode,
    IconMail,
} from '@tabler/icons-react';

export default function Home() {
    return (
        <div className="
            flex items-center justify-center
            min-h-screen w-full
            font-[family-name:var(--font-geist-mono)]
            text-neutral-800
        ">
            <div className="
                flex flex-col gap-5 justify-center
                relative p-6
                border border-neutral-300
                w-[450px] max-w-[85%]
            ">
                <div className="flex gap-2 absolute top-[108%] right-2">
                    <IconBrandLinkedin stroke="1.5" color="#44403c" width={20} height={20}/>
                    <IconBrandGithub stroke="1.5" color="#44403c" width={20} height={20}/>
                    <IconBrandInstagram stroke="1.5" color="#44403c" width={20} height={20}/>
                    <IconMail stroke="1.5" color="#44403c" width={20} height={20}/>
                    <IconCode stroke="1.5" color="#44403c" width={20} height={20}/>
                </div>

                <div className="font-[family-name:var(--font-geist-mono)]">200 OK</div>

                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <div className="flex gap-2 text-lg">
                            <div className="font-bold">sam</div>
                            <div className="font-bold">[Samuel Marks]</div>
                        </div>
                        <a
                            className="text-blue-500"
                            href="mailto:sam@justcallmesam.com"
                        >
                            sam@justcallmesam.com
                        </a>
                    </div>
                    <ul className="list-disc ml-10">
                        <li>human being,</li>
                        <li>software engineer,</li>
                        <li>purveyor of silliness and empathy, and</li>
                        <li>curator of colors, shapes, and sounds;</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
