import { defineStyleConfig } from '@chakra-ui/react';
import CampImg from '@/assets/imgs/camp.jpeg';
const loginContainer = defineStyleConfig({
  baseStyle: {
    bgColor: '#fafafa',
    minH: '100vh',
    minW: '100vw'
  }
});

const loginGrid = defineStyleConfig({
  baseStyle: {
    display: 'grid',
    columns: 2,
    h: '100vh'
  }
});

const loginImgItem = defineStyleConfig({
  baseStyle: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: CampImg,
    h: '100%'
  }
});

const loginCardContainer = defineStyleConfig({
  baseStyle: {
    display: 'grid',
    placeContent: 'center',
    colSpan: { base: 2, md: 1 }
  }
});

const loginCardGrid = defineStyleConfig({
  baseStyle: {
    display: 'grid',
    h: '100%',
    p: '10',
    placeContent: 'center',
    backgroundImage: { base: CampImg, md: 'none' }
  }
});

const loginCard = defineStyleConfig({
  baseStyle: {
    bgColor: 'brand.white',
    borderRadius: '10px',
    p: 8,
    shadow: 'md',
    position: 'relative',
    zIndex: '99'
  }
});

const loginLogo = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    justify: 'center',
    mb: '3'
  }
});

const loginFormContainer = defineStyleConfig({
  baseStyle: {
    gap: 5,
    display: 'flex',
    direction: 'column',
    w: '100%'
  }
});

const loginButton = defineStyleConfig({
  baseStyle: {
    type: 'submit',
    w: '50%',
    mx: 'auto',
    _hover: { shadow: 'lg' }
  }
});

const loginOverlay = defineStyleConfig({
  baseStyle: {
    display: { base: 'block', md: 'none' },
    position: 'absolute',
    top: '0',
    left: '0',
    h: '100%',
    w: '100%',
    backdropFilter: 'blur(5px)'
  }
});
const loginModule = {
  loginContainer,
  loginGrid,
  loginImgItem,
  loginCardContainer,
  loginCardGrid,
  loginCard,
  loginLogo,
  loginFormContainer,
  loginButton,
  loginOverlay
};

export default loginModule;
