import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input, InputGroup, InputLeftAddon,
  Link,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import logo from "../logo_vertera.svg";
import {Card} from "./card";
import {useDropzone} from 'react-dropzone'
import {FaFileDownload} from 'react-icons/fa';
import InputMask from "react-input-mask";

export const Individual = () => {

  const {getRootProps, getInputProps, open, acceptedFiles } = useDropzone(
    {
      accept: 'image/jpeg, image/png',
      maxFiles:10,
      noClick: true,
      noKeyboard: true,
    }
  )

  const files = acceptedFiles.map((file: File) => {
    console.log(file)
    return (file.name)
  });

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

        <form>
          <Card>
            <Stack spacing="6">
              <FormControl id="phone">
                <FormLabel>Мобильный номер телефона</FormLabel>
                <InputGroup>
                  <InputLeftAddon children='+7' />
                  <Input as={InputMask} mask="999 999 99 99" name={'phone'} />
                </InputGroup>
              </FormControl>

              <FormControl id="email">
                <FormLabel>Адрес электронной почты</FormLabel>
                <Input name={'email'} type={'email'}/>
              </FormControl>

              <FormControl id="passport1">
                <FormLabel>Паспорт гражданина РФ</FormLabel>

                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Button leftIcon={<FaFileDownload />} colorScheme='green' variant='outline' onClick={open}>
                    Загрузить паспорт
                  </Button>

                  <Text fontSize={'xs'}>
                    Загрузите первую и вторую страницу паспорта, а также
                    страницу с регистрацией места жительства
                  </Text>
                </div>
                <aside>
                  {files.map(name => (
                    <Text pt={3}>{name} <Link color='red.500'>удалить</Link></Text>
                  ))}
                </aside>
              </FormControl>

              {/*<FormControl id="passport2">*/}
              {/*  <FormLabel>Паспорт <Text as='u'>страница с пропиской</Text></FormLabel>*/}
              {/*  <Input type={'file'} name={'passport2'} />*/}
              {/*</FormControl>*/}

              <Button type="submit" colorScheme="green" size="lg" fontSize="md">
                Создать заявку
              </Button>

            </Stack>
          </Card>
        </form>

      </Box>
    </Box>
  )
}
