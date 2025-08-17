import { FC } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

import { PageHeader } from "shared/page-header/PageHeader";
import { Socials } from "shared/socials/Socials";

export const Footer: FC = () => {
    return (
        <>
            <PageHeader label="Please feel free to reach out!" />
            <Box pt="16" display="inline-flex">
                <Socials delay={100}/>
            </Box>
            <Flex
                pt="4"
                pb="2"
                fontSize="sm"
                color="gray.500"
                justifyContent={{ base: "center", md: "space-between" }}
                direction={{ base: "column", md: "row" }}
            >
                <Text>&copy; {new Date().getFullYear()} All rights reserved. Version 2.2.2</Text>
            </Flex>
        </>
    );
};
