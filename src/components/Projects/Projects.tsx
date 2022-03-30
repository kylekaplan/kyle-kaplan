import React from "react";
import { FC, useState } from "react";
import {
  GridItem,
  Heading,
  SimpleGrid,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";

interface ProjectsProps {}

export const Projects: FC<ProjectsProps> = () => {
  const [size] = useState<string>("full");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const ProjectButton: any = styled(WrapItem)`
    border-radius: 50px;

    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <>
      <Heading as="h1" size="xl">
        What I&apos;ve worked on
      </Heading>
      <Wrap spacing="20px" mt="10" mb="10">
        <SimpleGrid columns={[1, null, 3]} spacing="20px">
          {projects.map((work: any) => (
            <ProjectButton onClick={() => onOpen()} key={work.id}>
              <ProjectCard project={work} />
            </ProjectButton>
          ))}
        </SimpleGrid>
      </Wrap>
    </>
  );
};
