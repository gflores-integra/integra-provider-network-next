import { useContext } from "react";
import {
  ActionType,
  CreateNetworkContext,
} from "../../contexts/CreateNetworkContext";

import { BaseLayoutProps } from "./base-layout.types";
import { DEFAULT_STEPS } from "./base-layout.constants";
import * as Styled from "./base-layout.styles";

function BaseLayout({ children, backStep }: BaseLayoutProps) {
  const { dispatch, state } = useContext(CreateNetworkContext);

  const { currentStep } = state;

  const stepsFlow = DEFAULT_STEPS;
  const totalSteps = stepsFlow.length;

  const goBack = () => {
    dispatch({ type: ActionType.UPDATE_STEP, value: backStep });
  };

  const currentIndex = stepsFlow.indexOf(currentStep);

  const currentProgress = (currentIndex / (totalSteps - 1)) * 100;

  return (
    <Styled.Container>
      <Styled.Content>
        {/* <Header onBack={goBack} show={showHeader} /> */}
        {/* <Styled.ProgressBarContainer show={showProgressBar}>
          <Styled.Progress width={currentProgress} />
        </Styled.ProgressBarContainer> */}
        {children}
      </Styled.Content>
    </Styled.Container>
  );
}

export { BaseLayout };
