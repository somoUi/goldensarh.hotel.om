import React from 'react'
import { Flex, Heading, Image, Text } from '@chakra-ui/core'
import Button from './button'

const DreamHome: React.FC = () => {
  return (
    <Flex width="100%" flexDirection="column" alignItems="center" mt="24">
      <Heading
        as="h3"
        mb="20"
        fontSize={['2xl', '2xl', '3xl', '3xl', '3xl']}
        textAlign="center"
        marginX="auto"
        style={{
          fontFamily: "'Cairo', sans-serif",
          color: '#fab067',
        }}
      >
        ✨ أبرز الأسباب لاختيار استراحتنا الفاخرة اليوم
      </Heading>
      <Flex
        width="90%"
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        justifyContent="space-between"
        alignItems="center"
        maxW="1280px"
        mb="12"
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <Flex flexDirection="column" fontSize="xl">
            <Text
              fontWeight="bold"
              style={{
                fontFamily: "'Cairo', sans-serif",
                color: '#fab067',
              }}
            >
              🕊️ بداية استثنائية ترسم الفرق
            </Text>
            <Text
              fontSize="sm"
              style={{
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 500,
                color: '#082d35',
              }}
            >
              نحن لا نُرحب بك فقط، بل نُهيئ لك تجربة وصول تليق بذوقك الرفيع، حيث يُستقبل الضيف بهدوء وابتسامة دافئة تَعبّر عن روعة المكان.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <Flex flexDirection="column" fontSize="xl">
            <Text
              fontWeight="bold"
              style={{
                fontFamily: "'Cairo', sans-serif",
                color: '#fab067',
              }}
            >
              🏕️ استراحة فاخرة تُجسد التميّز
            </Text>
            <Text
              fontSize="sm"
              style={{
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 500,
                color: '#082d35',
              }}
            >
              ليست إقامة عادية، بل تجربة حسّية متكاملة. خيم مصممة بذوق راقٍ، وجلسات هادئة تعكس جمال وخصوصية المكان.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <Flex flexDirection="column" fontSize="xl">
            <Text
              fontWeight="bold"
              style={{
                fontFamily: "'Cairo', sans-serif",
                color: '#fab067',
              }}
            >
              🌌 أجواء فريدة تأسر الحواس
            </Text>
            <Text
              fontSize="sm"
              style={{
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 500,
                color: '#082d35',
              }}
            >
              سواء تحت ضوء القمر في هدوء الليل أو بين أضواء خافتة وأصوات الطبيعة، نقدم لك لحظات من الاسترخاء الحقيقي وسط فخامة لا مثيل لها.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Button>احجز تجربتك الآن</Button>
    </Flex>
  )
}

export default DreamHome
