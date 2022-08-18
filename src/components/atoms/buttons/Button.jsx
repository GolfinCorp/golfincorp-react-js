import { Button as ChakraButton } from '@chakra-ui/react';
import { string, func, object } from 'prop-types';

const Button = ({ content, click, ...props }) => {
  return (
    <ChakraButton variant={'primary'} onClick={click} {...props}>
      {content}
    </ChakraButton>
  );
};

Button.defaultProps = {
  click: () => {}
};

Button.propTypes = {
  content: string,
  click: func,
  props: object
};

export default Button;
