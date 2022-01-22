import React, {useState} from "react";
import {
  Box,
  BoxProps,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import {DaDataParty, DaDataSuggestion, PartySuggestions} from 'react-dadata';
import {settings} from '../settings';
import 'react-dadata/dist/react-dadata.css';
import AgreementPersonalData from "./agreement_personal_data";
import logo from '../logo_vertera.svg';


export const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue('white', 'gray.700')}
    py="8"
    px={{ base: '4', md: '10' }}
    shadow="base"
    rounded={{ sm: 'lg' }}
    {...props}
  />
)

export default function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [inn, setInn] = useState("")
  const [agreeDisabled, setAgreeDisabled] = useState(true)

  console.log(inn)

  const data = function (dadata: DaDataSuggestion<DaDataParty> | undefined) {
    if (dadata){
      setInn(dadata?.data.inn)
    }
  }

  const button_agree = function (event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked){
      setAgreeDisabled(false)
    }
    else {
      setAgreeDisabled(true)
    }
  }

  return (
    <Box
      bg={useColorModeValue('gray.50', 'inherit')}
      minH="100vh"
      py="12"
      px={{ base: '8', lg: '10' }}
    >
      <Box maxW="xl" mx="auto">
        <Image src={logo}  mx="auto" h="8" mb={{ base: '10', md: '20' }} alt='Vertera' title='Vertera'/>

        <Heading textAlign="center" size="lg" fontWeight="light" mb="8">
          Открытие расчетного счета
        </Heading>

        <Card>
          <Stack spacing="6">
            <FormControl id="email">
              <FormLabel>Укажите название ООО, ИП или ИНН</FormLabel>
              <PartySuggestions
                token={settings.DaDataKey}
                onChange={data}
                count={3}
                minChars={4}
                filterStatus={['ACTIVE']}

              />;
            </FormControl>

            <FormControl id="agree">
              <VStack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox isRequired colorScheme={"green"} size={"md"} spacing={"0.8rem"} onChange={button_agree}>
                  Я принимаю согласие на обработку <Link href="#" color='teal.500' onClick={onOpen}>
                    персональных данных
                  </Link>
                </Checkbox>
              </VStack>
            </FormControl>

            <Button isDisabled={agreeDisabled} type="submit" colorScheme="green" size="lg" fontSize="md">
              Далее
            </Button>
          </Stack>
        </Card>
      </Box>
      <AgreementPersonalData isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
