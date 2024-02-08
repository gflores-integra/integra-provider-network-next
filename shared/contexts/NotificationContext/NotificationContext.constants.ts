const defaultOptions = {
  autoClose: 3000,
  draggable: true,
  hideProgressBar: true,
  pauseOnHover: true,
  progress: undefined,
};

const ERROR_OPTIONS = {
  ...defaultOptions,
  position: "bottom-left",
  closeOnClick: true,
  containerId: "errorToast",
};

const ERROR_CODE_OPTIONS = {
  ...defaultOptions,
  autoClose: 60000,
  position: "top-right",
  closeOnClick: true,
  containerId: "errorCodeToast",
};

const SUCCESS_OPTIONS = {
  ...defaultOptions,
  position: "top-right",
  closeButton: false,
  containerId: "succesToast",
};

const TALON_OPTIONS = {
  ...defaultOptions,
  autoClose: 10000,
  position: "bottom-left",
  closeOnClick: true,
  containerId: "talonToast",
};

export { ERROR_OPTIONS, ERROR_CODE_OPTIONS, SUCCESS_OPTIONS, TALON_OPTIONS };
