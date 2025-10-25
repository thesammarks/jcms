"use client";

import {use, useEffect} from 'react';
import Link from "next/link";
import {notFound} from 'next/navigation';
import {Flex, Text} from "@mantine/core";
import {externalRedirects} from '@/app/data/external-redirects'

export default function ExternalRedirectPage(promiseParams: { params: Promise<{ slug: string[] }> }) {
    const {slug} = use(promiseParams.params);
    const slugKey = slug.join('/');
    const destination = externalRedirects[slugKey];

    useEffect(() => {
        if (destination) {
            const timer = setTimeout(() => {
                window.location.href = destination;
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [destination]);

    if (!destination) {
        notFound();
    }

    return (
        <Flex w="100%" justify="center" pt={20} className="text-center">
            <Flex w="70%" direction="column">
                <Text lineClamp={1} fw={700}>Redirecting to {destination}</Text>
                <Text>If you&#39;re not redirected, click{' '}
                    <Link href={destination}>
                        <span style={{textDecoration: "underline", fontWeight: "bold"}}>here</span>
                    </Link>.
                </Text>
            </Flex>
        </Flex>
    );
}
