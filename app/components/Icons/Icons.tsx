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
    const iconClassName = `
        w-[32px] h-[32px] lg:hover:text-blue-500
        lg:hover:scale-110 lg:hover:scale-110
    `;

    return (
        <div className="flex gap-3 text-neutral-500 dark:text-neutral-400">
            <Icon
                icon={IconBrandLinkedinFilled}
                className={iconClassName}
                onPress={() => window.open(config.LINKEDIN_URL, '_blank')}
            />
            <Icon
                icon={IconBrandGithubFilled}
                className={iconClassName}
                onPress={() => window.open(config.GITHUB_URL, '_blank')}
            />
            <Icon
                icon={IconBrandInstagramFilled}
                className={iconClassName}
                onPress={() => window.open(config.INSTAGRAM_URL, '_blank')}
            />
            <Icon
                icon={IconMailFilled}
                className={iconClassName}
                onPress={() => window.open(`mailto:${config.AUTHOR_EMAIL_ADDRESS}`, '_blank')}
            />
            <Icon
                icon={IconCodeCircleFilled}
                className={iconClassName}
                onPress={() => window.open(config.SOURCE_CODE_URL, '_blank')}
            />
            <ThemeControl />
        </div>
    );
}
