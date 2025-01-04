'use client'

import {IconMoonFilled, IconSunFilled} from "@tabler/icons-react";
import {useMantineColorScheme} from "@mantine/core";
import Icon from "@/app/components/Icon";

export default function ThemeControl() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    return (
        <div
            className="
                flex relative w-[32px] h-[32px]
                lg:hover:w-[36px] lg:hover:h-[36px]
                text-neutral-500 dark:text-neutral-400
                group hover:text-blue-500
                transition-all duration-300 ease-in-out
            "
            onClick={() => {setColorScheme(colorScheme === "dark" ? "light" : "dark")}}
        >
            <Icon
                icon={IconMoonFilled}
                className="
                    absolute w-[31px] h-[31px]
                    lg:group-hover:w-[35px] lg:group-hover:h-[35px]
                    opacity-100 dark:opacity-0
                "
                onPress={() => null}
            />
            <Icon
                icon={IconSunFilled}
                className="
                    absolute w-[32px] h-[32px]
                    lg:group=hover:w-[36px] lg:group-hover:h-[36px]
                    opacity-0 dark:opacity-100
                "
                onPress={() => null}
            />
        </div>
    );
}
