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
            <a className="text-blue-500" href={props.url}>
                <Text fw={700}>{props.displayText}</Text>
            </a>
            <CopyButton value={config.EMAIL_ADDRESS} timeout={2000}>
                {({ copied, copy }) => (
                    <Tooltip
                        className={copied ? "text-blue-500" : "text-neutral-600"}
                        label={copied ?
                            <Text fw={700} className="text-neutral-100" size="xs">Copied</Text>
                            : <Text fw={700} className="text-neutral-100" size="xs">Copy</Text>
                        }
                        color="currentColor"
                        position="right"
                        withArrow
                    >
                        <ActionIcon className="text-neutral-600" variant="subtle" onClick={copy}>
                            {copied ? <IconCheck width={14} /> : <IconCopy width={14} />}
                        </ActionIcon>
                    </Tooltip>
                )}
            </CopyButton>
        </div>
    );
}
