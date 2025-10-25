"use client";

import React from "react";
import {Avatar, BackgroundImage, Flex, Text} from "@mantine/core";
import {IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail} from "@tabler/icons-react";
import {Easing, motion, useReducedMotion, Variants} from "framer-motion";
import LinkNewTab from "@/app/components/utils/LinkNewTab";
import CopyText from "@/app/components/utils/CopyText";
import styles from "./page.module.css";

const MotionDiv = motion.div;

export default function Home() {
    const icons: ({ icon: React.ElementType; link: string })[] = [
        {icon: IconBrandLinkedin, link: '/ext/linkedin'},
        {icon: IconBrandGithub, link: '/ext/github'},
        {icon: IconBrandInstagram, link: '/ext/instagram'},
        {icon: IconMail, link: '/ext/email'},
    ];

    const reduce = useReducedMotion();
    const dur = reduce ? 0 : 0.6;
    const ease: Easing = [0.22, 1, 0.36, 1];

    // Reusable "fade up" with optional delay
    const fadeUpVariants = (delay = 0): Variants => ({
        hidden: {opacity: 0, y: 24, filter: "blur(6px)"},
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {duration: dur, delay, ease},
        },
    });

    // Stagger for the icon row
    const iconRowVariants: Variants = {
        hidden: {},
        show: {
            transition: {
                delayChildren: reduce ? 0 : 2.4,
                staggerChildren: reduce ? 0 : 0.12,
            },
        },
    };

    const iconVariants: Variants = {
        hidden: {opacity: 0, y: 12, scale: 0.9},
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {duration: dur * 0.8, ease},
        },
    };

    return (
        <BackgroundImage src={process.env.NEXT_PUBLIC_BG_IMG_SRC || "/bg.webp"}>
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
                            <MotionDiv
                                variants={fadeUpVariants(0.2)}
                                whileHover={{rotate: 180}}
                                transition={{duration: 0.50, ease}}
                            >
                                <Flex className={styles.avatar}>
                                    <Avatar src={process.env.NEXT_PUBLIC_AVATAR_IMG_SRC || "/avatar.webp"}/>
                                </Flex>
                            </MotionDiv>
                            <MotionDiv variants={fadeUpVariants(0.6)}>
                                <Text fz={32} fw={700}>{process.env.NEXT_PUBLIC_TITLE_NAME}</Text>
                            </MotionDiv>
                        </Flex>

                        <Flex direction={"column"} ml={58} gap={0}>
                            <MotionDiv variants={fadeUpVariants(1.2)}>
                                <Text fz={18} fw={600} fs={"italic"} mb={2}>{process.env.NEXT_PUBLIC_SUB_TITLE}</Text>
                            </MotionDiv>
                            <MotionDiv variants={fadeUpVariants(1.6)}>
                                <Flex align={"center"} mb={16}>
                                    <Text fz={18} fw={550}>{process.env.NEXT_PUBLIC_URL_EMAIL}</Text>
                                    <CopyText copyText={process.env.NEXT_PUBLIC_URL_EMAIL || ""}/>
                                </Flex>
                            </MotionDiv>
                            <MotionDiv variants={iconRowVariants}>
                                <Flex gap={"xs"}>
                                    {icons.map((icon, i) => {
                                        const Icon = icon.icon;
                                        return (
                                            <motion.div
                                                key={i}
                                                variants={iconVariants}
                                                whileHover={{y: -2, rotate: 10}}
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
