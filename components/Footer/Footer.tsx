"use client";

import { SimpleContainer } from "@/templates/container.template";
import { SimpleFooter } from "@/templates/footer.template";
import { SimpleLink } from "@/templates/link.template";
import React from "react";

const Footer: React.FC = () => {
  return (
    <SimpleFooter>
      <SimpleContainer className="max-w-[1366px] mx-auto w-full !flex-col lg:!flex-row">
        <SimpleContainer $justifyContent="flex-start">
          <span className="text-[#969595] text-sm">© Flow 2023</span>
          <SimpleLink href="privacy-policy">
            <span className="text-sm text-white">Política de Privacidade</span>
          </SimpleLink>
          <SimpleLink href="privacy-policy">
            <span className="text-sm text-white">Termos de Uso</span>
          </SimpleLink>
        </SimpleContainer>

        <SimpleContainer $justifyContent="flex-start">
          <span className="text-sm">
            Desenvolvido por <strong>MedHit</strong>
          </span>
          <span className="bg-[#EE3965] p-1 text-xs uppercase rounded-md">
            BETA
          </span>
        </SimpleContainer>
      </SimpleContainer>
    </SimpleFooter>
  );
};

export default Footer;
