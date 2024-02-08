import { useMutation } from "@apollo/client";

import { useNotificationContext } from "@justomx/common/dist/contexts/NotificationContext";
import { fromGlobalId } from "@justomx/common/dist/utils/graphql-client";

import { createUserCookies } from "@/utils/cookies";
import { clearCreateNetworkData } from "@/utils/session";

import { MUTATION_CUSTOMER_REGISTER } from "./useCustomerRegister.queries";
import * as TR from "./useCustomerRegister.translations";

interface useCustomerRegisterProps {
  onSuccess: () => void;
}

function useCustomerRegister({ onSuccess }: useCustomerRegisterProps) {
  const { showError } = useNotificationContext();

  const [doRegister, state] = useMutation(MUTATION_CUSTOMER_REGISTER, {
    errorPolicy: "all",
    onCompleted: ({ customerRegister }) => {
      const errors = customerRegister?.errors;
      const token = customerRegister?.token;
      const user = customerRegister?.user;

      if (!token || !user || (errors && errors.length > 0)) {
        const errorMessage = errors?.[0]?.message || TR.SIGN_UP_ERROR;
        showError({ title: TR.SIGN_UP_ERROR, message: errorMessage });
        return;
      }
      const userId = fromGlobalId(user.id)?.id;
      const jwtToken = token;

      createUserCookies(userId, jwtToken);
      clearCreateNetworkData();
      onSuccess();

      window.location.href = "/";
    },
    onError: ({ graphQLErrors }) => {
      const [e] = graphQLErrors;

      showError({ title: TR.SIGN_UP_ERROR, message: e });
    },
  });

  const loading = state.loading;

  return { doRegister, loading };
}

export { useCustomerRegister };
