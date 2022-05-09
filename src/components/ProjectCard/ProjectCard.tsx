import React, { FC } from "react";
import styled from "@emotion/styled";
import {
  Wrap,
  Box,
  Image,
  Button,
  HStack,
  Spacer,
  Tag,
} from "@chakra-ui/react";
import { GoLinkExternal } from "@react-icons/all-files/go/GoLinkExternal";
import { Anchor } from "../../components/Anchor/Anchor";
import { IProject } from "../../interfaces/project";

const StyledImage = styled(Image)`
  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }
`;

interface ProjectCardProps {
  project?: IProject;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  if (!project || !project.url) {
    return null;
  }
  return (
    <Box
      width="100%"
      borderWidth="1px"
      overflow="hidden"
      boxShadow="md"
      borderRadius="lg"
      height="100%"
      position="relative"
    >
      <HStack p="4">
        <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {project?.title}
        </Box>
        <Spacer />
        <Anchor href={project.url} target="_blank">
          <Button aria-label="visit-project" size="sm">
            <GoLinkExternal />
          </Button>
        </Anchor>
      </HStack>
      <Box overflow="hidden">
        <StyledImage
          src={project.imageUrl}
          alt={project.imageAlt}
          overflow="hidden"
          layout="fill"
        />
      </Box>
      <Box pl="6" pr="6" pb="6" pt="1" mb="5"> {/* mb is covering for absolute positioned date  */}
        <Box
          color="gray.100"
          fontSize="md"
          mt="2"
          mb="3"
        >
          <p>
            {project?.description}
          </p>
        </Box>
        {project.projectType ? (
          <Box mb="4">
            <Tag colorScheme="green">{project?.projectType}</Tag>
          </Box>
        ) : (
          <></>
        )}
        <Box display="flex" alignItems="baseline">
          <Wrap>
            {project?.tags?.map((tagName: string) => (
              <Tag colorScheme="purple" key={tagName}>
                {tagName}
              </Tag>
            ))}
          </Wrap>
        </Box>
      </Box>
      {project.date ? (
        <Box
          mb="1"
          pl={6}
          position="absolute"
          bottom={0}
          color="gray.500"
          fontSize="sm"
        >
          {project?.date}
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}
