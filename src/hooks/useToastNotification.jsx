import { useToast } from '@chakra-ui/react';
/**
 *
 * @returns handleToast, handleErrorToast, handleAsyncToast
 * meant to handle dinamyc feedback for the user
 */
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

  // Used to handle server errors
  const handleErrorToast = (error) => {
    handleToast('error', {
      title: `Ha ocurrido un error ${error.response.status}`,
      description: `${error.response.data.error || error.message}`
    });
  };

  const handleAsyncToast = async (callBack, msg, loadMsg) => {
    /**
     * @params
     * - callBack: API consuming function called
     * - msg: Success message
     * - loadMsg: message while loading
     * @returns async response || False
     * handles an async request and notifies user of its status while its processing
     */
    handleToast('info', {
      title: loadMsg,
      description: ''
    });
    const res = await callBack;
    console.log(res);
    if (String(res.status)[0] === '2') {
      handleToast('success', {
        title: msg.title,
        description: msg.description
      });
      return res;
    } else {
      handleToast('error', {
        title: `Ha ocurrido un problema ${res.status}`,
        description: `${res.data.error}`
      });
      return false;
    }
  };

  return { handleToast, handleErrorToast, handleAsyncToast };
};

export default useToastNotification;
