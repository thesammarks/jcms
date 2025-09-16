"use client";

import React from "react";
import {Avatar, BackgroundImage, Flex, Text} from "@mantine/core";
import {
    IconBrandGithubFilled,
    IconBrandInstagramFilled,
    IconBrandLinkedinFilled,
    IconMailFilled,
} from "@tabler/icons-react";
import {Easing, motion, useReducedMotion, Variants} from "framer-motion";
import config from "@/config";
import LinkNewTab from "@/app/components/utils/LinkNewTab";
import styles from "./page.module.css";

const MotionDiv = motion.div;

export default function Home() {
    const icons: ({ icon: React.ElementType; link: string })[] = [
        {icon: IconBrandLinkedinFilled, link: config.LINKEDIN_URL},
        {icon: IconBrandGithubFilled, link: config.GITHUB_URL},
        {icon: IconBrandInstagramFilled, link: config.INSTAGRAM_URL},
        {icon: IconMailFilled, link: `mailto:${config.AUTHOR_EMAIL_ADDRESS}`},
    ];

    const reduce = useReducedMotion();
    const dur = reduce ? 0 : 0.6;
    const ease: Easing = [0.22, 1, 0.36, 1];

    // Reusable "fade up" with optional delay
    const fadeUp = (delay = 0): Variants => ({
        hidden: {opacity: 0, y: 24, filter: "blur(6px)"},
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {duration: dur, delay, ease},
        },
    });

    // Stagger for the icon row
    const iconRow: Variants = {
        hidden: {},
        show: {
            transition: {
                delayChildren: reduce ? 0 : 2.4,
                staggerChildren: reduce ? 0 : 0.12,
            },
        },
    };

    const iconOne: Variants = {
        hidden: {opacity: 0, y: 12, scale: 0.9},
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {duration: dur * 0.8, ease},
        },
    };

    return (
        <BackgroundImage src={"/bg.jpg"}>
            <MotionDiv
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {opacity: 0},
                    show: {opacity: 1, transition: {duration: dur, ease}},
                }}
            >
                <Flex
                    direction={"column"}
                    align={"center"}
                    justify={"center"}
                    gap={"sm"}
                    className={styles.container}
                >
                    <Flex direction={"column"}>
                        <Flex align={"center"} gap={12}>
                            <MotionDiv variants={fadeUp(0.2)}>
                                <Flex className={styles.avatar}>
                                    <Avatar src={"/avatar.jpg"}/>
                                </Flex>
                            </MotionDiv>
                            <MotionDiv variants={fadeUp(0.6)}>
                                <Text fz={32} fw={700}>sam</Text>
                            </MotionDiv>
                        </Flex>

                        <Flex direction={"column"} ml={58} gap={0}>
                            <MotionDiv variants={fadeUp(1.2)}>
                                <Text fz={18} fw={600} fs={"italic"} mb={2}>Software Engineer</Text>
                            </MotionDiv>
                            <MotionDiv variants={fadeUp(1.6)}>
                                <Text fz={18} fw={550} mb={16}>sam@capysoft.app</Text>
                            </MotionDiv>
                            <MotionDiv variants={iconRow}>
                                <Flex gap={"xs"}>
                                    {icons.map((icon, i) => {
                                        const Icon = icon.icon;
                                        return (
                                            <motion.div
                                                key={i}
                                                variants={iconOne}
                                                whileHover={{y: -2, rotate: 0, scale: 1.06}}
                                                whileTap={{scale: 0.96}}
                                                transition={{duration: 0.18}}
                                            >
                                                <LinkNewTab url={icon.link}>
                                                    <Icon className={styles.icon}/>
                                                </LinkNewTab>
                                            </motion.div>
                                        );
                                    })}
                                </Flex>
                            </MotionDiv>
                        </Flex>
                    </Flex>
                </Flex>
            </MotionDiv>
        </BackgroundImage>
    );
}
