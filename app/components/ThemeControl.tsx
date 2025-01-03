'use client'

import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useMantineColorScheme } from "@mantine/core";
import Icon from "@/app/components/Icon";

export default function ThemeControl() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    return (
        <div className="
            absolute top-[105%] left-2 flex gap-2.5
            text-neutral-500 dark:text-neutral-400
        ">
            <div
                className="hover:text-blue-500"
                onClick={() => {setColorScheme(colorScheme === "dark" ? "light" : "dark")}}
            >
                <Icon
                    icon={IconMoonFilled}
                    className="absolute opacity-100 dark:opacity-0"
                    onPress={() => null}
                    width={18}
                    height={18}
                />
                <Icon
                    icon={IconSunFilled}
                    className="absolute opacity-0 dark:opacity-100"
                    onPress={() => null}
                    width={20}
                    height={20}
                />
            </div>
        </div>
    );
}
