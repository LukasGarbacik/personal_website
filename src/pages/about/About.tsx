import { FC } from "react";

import { Box, Flex, Image} from "@chakra-ui/react";

import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
import { Education } from "pages/about/education/Education";
import { Experience } from "pages/about/experience/Experience";
import { Skills } from "pages/about/skills/Skills";

export const About: FC = () => {
    const content = useContent(MarkdownFile.About);


    return (
        <Box>
            <Flex pt="8" gap={{ base: 6, md: 6, lg: 12 }} direction={{ base: "column", md: "row" }}>
                <Box flex="0.35" data-aos="fade-up">
                    <picture>
                        <source type="image/webp" srcSet={configs.common.mainPicture}></source>
                        <source type="image/jpeg" srcSet={configs.common.mainPictureJPG}></source>
                        <Image borderRadius="xl" src={configs.common.mainPicture} w="100%" alt="profile image" />
                    </picture>
                </Box>
                <Box flex="0.85">
                    <Box pt="4" data-aos="fade-up" data-aos-delay="400">
                        <Content fontSize="lg">{content.about}</Content>
                    </Box>
                </Box>
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 16, md: 6, lg: 12 }}
                mt="16"
                justifyContent="space-between"
            >
                <Box flex="0.6" overflow="hidden">
                    <Education />
                </Box>
                <Box flex="0.6" overflow="hidden">
                    <Experience />
                </Box>
            </Flex>
            <Box pt="16">
                <Skills />
            </Box>
        </Box>
    );
};
