'use client'

import Icon from "@/app/components/Icon";
import {IconCopy} from "@tabler/icons-react";

interface LinkCopyProps {
    displayText: string;
    url: string;
    copyText?: string;
};

export default function LinkCopy(props: LinkCopyProps) {
    const copyText = (props.copyText) ? props.copyText : props.displayText;

    return (
        <div className="flex items-center gap-2.5">
            <a className="text-blue-500" href={props.url}>{props.displayText}</a>
            <Icon
                icon={IconCopy}
                onPress={() => navigator.clipboard.writeText(copyText)}
                width={16}
                height={16}
            />
        </div>
    );
}
