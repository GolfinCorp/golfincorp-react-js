import { useToast } from '@chakra-ui/react';
const useToastNotification = () => {
  const toast = useToast();

  const handleToast = (status, content) => {
    const id = content.title;
    if (!toast.isActive(id))
      toast({
        id,
        title: content.title,
        description: content.description,
        status,
        position: 'bottom-left',
        duration: 3000,
        isClosable: true
      });
  };

  const handleAsyncToast = async (callBack, msg, loadMsg) => {
    // ? Could be optimized
    handleToast('info', {
      title: loadMsg,
      description: ''
    });
    const res = await callBack;
    if (res.status === 200) {
      handleToast('success', {
        title: msg.title,
        description: msg.description
      });
      return res;
    } else {
      handleToast('error', {
        title: `Ha ocurrido un problema ${res.status}`,
        description: `${res.data}`
      });
      return false;
    }
  };

  return { handleToast, handleAsyncToast };
};

export default useToastNotification;
