import AuthorCardContent from "@/app/components/Card/AuthorCardContent";
import Icons from "@/app/components/Icons/Icons";
import JcmsCard from "@/app/components/Card/JcmsCard";

export default function Page() {
    return (
        <main className="
            flex flex-col justify-center items-center gap-4
            min-h-screen w-full max-md:justify-start
        ">
            <JcmsCard
                content={AuthorCardContent}
                className={`
                    w-[85%] max-w-xl max-md:mt-10
                    border border-neutral-300 dark:border-neutral-600
                    text-black dark:text-neutral-300
                `}
            />
            <Icons />
        </main>
    );
}
