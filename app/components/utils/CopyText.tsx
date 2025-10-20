"use client";

import {ActionIcon, CopyButton, Text, Tooltip} from '@mantine/core';
import {IconCheck, IconCopy} from "@tabler/icons-react";

interface CopyTextProps {
    copyText: string;
};

export default function CopyText(props: CopyTextProps) {
    return (
        <CopyButton value={props.copyText} timeout={2000}>
            {({copied, copy}) => (
                <Tooltip
                    className="bg-neutral-800/30"
                    position="right"
                    opacity={"90%"}
                    label={copied ? <Text fw={700} size="xs">Copied</Text> : <Text fw={700} size="xs">Copy</Text>}
                >
                    <ActionIcon variant="subtle" onClick={copy} bg={"transparent"}>
                        <IconCheck opacity={`${copied ? "90%" : "0"}`} className={`absolute w-[20px]`}/>
                        <IconCopy opacity={`${copied ? "0" : "90%"}`} className={`absolute w-[20px]`}/>
                    </ActionIcon>
                </Tooltip>
            )}
        </CopyButton>
    );
}
