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
            absolute top-[105%] right-2 flex gap-2
            text-neutral-500 dark:text-neutral-400
        ">
            <Icon
                icon={IconBrandLinkedinFilled}
                className="lg:hover:text-blue-500"
                onPress={() => window.open(config.LINKEDIN_URL, '_blank')}
                width={22}
                height={22}
            />
            <Icon
                icon={IconBrandGithubFilled}
                className="lg:hover:text-blue-500"
                onPress={() => window.open(config.GITHUB_URL, '_blank')}
                width={22}
                height={22}
            />
            <Icon
                icon={IconBrandInstagramFilled}
                className="lg:hover:text-blue-500"
                onPress={() => window.open(config.INSTAGRAM_URL, '_blank')}
                width={22}
                height={22}
            />
            <Icon
                icon={IconMailFilled}
                className="lg:hover:text-blue-500"
                onPress={() => window.open(config.EMAIL_URL)}
                width={22}
                height={22}
            />
            <Icon
                icon={IconCodeCircleFilled}
                className="lg:hover:text-blue-500"
                onPress={() => window.open(config.SOURCE_CODE_URL, '_blank')}
                width={22}
                height={22}
            />
        </div>
    );
}
