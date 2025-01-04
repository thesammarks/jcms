'use client'

import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useMantineColorScheme } from "@mantine/core";
import Icon from "@/app/components/Icon";

export default function ThemeControl() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    return (
        <div className="
            absolute top-[100%] p-4 left-0
            text-neutral-500 dark:text-neutral-400
        ">
            <div
                className="
                    relative w-[32px] h-[32px] group
                    flex hover:text-blue-500
                "
                onClick={() => {setColorScheme(colorScheme === "dark" ? "light" : "dark")}}
            >
                <Icon
                    icon={IconMoonFilled}
                    className="
                        absolute w-[32px] h-[32px]
                        opacity-100 dark:opacity-0
                        lg:group-hover:w-[42px] lg:group-hover:h-[42px]
                    "
                    onPress={() => null}
                />
                <Icon
                    icon={IconSunFilled}
                    className="
                        absolute w-[32px] h-[32px]
                        opacity-0 dark:opacity-100
                        lg:group-hover:w-[42px] lg:group-hover:h-[42px]
                    "
                    onPress={() => null}
                />
            </div>
        </div>
    );
}
