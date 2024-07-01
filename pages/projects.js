import { Container, Heading, SimpleGrid, Box, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import PGTPP from '../public/images/projects/PGTPP.png'
import umeet from '../public/images/projects/umeet.png'
import portfolioSS from '../public/images/projects/portfolioSS.png'


const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <WorkGridItem id="PGTPP" title="Pebbles Goes To Penguin Prison" thumbnail={PGTPP}>
            Collaborated in a team to create &quot;Pebbles Goes to Penguin Prison&quot;, a top-down 2D 
            roguelike dungeon crawler game set in the challenging environment of Penguin Prison.
            <Box mt={2}>
              <Text as="b">Technologies Used:</Text> Godot, Aseprite
            </Box>
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="UM" title="Uni Meet" thumbnail={umeet}>
            Uni Meet is a social connectivity platform designed for university students to meet
            other students based on shared academic and extracurricular interests!
            <Box mt={2}>
              <Text as="b">Technologies Used:</Text> Java, Firebase
            </Box>
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="portfolio" thumbnail={portfolioSS} title="Portfolio" href="/">
            This portfolio is my newest project I&apos;ve been working on!
            <Box mt={2}>
              <Text as="b">Technologies Used:</Text> Javascript, Blender
            </Box>
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
