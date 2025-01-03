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
            {colorScheme == "dark" ?
                <Icon
                    icon={IconMoonFilled}
                    className={`absolute className="hover:text-blue-500"`}
                    onPress={() => setColorScheme("light")}
                    width={18}
                    height={18}
                /> :
                <Icon
                    icon={IconSunFilled}
                    className={`absolute className="hover:text-blue-500"`}
                    onPress={() => setColorScheme("dark")}
                    width={20}
                    height={20}
                />
            }
        </div>
    );
}
