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
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {DaDataParty, DaDataSuggestion, PartySuggestions} from 'react-dadata';
import {settings} from '../settings';
import 'react-dadata/dist/react-dadata.css';
import AgreementPersonalData from "./agreement_personal_data";
import logo from '../logo_vertera.svg';
import {useForm} from "react-hook-form";


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
  const [agreeDisabled, setAgreeDisabled] = useState(true)
  const [dadata, setDadata] = useState<DaDataSuggestion<DaDataParty> | undefined>();
  const forms = useForm();

  const button_agree = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked){
      setAgreeDisabled(false)
    }
    else {
      setAgreeDisabled(true)
    }
  }

  const submit = (data: any) => {
    forms.clearErrors('inn')
    console.log('dddd')

    if (!dadata?.data.inn) {
      forms.setError("inn", {
        type: "invalid",
        message: 'Не заполнено поле',
      });
      return;
    }
  };

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

        <form onSubmit={forms.handleSubmit(submit)}>
          <Card>
            <Stack spacing="6">
              <FormControl id="org_name">
                <FormLabel>Укажите название ООО, ИП или ИНН</FormLabel>
                <PartySuggestions
                  {...forms.register("org_name") }
                  token={settings.DaDataKey}
                  onChange={setDadata}
                  count={3}
                  minChars={4}
                  filterStatus={['ACTIVE']}
                />
                {
                  forms.formState.errors.inn?.type === 'invalid' &&
                  <Text align={"left"} fontSize='md' color='red' pt={2}>
                    { forms.formState.errors.inn.message }
                  </Text>
                }
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
          </form>

      </Box>
      <AgreementPersonalData isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
