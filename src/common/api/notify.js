import {toast} from 'react-toastify';

const defaultNotify = (message, opt = {}) => toast(message, {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
    ...opt
});

export const warningNotify = (message, opt = {}) => toast.warn(message, {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
    ...opt
});

export const errorNotify = (message, opt = {}) => toast.error(message, {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
    ...opt
});
export const infoNotify = (message, opt = {}) => toast.info(message, {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
    ...opt
});

export const notify = {
    error: errorNotify,
    warning: warningNotify,
    info: infoNotify,
    def: defaultNotify
};
export default defaultNotify;
