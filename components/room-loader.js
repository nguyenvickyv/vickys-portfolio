import React, { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

// RoomSpinner Component
export const RoomSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="-1.5rem" // Center horizontally by offsetting half the width of the spinner
    mt="-1.5rem" // Center vertically by offsetting half the height of the spinner
  />
)

// RoomContainer Component
export const RoomContainer = forwardRef((props, ref) => (
  <Box
    ref={ref}
    className="room"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {props.children}
  </Box>
))

// Loader Component
const Loader = () => {
  return (
    <RoomContainer>
      <RoomSpinner />
    </RoomContainer>
  )
}

export default Loader
