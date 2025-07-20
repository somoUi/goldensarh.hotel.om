import React, { useEffect, useState } from 'react'
import { Grid, Text, Flex, Heading, Button, Box, Image } from '@chakra-ui/core'

// الصور التي ستُعرض بالتتابع
const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg',
  '/img6.jpg',
  '/img7.jpg',
]

// مكوّن عرض الشرائح
const Slideshow = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 2500) // المدة بين كل صورة

    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      position="absolute"
      top="10%"
      left="5%"
      width={['0%', '0%', '0%', '40%', '60%']}
      maxW="660px"
      height="400px"
      overflow="hidden"
      border="10px solid white"
      borderRadius="md"
      display={['none', 'none', 'none', 'block', 'block']}
    >
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
          opacity={i === index ? 1 : 0}
          transition="opacity 1s ease-in-out"
          zIndex={i === index ? 1 : 0}
        />
      ))}
    </Box>
  )
}

const Service: React.FC = () => {
  return (
    <Box position="relative">
      {/* عرض الصور المتتابعة */}
      <Slideshow />

      <Grid
        backgroundColor="orange.500"
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(3, 1fr)"
      >
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          alignItems="center"
          maxW="850px"
          color="white"
          paddingY="88px"
          gridColumn={['2 / 12', '2 / 12', '2 /12', '7 / 13', '7 / 13']}
          gridRow="1 / 4"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="extrabold"
            mb="8px"
            alignSelf="flex-start"
          >
            الغرف الفاخرة – عندما تُصبح الراحة فنًا
          </Heading>
          <Text
            fontSize="sm"
            mb="20px"
            alignSelf="flex-start"
            textAlign="left"
            lineHeight="23px"
          >
            في فندق الصرح الذهبي، كل غرفة هي لوحة فنية مصممة بعناية، تجمع بين الحداثة المطلقة والفخامة الهادئة.
            نقدم لك مساحات معيشة عصرية تُلبي أعلى معايير الرفاهية، من السرير الفاخر المصنوع من أقمشة مختارة بعناية ليمنحك نوماً عميقًا، إلى الإضاءة الذكية التي تنسجم مع مزاجك، وكل زاوية مصمّمة لتمنحك شعورًا بالتوازن والسكينة.

            ✨ غرف VIP بإطلالات ساحرة
            استمتع بإطلالات بانورامية على المدينة من نوافذ واسعة، تُضيء الغرفة بضوء طبيعي ساحر وتُضفي شعورًا بالانفتاح والأناقة.

            🛁 حمامات جاكوزي… حيث تبدأ الرفاهية
            تم تزويد بعض الغرف بحمامات فاخرة تحتوي على جاكوزي مصمم للاسترخاء، مع تفاصيل من الرخام والإضاءة الهادئة التي تمنحك أجواء سبا حقيقية داخل خصوصية غرفتك.

            🪄 تصميم داخلي أنيق
            من الأرضيات اللامعة، إلى الأثاث العصري المصمم بدقة، تُشعرك كل تفصيلة في الغرفة أنك في مكان يتجاوز التوقعات.
            توفر الغرف تقنيات حديثة للتحكم بالإنارة، التكييف، والستائر بلمسة واحدة.

            🛎️ خدمات تلبي كل احتياج
            خدمة غرف متوفرة على مدار الساعة، نظافة يومية احترافية، وميني بار مجهّز بعناية لأجلك.
          </Text>
          <Button
            alignSelf="flex-start"
            variantColor="white"
            backgroundColor="#fff"
            color="orange.500"
            width="fit-content"
          >
            Learn More
          </Button>
        </Flex>
      </Grid>
    </Box>
  )
}

export default Service
