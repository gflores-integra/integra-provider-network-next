type VerificationError = {
  message: string;
};

type VerificationCodeResponse = {
  createPhoneVerificationCode?: {
    errors: VerificationError[];
  };
};

type SendCodeVariables = {
  input: {
    phoneNumber: string;
  };
};

export type { SendCodeVariables, VerificationCodeResponse };
