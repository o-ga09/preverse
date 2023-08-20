import { Box,Image } from "@chakra-ui/react";
import { useState } from "react";
import { SelectAnswer } from "../component/SelectAnswer";

function App() {
  const [ q_num, setQNum ] = useState(1);
  const title = `問題${q_num}`;
  const handleAnswer = (num:number) => {
    console.log("ok",num);
  };
  return (
    <>
      <Box
        h='100vh'
        bgGradient='linear(to-r, blue.100, green.300)'
      >
        <Box
          display='flex'
          justifyContent='center'
          fontSize={32}
          fontWeight='bold'
        >
          {title}
        </Box>

        <Box
          display='flex'
          justifyContent='center'
        >
          <Box
            w={{ base: '80%', md: '500px'}}
            h={{ base: '80%', md: '500px'}}
          >
            <Image
              src='/sample.png'
              alt="反転された画像"
              css={{ transform: 'scaleX(-1)', maxWidth: '100%' }}
            />
          </Box>
        </Box>

        <SelectAnswer answer1="test1" answer2="test2" answer3="test3" onClick={handleAnswer} />

      </Box>
    </>
  );
}

export default App;
