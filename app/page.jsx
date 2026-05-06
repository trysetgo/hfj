"use client";

export const dynamic = "force-dynamic";

import React from "react";
import MinimalHeader from "../src/components/cms/MinimalHeader.jsx";
import EstatePromoBanner from "../src/components/cms/EstatePromoBanner.jsx";
import TrustCredibilityV1 from "../src/components/cms/TrustCredibilityV1.jsx";
import ScrollAnimation from "../src/components/cms/ScrollAnimation.jsx";
import ModernMixedCta from "../src/components/cms/ModernMixedCta.jsx";

export default function HomePage() {
  return (
    <>
      <MinimalHeader
        sticky={true}
        logoAlt="Fashion Storefront"
        logoText="Fashion Storefront"
        navLinks={JSON.parse(
          `[{"id":"home","href":"/","text":"Home","target":"_self"},{"id":"work","href":"/products","text":"Products","target":"_self"},{"id":"services","href":"/services","text":"Services","target":"_self"},{"id":"contact","href":"/contact","text":"Contact","target":"_self"},{"id":"0e756d2a-396c-42f7-a5a9-955c01e03a81","href":"/listings","text":"Listings","target":"_self"}]`,
        )}
        linkColor="#ffffff"
        textColor="#ffffff"
        glassEffect={true}
        navFontSize="16px"
        logoFontSize="29px"
        navFontWeight="600"
        backgroundColor="#0d0c0d"
      ></MinimalHeader>
      <EstatePromoBanner
        accentColor="#f1d56f"
        buttonTextColor="#1a1919"
        buttonBackground="#f1d56f"
        saleBadgeTextColor="#0d0d0d"
        containerBackground="#cfcec9"
        saleBadgeBackground="#f1d56f"
      ></EstatePromoBanner>
      <TrustCredibilityV1
        theme={JSON.parse(
          `{"mode":"light","accent":"#7C3AED","primary":"#f16f89","surface":"#F9FAFB","secondary":"#111827","background":"#ffffff"}`,
        )}
      ></TrustCredibilityV1>
      <ScrollAnimation
        delay={0.6}
        layout="image-left"
        alignment="center"
        imageRadius={15}
        useGradient={true}
        eyebrowColor="#d8c067"
        animationType="fade-down"
        secondaryButtonText="Explore More"
        showSecondaryButton={true}
        backgroundGradientEnd="#f2eeba"
        backgroundGradientStart="#f8fb46"
      ></ScrollAnimation>
      <ModernMixedCta></ModernMixedCta>
    </>
  );
}
