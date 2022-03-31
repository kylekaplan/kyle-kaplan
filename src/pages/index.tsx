import * as React from "react"
import { Container, Heading, VStack } from "@chakra-ui/react";
import { user } from "../data/user";
import { Header } from "../components/Header/Header";
import { Pfp } from "../components/Pfp/Pfp";
import { NavSection } from "../components/NavSection/NavSection";
import { Skills } from "../components/Skills/Skills";

// styles
import "../styles/normalize.css"
import "../styles/globals.css"
import { Projects } from "../components/Projects/Projects";

// markup
const IndexPage = () => {
  return (
    <Container maxW="container.xl" p="10">

      <VStack spacing="10">
        <Container maxW="container.lg">
          <Header />
          <Pfp />
        </Container>

        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" pb="4">
            {user.firstName} {user.lastName}
          </Heading>
          <Heading as="h2" size="lg">
            {user.title}. {user.subtitle}.
          </Heading>
        </Container>

        <Container maxW="container.lg">
          <NavSection user={user} />
        </Container>

        <Container maxW="container.lg">
          <Skills />
        </Container>

        <Container maxW="container.lg" id="projects">
          <Projects />
        </Container>

        {/* <Container maxW="container.sm">
          <Box w="100%">
            <Text fontSize={22} as="i">
              An indicator has the value when it&apos;s indicating something. But
              if it&apos;s not indicating something, it shouldn&apos;t be there.
            </Text>
          </Box>
          <Box w="100%" textAlign="right">
            <Text fontSize={22} as="strong">
              - Jonathan Ive, Apple
            </Text>
          </Box>
        </Container> */}

        <Container maxW="container.lg">
          {/* <Footer /> */}
        </Container>
      </VStack>
    </Container>
  )
}

export default IndexPage
