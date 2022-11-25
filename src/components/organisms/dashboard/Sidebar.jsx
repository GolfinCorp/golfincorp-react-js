import React from 'react';
import { Button, Grid, Flex } from '@chakra-ui/react';
import Logo from '@/components/atoms/icons/Logo';
import { MdCalendarToday } from 'react-icons/md';

const Sidebar = ({ menuItems }) => {
  const { menu, setting } = menuItems;
  console.log(menu);
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
