import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import PGTPP from '../public/images/projects/PGTPP.png'
import portfolioSS from '../public/projects/portfolioSS.png'

const projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <WorkGridItem id="PGTPP" title="Pebbles Goes To Penguin Prison" thumbnail={PGTPP}>
          Collaborated in a team to create "Pebbles Goes to Penguin Prison", a top-down 2D 
          roguelike dungeon crawler game set in the challenging environment of Penguin Prison.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Umeet"
            title="Umeet"
            thumbnail={PGTPP}
          >
            Contributed to the development of UMeet, a mobile app fostering
            connections among college students with shared classes and clubs
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="portfolio" thumbnail={portfolioSS} title="Portfolio" href="/">
            This portfolio is my newest project I've been working on!
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default projects
export { getServerSideProps } from '../components/chakra'
