'use client'

import { ActionIcon, CopyButton, Text, Tooltip } from '@mantine/core';
import { IconCheck, IconCopy } from "@tabler/icons-react";
import config from "@/config";

interface LinkCopyProps {
    displayText: string;
    url: string;
    copyText?: string;
};

export default function LinkCopy(props: LinkCopyProps) {
    return (
        <div className="flex items-center gap-2.5">
            <a href={props.url}>
                <Text c="#3b82f6" fw={700}>{props.displayText}</Text>
            </a>
            <CopyButton value={config.EMAIL_ADDRESS} timeout={2000}>
                {({ copied, copy }) => (
                    <Tooltip
                        color={copied ? "blue" : "neutral_dark"}
                        label={copied ?
                            <Text c="neutral_light" fw={700} size="xs">Copied</Text>
                            : <Text c="neutral_light" fw={700} size="xs">Copy</Text>
                        }
                        position="right"
                        withArrow
                    >
                        <ActionIcon color="neutral_dark" variant="subtle" onClick={copy}>
                            {copied ? <IconCheck width={14} /> : <IconCopy width={14} />}
                        </ActionIcon>
                    </Tooltip>
                )}
            </CopyButton>
        </div>
    );
}
