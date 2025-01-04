'use client'

import Icon from './Icon';
import {
    IconBrandGithubFilled,
    IconBrandInstagramFilled,
    IconBrandLinkedinFilled,
    IconCodeCircleFilled,
    IconMailFilled
} from "@tabler/icons-react";
import config from "@/config";
import ThemeControl from "@/app/components/ThemeControl";

export default function Icons() {
    return (
        <div className="
            absolute top-[100%] right-0 m-4
            flex gap-2
            text-neutral-500 dark:text-neutral-400
        ">
            <Icon
                icon={IconBrandLinkedinFilled}
                className="
                    w-[32px] h-[32px] hover:text-blue-500
                    lg:hover:w-[36px] lg:hover:h-[36px]
                "
                onPress={() => window.open(config.LINKEDIN_URL, '_blank')}
            />
            <Icon
                icon={IconBrandGithubFilled}
                className="
                    w-[32px] h-[32px] hover:text-blue-500
                    lg:hover:w-[36px] lg:hover:h-[36px]
                "
                onPress={() => window.open(config.GITHUB_URL, '_blank')}
            />
            <Icon
                icon={IconBrandInstagramFilled}
                className="
                    w-[32px] h-[32px] hover:text-blue-500
                    lg:hover:w-[36px] lg:hover:h-[36px]
                "
                onPress={() => window.open(config.INSTAGRAM_URL, '_blank')}
            />
            <Icon
                icon={IconMailFilled}
                className="
                    w-[32px] h-[32px] hover:text-blue-500
                    lg:hover:w-[36px] lg:hover:h-[36px]
                "
                onPress={() => window.open(config.EMAIL_URL)}
            />
            <Icon
                icon={IconCodeCircleFilled}
                className="
                    w-[32px] h-[32px] hover:text-blue-500
                    lg:hover:w-[36px] lg:hover:h-[36px]
                "
                onPress={() => window.open(config.SOURCE_CODE_URL, '_blank')}
            />
            <ThemeControl />
        </div>
    );
}
