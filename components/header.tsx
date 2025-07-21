import React, { useEffect, useState } from 'react'
import { Flex, Grid, Heading, Box } from '@chakra-ui/core'

const images = [
  '/header-bg1.png',
  '/header-bg2.png',
  '/header-bg3.png',
  '/header-bg4.png',
  '/header-bg5.png',
]

const Header: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)
    }, 15000) // 15 ثانية
    return () => clearInterval(interval)
  }, [])

  return (
    <Box position="relative" height={['60vh', '60vh', '60vh', '70vh']} overflow="hidden">
      {images.map((img, index) => (
        <Box
          key={index}
          backgroundImage={`url(${img})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          transition="opacity 1s ease-in-out, transform 1s ease-in-out"
          opacity={index === currentImage ? 1 : 0}
          transform={index === currentImage ? 'translateX(0)' : 'translateX(100%)'}
          zIndex={index === currentImage ? 1 : 0}
        />
      ))}

      <Grid
        templateRows="1fr 1fr 1fr"
        position="relative"
        zIndex={2}
        height="100%"
      >
        <Flex
          flexDirection="column"
          gridRow="3 / 3"
          paddingX={['1.5em', '1.5em', '1.5em', '15%']}
          
        >
       
     
        </Flex>
      </Grid>
    </Box>
  )
}

export default Header
