import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'

const NotFound = () => {
  return (
    <Container>
      <Section delay={0.1}>
      <Heading as="h1">Not found</Heading>
      <Text>404 Error: This page is on a coffee break. Maybe grab one too?</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/index" colorScheme="teal">
          Return to home
        </Button>
      </Box>
      </Section>
    </Container>
  )
}

export default NotFound
