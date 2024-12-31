'use client'

import Icon from './Icon';
import {IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconCode, IconMail} from "@tabler/icons-react";
import config from "@/config";

export default function Icons() {
    return (
        <div className="flex gap-2.5 absolute top-[105%] right-2">
            <Icon
                icon={IconBrandLinkedin}
                onPress={() => window.open(config.LINKEDIN_URL, '_blank')}
                width={20}
                height={20}
            />
            <Icon
                icon={IconBrandGithub}
                onPress={() => window.open(config.GITHUB_URL, '_blank')}
                width={20}
                height={20}
            />
            <Icon
                icon={IconBrandInstagram}
                onPress={() => window.open(config.INSTAGRAM_URL, '_blank')}
                width={20}
                height={20}
            />
            <Icon
                icon={IconMail}
                onPress={() => window.open(config.EMAIL_URL)}
                width={20}
                height={20}
            />
            <Icon
                icon={IconCode}
                onPress={() => window.open(config.SOURCE_CODE_URL, '_blank')}
                width={20}
                height={20}
            />
        </div>
    );
}
