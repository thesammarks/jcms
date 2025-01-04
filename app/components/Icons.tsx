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

export default function Icons() {
    return (
        <div className="
            absolute top-[100%] right-0 p-4 flex gap-2 group
            text-neutral-500 dark:text-neutral-400
        ">
            <Icon
                icon={IconBrandLinkedinFilled}
                className="
                    w-[32px] h-[32px] lg:hover:text-blue-500
                    lg:group-hover:w-[42px] lg:group-hover:h-[42px]
                "
                onPress={() => window.open(config.LINKEDIN_URL, '_blank')}
            />
            <Icon
                icon={IconBrandGithubFilled}
                className="
                    w-[32px] h-[32px] lg:hover:text-blue-500
                    lg:group-hover:w-[42px] lg:group-hover:h-[42px]
                "
                onPress={() => window.open(config.GITHUB_URL, '_blank')}
            />
            <Icon
                icon={IconBrandInstagramFilled}
                className="
                    w-[32px] h-[32px] lg:hover:text-blue-500
                    lg:group-hover:w-[42px] lg:group-hover:h-[42px]
                "
                onPress={() => window.open(config.INSTAGRAM_URL, '_blank')}
            />
            <Icon
                icon={IconMailFilled}
                className="
                    w-[32px] h-[32px] lg:hover:text-blue-500
                    lg:group-hover:w-[42px] lg:group-hover:h-[42px]
                "
                onPress={() => window.open(config.EMAIL_URL)}
            />
            <Icon
                icon={IconCodeCircleFilled}
                className="
                    w-[32px] h-[32px] lg:hover:text-blue-500
                    lg:group-hover:w-[42px] lg:group-hover:h-[42px]
                "
                onPress={() => window.open(config.SOURCE_CODE_URL, '_blank')}
            />
        </div>
    );
}
