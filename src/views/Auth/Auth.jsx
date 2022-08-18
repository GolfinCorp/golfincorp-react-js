import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// Components
import {
  Box,
  Input,
  Flex,
  Button,
  Checkbox,
  Text,
  Heading
} from '@chakra-ui/react';
// Local components
import Container from '@/components/atoms/Container';
import { Logo } from '@/components/atoms/icons';
import useAuth from '@/hooks/auth/';

const Auth = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  const onSubmit = (credentials) => {
    login(credentials);
  };

  return (
    <Box bgColor="#fafafa">
      <Container
        h="100vh"
        w="100vw"
        display={'flex'}
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box position="absolute" top="10">
          <Logo cursor="pointer" onClick={() => navigate('/')} />
        </Box>
        <Flex
          bgColor="brand.white"
          borderRadius="6px"
          direction={'column'}
          gap={5}
          maxW="500px"
          mt={9}
          mx="auto"
          p={8}
          shadow="md"
          w="90%"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex gap={5} direction={'column'} w="100%">
              <Heading as="h2" size="lg" color="brand.primary">
                ¿Qué esperas para jugar?
              </Heading>
              <Input placeholder="Correo" {...register('email')} />
              <Input
                placeholder="Password"
                type="password"
                {...register('password')}
              />
              <Checkbox color="brand.200" fontWeight={'100'}>
                Recuérdame
              </Checkbox>
              <Button
                type="submit"
                w="50%"
                alignSelf={'center'}
                variant="primary"
                _hover={{ shadow: 'lg' }}
              >
                Iniciar Sesión
              </Button>
            </Flex>
          </form>
          <Box mt="3">
            <Text fontSize={'14px'} textAlign="center" cursor="pointer">
              ¿Miembro de un club{' '}
              <Text as="span" color="brand.primary">
                afiliado?
              </Text>{' '}
              Solicita tus datos
            </Text>
            <Text fontSize={'14px'} textAlign="center" mt="3" cursor="pointer">
              ¿Deseas registrar tu club en{' '}
              <Text as="span" color="brand.primary">
                Golfincorp
              </Text>
              ?
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Auth;
