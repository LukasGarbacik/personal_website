import { FC, useState } from "react";

import { Accordion, AccordionItem } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { Expandable } from "pages/about/common/expandable/Expandable";
import { ArticleTitle } from "pages/about/common/title/Title";

export const Education: FC = () => {
    const [educationExpanded, setEducationExpanded] = useState<number[]>([]);

    return (
        <>
            <ArticleTitle title="Education" />

            <br />

            <Accordion pt="2" allowMultiple index={educationExpanded} id="education">
                {configs.about.educations.map((edu, idx) => {
                    const key = `panel-${edu.school}-${edu.degree}`;
                    return (
                        <AccordionItem p="0" border="0" mb="4" key={key}>
                            <Expandable
                                title={edu.school}
                                subTitle={edu.degree}
                                subTitle2={edu.minor}
                                date={edu.duration}
                                content={edu.content}
                                id={edu.id}
                                idx={idx}
                                onChange={(value: number[]) => setEducationExpanded(value)}
                                expanded={educationExpanded}
                            />
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </>
    );
};
