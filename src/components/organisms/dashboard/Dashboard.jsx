import { useRef } from 'react';
import {
  SimpleGrid,
  GridItem,
  Box,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import {
  MdCalendarToday,
  MdAutoGraph,
  MdOutlineSupervisorAccount,
  MdSettings,
  MdMenu,
  MdLogout
} from 'react-icons/md';
import Sidebar from './Sidebar';
import Logo from '@/components/atoms/icons/Logo';
import { Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks';

const Dashboard = () => {
  const { logout } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const mockItems = {
    menu: [
      {
        title: 'Calendario',
        link: '/admin',
        icon: <MdCalendarToday />
      },
      {
        title: 'Miembros',
        link: '/admin/members',
        icon: <MdOutlineSupervisorAccount />
      },
      {
        title: 'Pagos',
        link: '/admin/payments',
        icon: <MdAutoGraph />
      }
    ],
    setting: [
      {
        title: 'Configuración',
        link: '/admin/settings',
        icon: <MdSettings />
      },
      {
        title: 'Cerrar Sesión',
        link: '',
        icon: <MdLogout />,
        onClick: logout
      }
    ]
  };
  return (
    <>
      <Flex
        display={{ base: 'flex', md: 'none' }}
        p="5"
        w="100%"
        justify={'space-between'}
        align="center"
      >
        <Box>
          <IconButton
            icon={<MdMenu />}
            minW="50px"
            variant="ghost"
            onClick={onOpen}
          />
        </Box>
        <Box justifySelf={'center'}>
          <Logo />
        </Box>
      </Flex>
      <SimpleGrid columns={12}>
        <GridItem
          colSpan={{ base: 0, md: 3, lg: 2 }}
          display={{ base: 'none', md: 'grid' }}
          h="80vh"
        >
          <Box p="5" h="100%">
            <Sidebar menuItems={mockItems} />
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 9, lg: 10 }}>
          <Box p="5">
            <Outlet />
          </Box>
        </GridItem>
      </SimpleGrid>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box p="5" h="100%">
            <Sidebar menuItems={mockItems} />
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Dashboard;
