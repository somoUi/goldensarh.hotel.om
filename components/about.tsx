import React, { useState, useEffect } from 'react'
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/core'
import Button from './button'

const images = [
  '/about-us-bg.png',
  '/about-us-bg-2.png',
  '/about-us-bg-3.png',
  // حط هنا روابط الصور الثانية اللي تبي تقلب بينها
]

const About: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // كل 5 ثواني

    return () => clearInterval(interval) // تنظيف الانترفوال عند التUnmount
  }, [])

  return (
    <Grid templateColumns="repeat(6, 1fr)" marginY="24" alignItems="center">
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems="center"
        paddingX={['8', '8', '8', '24', '24']}
        marginX="auto"
        maxW="850px"
      >
       <Heading
  as="h3"
  fontSize="5xl"
  mb="20px"
  alignSelf="flex-start"
  style={{
    fontFamily: "'Cairo', sans-serif",
    fontWeight: 700,
    color: '#fab067',
  }}
>
  عن فندق الصرح الذهبي
</Heading>

<Text
  fontSize="md"
  mb="20px"
  
  alignSelf="flex-start"
  textAlign="left"
  style={{
    fontFamily: 'Cairo',
    fontWeight: 400,
    color: '#06312a',
    fontSize: '14px',
  }}
>في قلب الرقي والفخامة، ينبض فندق الصرح الذهبي كواحة تلتقي فيها الأصالة مع الحداثة.
          نقدم لضيوفنا تجربة إقامة لا تُنسى، حيث يلتقي التصميم الأنيق بالخدمات الراقية في أجواء هادئة تنعش الحواس.
          نحن نحرص على أن تكون كل لحظة تقضيها معنا مليئة بالراحة والتميز، من أول استقبال يرحب بك بذوق واحترام،
          إلى غرفنا الفخمة المُزينة بعناية لتجمع بين الفخامة والدفء.
          استمتع بمرافقنا الحديثة التي تم تصميمها لتمنحك الاسترخاء التام، سواء في الاستراحات الخاصة أو تحت السماء المضيئة،
          حيث يلتقي الهدوء بالفخامة في تناغم يلامس الروح.
          فندق الصرح الذهبي.. حيث تتحول الإقامة إلى تجربة حياة تتجاوز التوقعات.
</Text>

       
        <Button>Learn More</Button>
      </Flex>

      <Box gridColumn="4 / 7">
        <Image
          src={images[currentImageIndex]}
          display={['none', 'none', 'none', 'block', 'block']}
          width="100%"
          transition="opacity 0.5s ease-in-out"
          key={images[currentImageIndex]}
        />
      </Box>
    </Grid>
  )
}

export default About
