import {Code, Text} from '@mantine/core';

export default function AboutCardContent() {
    const aClassName = "text-blue-500 underline font-bold";

    return (
        <div className="flex flex-col gap-4 text-lg">
            <Text className="md:text-lg font-bold">ABOUT</Text>
            <Text>This website was created with the <a className={aClassName}>jcms-next-mantine-starter</a>.</Text>
            <div className="flex gap-10">
                <div className="flex flex-col gap-1">
                    <Text><a className={aClassName} target="_blank" rel="noopener noreferrer" href="https://nextjs.org/">Next.js</a> <Code>v15.1.2</Code></Text>
                    <Text><a className={aClassName} target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/">TailwindCSS</a> <Code>v3.4.1</Code></Text>
                    <Text><a className={aClassName} target="_blank" rel="noopener noreferrer" href="https://mantine.dev/">Mantine</a> <Code>v7.15.0</Code></Text>
                    <Text><a className={aClassName} target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/@vercel/analytics">Vercel Analytics</a> <Code>v1.4.1</Code></Text>
                </div>
                <div className="flex flex-col gap-1">
                    <Text><a className={aClassName} target="_blank" rel="noopener noreferrer" href="https://react.dev/">React</a> <Code>v19.0.0</Code></Text>
                    <Text><a className={aClassName} target="_blank" rel="noopener noreferrer" href="https://tabler.io/icons">Tabler Icons</a> <Code>v3.26.0</Code></Text>
                    <Text><a className={aClassName} target="_blank" rel="noopener noreferrer" href="https://eslint.org/">ESLint</a> <Code>v9</Code></Text>
                </div>
            </div>
        </div>
    );
}
