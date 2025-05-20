import { FC } from "react";
import { Box, Stack, Text, Heading, Flex } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { ArticleTitle } from "pages/about/common/title/Title";

export const Education: FC = () => {
    return (
        <>
            <ArticleTitle title="Education" />

            <br />

            <Stack spacing={6} id="education">
                {configs.about.educations.map((edu) => {
                    return (
                        <Box key={`education-${edu.id}`} mb={4}>
                            <Flex justifyContent="space-between" alignItems="baseline">
                                <Heading size="md">{edu.school}</Heading>
                                <Text fontSize="sm" color="gray.500">{edu.duration}</Text>
                            </Flex>
                            <Text fontWeight="medium" mt={1}>{edu.degree}</Text>
                            {edu.minor && <Text fontSize="sm" mt={1}>{edu.minor}</Text>}
                            <Text mt={3}>{edu.content}</Text>
                        </Box>
                    );
                })}
            </Stack>
        </>
    );
};
