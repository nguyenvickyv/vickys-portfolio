import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import redirect from '../components/email'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m Vicky! I am an aspiring software engineer studying Computer Science at the University of Houston •ᴗ•.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Vicky Nguyen
          </Heading>
          <p> Student / Programmer / Your Future Employee </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/vicky.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Vicky is an aspiring software engineer with lots of passions and aspirations!
          Outside of school, she has a passion for art, fashion, and DIY projects.
          Currently, she is working on this portfolio, and a new project that incorporates
          her love for fashion, her work experience in retail, and passion in Computer Science!
        </Paragraph>
        
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="pink"
          >
            Projects!
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Des Moines, Iowa
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Graduated High School with summa cum laude at Cypress Ranch High School
          in Cypress, TX
        </BioSection>
        <BioSection>
          <BioYear>2021-now</BioYear>
          Attending the University of Houston studying Computer Science with 
          a minor in Mathematics!
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Worked as a Full Time Sales Supervisor at Gentle Monster
        </BioSection>
        <BioSection>
          <BioYear>2024-now</BioYear>
          Working as a Full Time Floor Manager at OAK+FORT
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Fashion, art, k-dramas, reading, stand-up comedy, and going to concerts!
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          where to find me ⊹₊ ⋆
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/nguyenvickyv" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<IoLogoGithub />}
              >
                @nguyenvickyv
              </Button>
            </Link>
          </ListItem>
        </List>
        <List>
          <ListItem>
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<EmailIcon />}
                onClick={redirect}
              >
                Email me here!
              </Button>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'