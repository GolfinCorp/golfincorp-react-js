import { Button, Grid, Flex } from '@chakra-ui/react';
import Logo from '@/components/atoms/icons/Logo';
import { useNavigate } from 'react-router-dom';
const Sidebar = ({ menuItems }) => {
  const { menu, setting } = menuItems;
  const navigate = useNavigate();

  const handleRouter = (link) => {
    navigate(link);
  };
  return (
    <>
      <Logo />
      <Flex my="10" flexDir="column" h="100%" gap="30vh">
        <Grid gap="5">
          {menu?.map((item, index) => (
            <Button
              variant={'ghost'}
              key={`${index}${item.link}`}
              justifyContent="start"
              gap="3"
              alignItems={'center'}
              leftIcon={item.icon}
              onClick={() => handleRouter(item.link)}
            >
              {item.title}
            </Button>
          ))}
        </Grid>
        <Grid gap="2">
          {setting?.map((item, index) => (
            <Button
              variant={'ghost'}
              key={`${index}${item.link}`}
              justifyContent="start"
              gap="3"
              alignItems={'center'}
              leftIcon={item.icon}
              onClick={() => handleRouter(item.link)}
            >
              {item.title}
            </Button>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default Sidebar;
