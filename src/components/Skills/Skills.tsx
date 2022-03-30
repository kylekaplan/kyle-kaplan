import React from "react";
import { Wrap, Box, Grid, Heading, Tag } from "@chakra-ui/react";
import { useSkills } from "../../hooks/useSkills";
import { ISkill } from "../../interfaces/skill";

export const Skills = () => {
  const { frameworks, languages, uiLibraries, libraries, databases, blockchains } = useSkills();

  return (
    <Box>
      <Heading as="h1" size="xl">
        My Skills
      </Heading>
      <Wrap spacing="20px" mt="10" mb="10">
        <Box>
          <Grid
            // templateColumns="repeat(4, 1fr)"
            templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }}
            gap={3}
          >
            {libraries.map((library: ISkill) => (
              <Tag size="lg" key={library.name}>
                {library.name}
              </Tag>
            ))}
            {languages.map((language: ISkill) => (
              <Tag size="lg" key={language.name}>
                {language.name}
              </Tag>
            ))}
            {frameworks.map((framework: ISkill) => (
              <Tag size="lg" key={framework.name}>
                {framework.name}
              </Tag>
            ))}
            {uiLibraries.map((lib: ISkill) => (
              <Tag size="lg" key={lib.name}>
                {lib.name}
              </Tag>
            ))}
            {databases.map((db: ISkill) => (
              <Tag size="lg" key={db.name}>
                {db.name}
              </Tag>
            ))}
            {blockchains.map((bc: ISkill) => (
              <Tag size="lg" key={bc.name}>
                {bc.name}
              </Tag>
            ))}
          </Grid>
        </Box>
      </Wrap>
    </Box>
  );
};
