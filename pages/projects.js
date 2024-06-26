import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import PGTPP from '../public/images/projects/PGTPP.png'
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
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="portfolio" thumbnail={portfolioSS} title="Portfolio" href="/">
            This portfolio is my newest project I&apos;ve been working on!
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
