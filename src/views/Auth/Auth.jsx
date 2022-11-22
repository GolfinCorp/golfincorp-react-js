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
  Grid,
  GridItem,
  SimpleGrid,
  Heading,
  useStyleConfig
} from '@chakra-ui/react';
// Local components
import { Logo } from '@/components/atoms/icons';
import useAuth from '@/hooks/auth/';
import CampImg from '@/assets/imgs/camp.jpeg';

const Auth = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  const onSubmit = (credentials) => {
    login(credentials);
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
      <SimpleGrid columns={2} h="100vh">
        <GridItem display={{ base: 'none', md: 'grid' }}>
          <Box __css={styles.loginImg} backgroundImage={CampImg} />
        </GridItem>
        <GridItem __css={styles.cardContainer}>
          <Grid
            h="100%"
            p="10"
            placeContent={'center'}
            backgroundImage={{ base: CampImg, md: 'none' }}
          >
            <Box
              bgColor="brand.white"
              borderRadius="10px"
              p={8}
              shadow="md"
              position="relative"
              zIndex="99"
            >
              <Flex justify="center" mb="3">
                <Logo cursor="pointer" onClick={() => navigate('/')} />
              </Flex>
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
            <Box
              display={{ base: 'block', md: 'none' }}
              position="absolute"
              top="0"
              left="0"
              h="100%"
              w="100%"
              backdropFilter="blur(5px)"
            />
          </Grid>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Auth;
