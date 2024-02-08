import styled from "styled-components";
import { Heading, Typography, Icon } from "@/styles";

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 6;
`;

const ErrorIcon = styled(Icon).attrs(({ theme }) => ({
  fill: theme.status.error,
}))``;

const SuccessIcon = styled(Icon).attrs(({ theme }) => ({
  fill: "#2F6455",
}))``;

const DefaultIcon = styled(Icon).attrs(({ theme }) => ({
  fill: theme.grayscale.white,
}))``;

const ImageSucces = styled.img`
  width: 45px;
  max-height: 45px;
  object-fit: contain;
  margin-right: 4px;
`;

const NotificationTitle = styled.p<{ textColor?: boolean }>`
  font-weight: bold;
  color: ${({ theme, textColor }) => textColor && theme.brand.primary};
  margin: 0;
`;

const NotificationTitleErrorCode = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.grayscale.gray2};
  margin: 0;
`;

const NotificationContent = styled.p<{ textColor?: boolean }>`
  margin: 0;
  color: ${({ theme, textColor }) => textColor && theme.brand.primary};
`;

const NotificationContentErrorCode = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.grayscale.gray2};
`;

const NotificationTitleOffer = styled(Heading)`
  color: ${({ theme }) => theme.brand.primary};
  text-align: center;
  margin-bottom: 10px;
`;

const NotificationContentOffer = styled(Typography)`
  text-align: center;
`;

const Border = styled.div`
  background: ${({ theme }) => theme.red50};
  width: 8px;
  position: absolute;
  left: 0px;
  height: 100px;
  top: 0px;
`;

export {
  Border,
  DefaultIcon,
  ErrorIcon,
  IconContainer,
  ImageSucces,
  MainContent,
  NotificationContainer,
  NotificationContent,
  NotificationContentOffer,
  NotificationContentErrorCode,
  NotificationTitle,
  NotificationTitleOffer,
  NotificationTitleErrorCode,
  SuccessIcon,
};
