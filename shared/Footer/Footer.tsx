import React from "react";
import { linksData } from "./Footer.utils";
import * as Styled from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <Styled.FooterContainer>
      <Styled.Container>
        <Styled.ImagesContainer>
          <Styled.ImageLink href="/">
            <Styled.Logo
              src="https://www.integra-salud.mx/Plantilla/wp-content/uploads/2021/01/blanco_horiz.png"
              alt="Logo"
            />
          </Styled.ImageLink>
          <Styled.ImageLink href="/"></Styled.ImageLink>
        </Styled.ImagesContainer>
        <Styled.LinksContainer>
          {linksData.map((section, index) => (
            <Styled.LinksSection key={index}>
              <Styled.LinksSectionTitle>
                {section.title}
              </Styled.LinksSectionTitle>
              {section.links.map((link) => {
                const isExternal = link.href && link.href.startsWith("http");

                let LinkComponent;
                if (link.isTextOnly) {
                  LinkComponent = link.bold
                    ? Styled.BoldTextItem
                    : Styled.TextItem;
                } else {
                  LinkComponent = link.bold
                    ? Styled.BoldLinkItem
                    : Styled.LinkItem;
                }

                if (isExternal) {
                  return (
                    <Styled.LinkItemRedirect
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </Styled.LinkItemRedirect>
                  );
                }

                return (
                  <LinkComponent key={link.label} href={link.href}>
                    {link.label}
                  </LinkComponent>
                );
              })}
            </Styled.LinksSection>
          ))}
        </Styled.LinksContainer>
      </Styled.Container>
    </Styled.FooterContainer>
  );
};

export { Footer };
