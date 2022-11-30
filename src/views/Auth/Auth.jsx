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
  GridItem,
  SimpleGrid,
  Heading,
  useStyleConfig
} from '@chakra-ui/react';
// Local components
import { Logo } from '@/components/atoms/icons';
import { useAuth } from '@/hooks';
import CampImg from '@/assets/imgs/camp.jpeg';

const ROLE_ROUTES = {
  member: '/dashboard',
  admin: '/admin'
};

const Auth = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  const onSubmit = async (credentials) => {
    const user = await login(credentials);
    navigate(ROLE_ROUTES[user.role]);
  };

  const styles = {
    container: useStyleConfig('loginContainer'),
    loginImg: useStyleConfig('loginImgItem'),
    cardContainer: useStyleConfig('loginCardContainer'),
    cardGrid: useStyleConfig('loginCardGrid'),
    card: useStyleConfig('loginCard'),
    logo: useStyleConfig('loginLogo'),
    loginForm: useStyleConfig('loginFormContainer'),
    button: useStyleConfig('loginButton'),
    overlay: useStyleConfig('loginOverlay')
  };

  return (
    <Box __css={styles.container}>
      <Box
        __css={styles.loginImg}
        w="100%"
        position="absolute"
        h="100vh"
        zIndex="1"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundImage={CampImg}
      />
      <SimpleGrid columns={2} h="100vh">
        <GridItem
          display={{ base: 'none', md: 'grid' }}
          colSpan={{ base: 0, md: 1 }}
          placeContent="center"
          zIndex={10}
        ></GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Box
            p="10"
            h="100%"
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems={'center'}
          >
            <Box
              bgColor="brand.white"
              borderRadius="10px"
              w={{ base: '100%', xl: '60%' }}
              h="fit-content"
              p="10"
              shadow="md"
              position="relative"
              zIndex="99"
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex gap={5} direction={'column'} w="100%">
                  <Logo
                    cursor="pointer"
                    mx="auto"
                    onClick={() => navigate('/')}
                  />

                  <Heading
                    as="h2"
                    size="lg"
                    textAlign={'center'}
                    color="brand.primary"
                  >
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
                    mx="auto"
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
                <Text
                  fontSize={'14px'}
                  textAlign="center"
                  mt="3"
                  cursor="pointer"
                >
                  ¿Deseas registrar tu club en{' '}
                  <Text as="span" color="brand.primary">
                    Golfincorp
                  </Text>
                  ?
                </Text>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </SimpleGrid>
      <Box
        display={{ base: 'block' }}
        position="absolute"
        top="0"
        clipPath={'polygon(100% 0, 100% 100%, 0 100%, 54% 56%)'}
        left="0"
        h="100%"
        zIndex="2"
        w="100%"
        boxShadow={'28px -24px 84px 0px rgba(0,0,0,1)'}
        // bgGradient={'linear(to-rb, rgba(0,0,0,0.0.1), rgba(119, 157, 24, 0.9))'}
        backdropFilter="blur(30px)"
      />
    </Box>
  );
};

export default Auth;
