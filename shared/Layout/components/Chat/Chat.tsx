import React, { useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    zw_cioc_open?: () => void;
  }
}

const FloatingChatComponent: React.FC = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Script id="service-pattern-config">
        {`
           SERVICE_PATTERN_CHAT_CONFIG = {
            appId: '31bc16e20e524fdb94186e0020a2dfcf',
            apiUrl: 'https://integra_salud.zw-callitonce.alestra.net.mx/clientweb/api/v1',
            tenantUrl: 'integra_salud.zw-callitonce.alestra.net.mx',
            chatPath: 'https://integra_salud.zw-callitonce.alestra.net.mx/clientweb/chat-client-v4'
          };
        `}
      </Script>

      <Script src="https://integra_salud.zw-callitonce.alestra.net.mx/clientweb/chat-client-v4/js/init.js" />

      <Script id="auto-open-chat">
        {`
     // Automatically open the chat when the component is mounted
     if (window?.zw_cioc_open && ${chatContainerRef.current}) {
       ${chatContainerRef.current}.addEventListener('DOMNodeInserted', () => {
         window.zw_cioc_open();
         ${chatContainerRef.current}.removeEventListener('DOMNodeInserted');
       });
     }
        `}
      </Script>
    </>
  );
};

export { FloatingChatComponent };
