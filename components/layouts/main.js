import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Loader from '../room-loader'


const myRoom = dynamic(() => import('../room'), {
  ssr: false,
  loading: () => <Loader />
})


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Vicky's Portfolio" />
        <meta name="author" content="Vicky Nguyen" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:title" content="Vicky Nguyen" />
        <meta property="og:type" content="website" />
        <title>Vicky Nguyen - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>


        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
