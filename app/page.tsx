import Icons from "@/app/components/Icons";
import HomeContent from "@/app/components/HomeContent";

export default function Home() {
    return (
        <div className="
            flex items-center max-md:items-start justify-center
            min-h-screen w-full
            font-[family-name:var(--font-geist-mono)]
            text-neutral-800
        ">
            <div className="
                flex flex-col gap-5 justify-center
                relative p-8
                border border-neutral-300
                w-[450px] max-w-[85%] max-md:mt-10
            ">
                <Icons />
                <div>200 OK</div>
                <HomeContent />
            </div>
        </div>
    );
}
