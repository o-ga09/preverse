import { Box, Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { GameStartButton, HelpButton, ReleaseButton } from '../component/Button';
import { Footer } from '../component/Footer';
import { HelpModal } from '../component/Modal';

function Top() {
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
    const { isOpen, onClose, onOpen } = useDisclosure();
    const title = 'Preverse';
    const subtitle = '都道府県反転クイズ'

    const handleHelpButton = () => {
        onOpen();
    };

  return (
    <Flex direction='column' minH='100vh' bgGradient='linear(to-r, blue.100, green.300)'>
        <Box
            w={isSmallerThan600 ? '100%' : '80%'}
            display='flex'
            justifyContent='flex-end'
            alignItems='center'
            p={4}
        >
            <ReleaseButton title='お知らせ' uri='/release' />
        </Box>

        <Box
            className='header'
            display='flex'
            h='150px'
            color="black"
            fontWeight='bold'
            fontSize={isSmallerThan600 ? '70px' : '100px'}
            alignItems='center'
            justifyContent='center'
        >
            {title}
        </Box>

        <Box
            className='header'
            display='flex'
            h='150px'
            color="black"
            fontWeight='bold'
            fontSize={isSmallerThan600 ? '35px' : '50px'}
            alignItems='center'
            justifyContent='center'
        >
            {subtitle}
        </Box>

        <Flex 
            direction={isSmallerThan600 ? 'column' : 'row'}
            display='flex'
            justifyContent='center'
            pt={isSmallerThan600 ? 8 : 32}
        >
            <Box
                display='flex'
                w='300px' 
                p={4}
                justifyContent='center'
                marginX={isSmallerThan600 ? 'auto' : ''}
            >
                <GameStartButton title='play !' uri='/play' />
            </Box>
        </Flex>

        <Box
            display='flex'
            justifyContent='center'
            paddingTop={isSmallerThan600 ? 8 : 32}
        >
            <HelpButton onClick={handleHelpButton} />
        </Box>

        <HelpModal isOpen={isOpen} onClose={onClose} result={0} />

        <Footer />
    </Flex>
  )
}

export default Top