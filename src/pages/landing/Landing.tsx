import { FC } from "react";

import { Center, Container, Heading, Image, HStack, Stack, Flex, Box, IconButton, Button } from "@chakra-ui/react";

import { Content, configs, useContent, MarkdownFile } from "shared/content/Content";
import { Socials } from "shared/socials/Socials";
import { AboutPageId } from "utils/useScroll";
import { ChevronDownIcon } from "utils/Icons";

export const Landing: FC = () => {
    const content = useContent(MarkdownFile.Landing);

    const scrollIntoView = () => {
        const featuredHeader = document.getElementById(AboutPageId);

        if (featuredHeader) {
            featuredHeader.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box id="page-landing">
            <Center pb={{ base: 6, md: 14 }}>
                <HStack spacing="16" justifyContent="space-between" alignItems="flex-start">
                    <Stack flex={{ base: "1", lg: "0.6" }} spacing="16">
                        <Stack spacing="8">
                            <Heading
                                fontSize={{ base: "5xl", md: "7xl" }}
                                lineHeight="1"
                                data-aos="fade-down"
                                data-aos-delay="400"
                            >
                                {configs.landing.headline}
                            </Heading>
                            <Content data-aos="fade-up" data-aos-delay="500" fontSize="lg">
                                {content.landing}
                            </Content>
                        </Stack>

                        <Socials delay={1000} />
                    </Stack>
                    <Container
                        alignItems="center"
                        flex="0.4"
                        display={{ base: "none", lg: "block" }}
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <picture>
                            <source type="image/webp" srcSet={configs.landing.picture}></source>
                            <source type="image/jpeg" srcSet={configs.landing.jpg}></source>
                            <Image 
                                borderRadius="2xl" 
                                src={configs.landing.jpg} 
                                alt={`face-cover-image`}
                                w="100%"  // makes image fill container width
                                maxW="700px"  // maximum width
                                h="auto"  // maintains aspect ratio
                            />
                        </picture>
                    </Container>
                </HStack>
            </Center>
        </Box>
    );
};
