import { useMutation } from "@apollo/client";

import { MUTATION_CREATE_VERIFICATION_CODE } from "./use-create-phone-code.queries";
import {
  SendCodeVariables,
  VerificationCodeResponse,
} from "./use-create-phone-code.types";

interface useCreatePhoneCodeProps {
  onInvalid: () => void;
  onValid: () => void;
}

function useCreatePhoneCode({ onValid, onInvalid }: useCreatePhoneCodeProps) {
  const [sendCode] = useMutation<VerificationCodeResponse, SendCodeVariables>(
    MUTATION_CREATE_VERIFICATION_CODE,
    {
      onCompleted: ({ createPhoneVerificationCode }) => {
        if (createPhoneVerificationCode?.errors.length) {
          onInvalid();

          return;
        }

        onValid();
      },
    }
  );

  return { sendCode };
}

export { useCreatePhoneCode };
