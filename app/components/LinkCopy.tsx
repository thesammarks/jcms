'use client'

import {ActionIcon, CopyButton, Text, Tooltip} from '@mantine/core';
import {IconCheck, IconCopy} from "@tabler/icons-react";
import config from "@/config";
import Icon from "@/app/components/Icons/Icon";

interface LinkCopyProps {
    displayText: string;
    url: string;
    copyText?: string;
};

export default function LinkCopy(props: LinkCopyProps) {
    return (
        <div className="flex items-center gap-2.5">
            <a href={props.url}>
                <Text className="text-blue-500 text-lg md:text-xl" fw={700}>
                    {props.displayText}
                </Text>
            </a>
            <CopyButton value={config.AUTHOR_EMAIL_ADDRESS} timeout={2000}>
                {({ copied, copy }) => (
                    <Tooltip
                        className="bg-neutral-500 dark:bg-neutral-300 text-neutral-100 dark:text-neutral-600"
                        label={copied ?
                            <Text fw={700} size="xs">Copied</Text>
                            : <Text fw={700} size="xs">Copy</Text>
                        }
                        position="right"
                        withArrow
                    >
                        <ActionIcon
                            className="text-neutral-500 dark:text-neutral-400"
                            variant="subtle"
                            onClick={copy}
                        >
                            <Icon
                                icon={IconCheck}
                                className={`absolute w-[20px] ${copied ? "opacity-100" : "opacity-0"}`}
                                onPress={() => null}
                            />
                            <Icon
                                icon={IconCopy}
                                className={`absolute w-[20px] ${copied ? "opacity-0" : "opacity-100"}`}
                                onPress={() => null}
                            />
                        </ActionIcon>
                    </Tooltip>
                )}
            </CopyButton>
        </div>
    );
}
