import { Box, Text, Input, Flex, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
const UpdatePassword = ({ submitPassword }) => {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(submitPassword)}>
      <Box my="5">
        <Text>Cambiar Contraseña</Text>
        <Input placeholder="Contraseña" {...register('password')} />
      </Box>
      <Box my="5">
        <Input
          placeholder="Confirmar contraseña"
          {...register('passwordConfirm')}
        />
      </Box>
      <Flex justifyContent="end">
        <Button type="submit">Actualizar</Button>
      </Flex>
    </form>
  );
};

export default UpdatePassword;
