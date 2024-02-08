import { gql } from "@apollo/client";

const MUTATION_CREATE_VERIFICATION_CODE = gql`
  mutation createPhoneVerificationCode($input: PhoneVerificationInput!) {
    createPhoneVerificationCode(input: $input) {
      phoneNumberVerification {
        created
        updated
      }
      errors {
        field
        message
      }
    }
  }
`;

export { MUTATION_CREATE_VERIFICATION_CODE };
