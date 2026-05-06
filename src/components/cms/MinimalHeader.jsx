"use client";

import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const parsePx = (value, fallback) => {
  const match = String(value || "").match(/^(-?\d+(\.\d+)?)px$/i);
  return match ? Number(match[1]) : fallback;
};

export const minimalHeaderDefaultProps = {
  headerMode: "header",
  logoText: "Aurum Studio",
  logoSrc: "",
  logoAlt: "Brand logo",
  logoHref: "#",
  navLinks: [
    { id: "home", text: "Home", href: "#home", target: "_self" },
    { id: "work", text: "Work", href: "#work", target: "_self" },
    { id: "services", text: "Services", href: "#services", target: "_self" },
    { id: "contact", text: "Contact", href: "#contact", target: "_self" },
  ],
  showCTA: true,
  ctaText: "Get Started",
  ctaHref: "#contact",
  ctaTarget: "_self",
  backgroundColor: "#ffffff",
  textColor: "#0f172a",
  linkColor: "#334155",
  linkHoverColor: "#0f172a",
  ctaBackgroundColor: "#0f172a",
  ctaTextColor: "#ffffff",
  borderColor: "#e2e8f0",
  overlayColor: "rgba(15, 23, 42, 0.45)",
  mobileMenuBackgroundColor: "#ffffff",
  mobileMenuTextColor: "#0f172a",
  menuButtonColor: "#0f172a",
  containerMaxWidth: "1200px",
  headerHeight: "74px",
  paddingX: "24px",
  paddingY: "12px",
  logoGap: "10px",
  navGap: "20px",
  borderRadius: "0px",
  navFontSize: "14px",
  navFontWeight: "500",
  logoFontFamily: "inherit",
  logoFontSize: "24px",
  logoFontWeight: "700",
  logoLetterSpacing: "0.02em",
  logoTextTransform: "none",
  ctaFontSize: "14px",
  ctaFontWeight: "600",
  ctaBorderRadius: "999px",
  ctaPaddingY: "10px",
  ctaPaddingX: "18px",
  sticky: false,
  topOffset: "0px",
  zIndex: 30,
  showBorder: true,
  showShadow: true,
  boxShadow: "0 10px 32px rgba(15, 23, 42, 0.08)",
  glassEffect: false,
  backdropBlur: "8px",
  mobileBreakpoint: "900px",
  showMobileMenu: true,
  closeOnLinkClick: true,
  heroBackgroundColor: "#f8dfd5",
  heroBackgroundImage: "",
  heroOverlayColor: "rgba(255,255,255,0.35)",
  heroSectionPaddingY: "56px",
  heroContainerRadius: "22px",
  heroContainerBorderColor: "#ffffff",
  heroContainerBorderWidth: "2px",
  heroContentMaxWidth: "760px",
  heroTitle: "We Provide Awesome Real Estate",
  heroSubtitle: "We provide high quality real estate for your family and future investment starts now!",
  heroTitleColor: "#0f172a",
  heroSubtitleColor: "#4b5563",
  heroTitleFontSize: "64px",
  heroSubtitleFontSize: "28px",
  showHeroSearchBar: true,
  heroSearchField1Placeholder: "Location",
  heroSearchField2Placeholder: "Budget",
  heroSearchButtonText: "Discover",
  heroSearchBackgroundColor: "#ffffff",
  heroSearchButtonBackgroundColor: "#ea580c",
  heroSearchButtonTextColor: "#ffffff",
  showHeroGallery: true,
  heroGalleryImages: [
    {
      id: "hero-1",
      src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80",
      alt: "Luxury house",
      href: "#hero-1",
      price: "$2.45M",
      wishlistSymbol: "♡",
      discountPrice: "$2.1M",
      flashSaleLabel: "Flash Sale",
    },
    {
      id: "hero-2",
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      alt: "Modern estate",
      href: "#hero-2",
      price: "$1.95M",
      wishlistSymbol: "♡",
      discountPrice: "$1.75M",
      flashSaleLabel: "Limited Time",
    },
    {
      id: "hero-3",
      src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      alt: "Apartment building",
      href: "#hero-3",
      price: "$3.1M",
      wishlistSymbol: "♡",
      discountPrice: "$2.85M",
      flashSaleLabel: "Flash Sale",
    },
  ],
  heroGalleryGap: "16px",
  heroImageRadius: "28px",
  style: {},
  className: "",
};

const MinimalHeader = ({
  id,
  headerMode = minimalHeaderDefaultProps.headerMode,
  logoText = minimalHeaderDefaultProps.logoText,
  logoSrc = minimalHeaderDefaultProps.logoSrc,
  logoAlt = minimalHeaderDefaultProps.logoAlt,
  logoHref = minimalHeaderDefaultProps.logoHref,
  navLinks = minimalHeaderDefaultProps.navLinks,
  showCTA = minimalHeaderDefaultProps.showCTA,
  ctaText = minimalHeaderDefaultProps.ctaText,
  ctaHref = minimalHeaderDefaultProps.ctaHref,
  ctaTarget = minimalHeaderDefaultProps.ctaTarget,
  backgroundColor = minimalHeaderDefaultProps.backgroundColor,
  textColor = minimalHeaderDefaultProps.textColor,
  linkColor = minimalHeaderDefaultProps.linkColor,
  linkHoverColor = minimalHeaderDefaultProps.linkHoverColor,
  ctaBackgroundColor = minimalHeaderDefaultProps.ctaBackgroundColor,
  ctaTextColor = minimalHeaderDefaultProps.ctaTextColor,
  borderColor = minimalHeaderDefaultProps.borderColor,
  overlayColor = minimalHeaderDefaultProps.overlayColor,
  mobileMenuBackgroundColor = minimalHeaderDefaultProps.mobileMenuBackgroundColor,
  mobileMenuTextColor = minimalHeaderDefaultProps.mobileMenuTextColor,
  menuButtonColor = minimalHeaderDefaultProps.menuButtonColor,
  containerMaxWidth = minimalHeaderDefaultProps.containerMaxWidth,
  headerHeight = minimalHeaderDefaultProps.headerHeight,
  paddingX = minimalHeaderDefaultProps.paddingX,
  paddingY = minimalHeaderDefaultProps.paddingY,
  logoGap = minimalHeaderDefaultProps.logoGap,
  navGap = minimalHeaderDefaultProps.navGap,
  borderRadius = minimalHeaderDefaultProps.borderRadius,
  navFontSize = minimalHeaderDefaultProps.navFontSize,
  navFontWeight = minimalHeaderDefaultProps.navFontWeight,
  logoFontFamily = minimalHeaderDefaultProps.logoFontFamily,
  logoFontSize = minimalHeaderDefaultProps.logoFontSize,
  logoFontWeight = minimalHeaderDefaultProps.logoFontWeight,
  logoLetterSpacing = minimalHeaderDefaultProps.logoLetterSpacing,
  logoTextTransform = minimalHeaderDefaultProps.logoTextTransform,
  ctaFontSize = minimalHeaderDefaultProps.ctaFontSize,
  ctaFontWeight = minimalHeaderDefaultProps.ctaFontWeight,
  ctaBorderRadius = minimalHeaderDefaultProps.ctaBorderRadius,
  ctaPaddingY = minimalHeaderDefaultProps.ctaPaddingY,
  ctaPaddingX = minimalHeaderDefaultProps.ctaPaddingX,
  sticky = minimalHeaderDefaultProps.sticky,
  topOffset = minimalHeaderDefaultProps.topOffset,
  zIndex = minimalHeaderDefaultProps.zIndex,
  showBorder = minimalHeaderDefaultProps.showBorder,
  showShadow = minimalHeaderDefaultProps.showShadow,
  boxShadow = minimalHeaderDefaultProps.boxShadow,
  glassEffect = minimalHeaderDefaultProps.glassEffect,
  backdropBlur = minimalHeaderDefaultProps.backdropBlur,
  mobileBreakpoint = minimalHeaderDefaultProps.mobileBreakpoint,
  showMobileMenu = minimalHeaderDefaultProps.showMobileMenu,
  closeOnLinkClick = minimalHeaderDefaultProps.closeOnLinkClick,
  heroBackgroundColor = minimalHeaderDefaultProps.heroBackgroundColor,
  heroBackgroundImage = minimalHeaderDefaultProps.heroBackgroundImage,
  heroOverlayColor = minimalHeaderDefaultProps.heroOverlayColor,
  heroSectionPaddingY = minimalHeaderDefaultProps.heroSectionPaddingY,
  heroContainerRadius = minimalHeaderDefaultProps.heroContainerRadius,
  heroContainerBorderColor = minimalHeaderDefaultProps.heroContainerBorderColor,
  heroContainerBorderWidth = minimalHeaderDefaultProps.heroContainerBorderWidth,
  heroContentMaxWidth = minimalHeaderDefaultProps.heroContentMaxWidth,
  heroTitle = minimalHeaderDefaultProps.heroTitle,
  heroSubtitle = minimalHeaderDefaultProps.heroSubtitle,
  heroTitleColor = minimalHeaderDefaultProps.heroTitleColor,
  heroSubtitleColor = minimalHeaderDefaultProps.heroSubtitleColor,
  heroTitleFontSize = minimalHeaderDefaultProps.heroTitleFontSize,
  heroSubtitleFontSize = minimalHeaderDefaultProps.heroSubtitleFontSize,
  showHeroSearchBar = minimalHeaderDefaultProps.showHeroSearchBar,
  heroSearchField1Placeholder = minimalHeaderDefaultProps.heroSearchField1Placeholder,
  heroSearchField2Placeholder = minimalHeaderDefaultProps.heroSearchField2Placeholder,
  heroSearchButtonText = minimalHeaderDefaultProps.heroSearchButtonText,
  heroSearchBackgroundColor = minimalHeaderDefaultProps.heroSearchBackgroundColor,
  heroSearchButtonBackgroundColor = minimalHeaderDefaultProps.heroSearchButtonBackgroundColor,
  heroSearchButtonTextColor = minimalHeaderDefaultProps.heroSearchButtonTextColor,
  showHeroGallery = minimalHeaderDefaultProps.showHeroGallery,
  heroGalleryImages = minimalHeaderDefaultProps.heroGalleryImages,
  heroGalleryGap = minimalHeaderDefaultProps.heroGalleryGap,
  heroImageRadius = minimalHeaderDefaultProps.heroImageRadius,
  style = minimalHeaderDefaultProps.style,
  className = minimalHeaderDefaultProps.className,
  viewport,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (viewport === "mobile" || viewport === "tablet" || viewport === "desktop") {
      const forcedMobile = viewport === "mobile";
      setIsMobile(forcedMobile);
      if (!forcedMobile) {
        setIsMenuOpen(false);
      }
      return undefined;
    }

    if (typeof window === "undefined") return undefined;
    const breakpoint = parsePx(mobileBreakpoint, 900);
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = (event) => setIsMobile(event.matches);
    setIsMobile(media.matches);
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }
    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, [mobileBreakpoint, viewport]);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
      return;
    }
    if (!isMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobile, isMenuOpen]);

  const safeLinks = Array.isArray(navLinks) ? navLinks : [];
  const safeHeroImages = Array.isArray(heroGalleryImages) ? heroGalleryImages : [];
  const isHeroMode = headerMode === "hero";
  const heroImageHeight = isMobile ? "180px" : "170px";
  const heroBadgeBaseStyle = {
    position: "absolute",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 600,
    color: "#ffffff",
    backgroundColor: "rgba(15, 23, 42, 0.85)",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    pointerEvents: "none",
  };

  const headerStyle = useMemo(
    () => ({
      position: sticky ? "sticky" : "relative",
      top: sticky ? topOffset : "auto",
      zIndex: Number(zIndex) || 30,
      backgroundColor: glassEffect ? "rgba(255,255,255,0.78)" : backgroundColor,
      color: textColor,
      minHeight: headerHeight,
      borderBottom: showBorder ? `1px solid ${borderColor}` : "none",
      boxShadow: showShadow ? boxShadow : "none",
      backdropFilter: glassEffect ? `blur(${backdropBlur})` : "none",
      WebkitBackdropFilter: glassEffect ? `blur(${backdropBlur})` : "none",
      borderRadius,
      ...style,
    }),
    [
      sticky,
      topOffset,
      zIndex,
      glassEffect,
      backgroundColor,
      textColor,
      headerHeight,
      showBorder,
      borderColor,
      showShadow,
      boxShadow,
      backdropBlur,
      borderRadius,
      style,
    ],
  );

  const containerStyle = {
    maxWidth: containerMaxWidth,
    margin: "0 auto",
    padding: `${paddingY} ${paddingX}`,
    minHeight: headerHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
  };

  const logoWrapperStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: logoGap,
    textDecoration: "none",
    color: textColor,
    minWidth: 0,
  };

  const logoTextStyle = {
    margin: 0,
    fontFamily: logoFontFamily,
    fontSize: logoFontSize,
    fontWeight: logoFontWeight,
    letterSpacing: logoLetterSpacing,
    textTransform: logoTextTransform,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const navLinkStyle = {
    color: linkColor,
    textDecoration: "none",
    fontSize: navFontSize,
    fontWeight: navFontWeight,
    padding: "8px 10px",
    borderRadius: "8px",
    transition: "color 180ms ease, background-color 180ms ease",
  };

  const onLinkClick = () => {
    if (isMobile && closeOnLinkClick) {
      setIsMenuOpen(false);
    }
  };

  const logoNode = (
    <a href={logoHref || "#"} style={logoWrapperStyle}>
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={logoAlt || "Logo"}
          style={{ height: "42px", width: "auto", objectFit: "contain", maxWidth: "180px" }}
        />
      ) : null}
      {logoText ? <p style={logoTextStyle}>{logoText}</p> : null}
    </a>
  );

  return (
    <section id={id} className={`relative ${className}`}>
      <header className="relative" style={headerStyle}>
      <style>{`
        .minimal-header-link:hover {
          color: ${linkHoverColor};
          background-color: rgba(148, 163, 184, 0.14);
        }
        .minimal-header-mobile-link:hover {
          color: ${linkHoverColor};
          background-color: rgba(148, 163, 184, 0.16);
        }
      `}</style>
      <div style={containerStyle}>
        {logoNode}

        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: navGap }}>
            <nav aria-label="Primary navigation" style={{ display: "flex", alignItems: "center", gap: navGap }}>
              {safeLinks.map((link, index) => (
                <a
                  key={link.id || `${link.text || "link"}-${index}`}
                  href={link.href || "#"}
                  target={link.target || "_self"}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="minimal-header-link"
                  style={navLinkStyle}
                >
                  {link.text || "Link"}
                </a>
              ))}
            </nav>
            {showCTA && (
              <a
                href={ctaHref || "#"}
                target={ctaTarget || "_self"}
                rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
                style={{
                  textDecoration: "none",
                  backgroundColor: ctaBackgroundColor,
                  color: ctaTextColor,
                  fontSize: ctaFontSize,
                  fontWeight: ctaFontWeight,
                  borderRadius: ctaBorderRadius,
                  padding: `${ctaPaddingY} ${ctaPaddingX}`,
                  lineHeight: 1.2,
                }}
              >
                {ctaText || "Get Started"}
              </a>
            )}
          </div>
        )}

        {isMobile && showMobileMenu && (
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            style={{
              color: menuButtonColor,
              background: "transparent",
              border: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            {isMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        )}
      </div>

      {isMobile && showMobileMenu && isMenuOpen && (
        <>
          <div
            className="fixed inset-0"
            style={{ backgroundColor: overlayColor, zIndex: (Number(zIndex) || 30) - 1 }}
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className="fixed top-0 right-0 h-full"
            style={{
              width: "min(86vw, 340px)",
              backgroundColor: mobileMenuBackgroundColor,
              color: mobileMenuTextColor,
              zIndex: Number(zIndex) || 30,
              borderLeft: `1px solid ${borderColor}`,
              padding: "22px 18px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              overflowY: "auto",
            }}
          >
            {logoNode}
            <nav
              aria-label="Mobile primary navigation"
              style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}
            >
              {safeLinks.map((link, index) => (
                <a
                  key={`mobile-${link.id || `${link.text || "link"}-${index}`}`}
                  href={link.href || "#"}
                  target={link.target || "_self"}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="minimal-header-mobile-link"
                  style={{
                    textDecoration: "none",
                    color: mobileMenuTextColor,
                    fontSize: navFontSize,
                    fontWeight: navFontWeight,
                    padding: "10px 12px",
                    borderRadius: "10px",
                  }}
                  onClick={onLinkClick}
                >
                  {link.text || "Link"}
                </a>
              ))}
            </nav>
            {showCTA && (
              <a
                href={ctaHref || "#"}
                target={ctaTarget || "_self"}
                rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
                style={{
                  marginTop: "10px",
                  textDecoration: "none",
                  backgroundColor: ctaBackgroundColor,
                  color: ctaTextColor,
                  fontSize: ctaFontSize,
                  fontWeight: ctaFontWeight,
                  borderRadius: ctaBorderRadius,
                  padding: `${ctaPaddingY} ${ctaPaddingX}`,
                  textAlign: "center",
                }}
                onClick={onLinkClick}
              >
                {ctaText || "Get Started"}
              </a>
            )}
          </div>
        </>
      )}
      </header>

      {isHeroMode && (
        <div
          style={{
            position: "relative",
            backgroundColor: heroBackgroundColor,
            backgroundImage: heroBackgroundImage ? `url(${heroBackgroundImage})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: `16px ${paddingX} ${heroSectionPaddingY}`,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: heroOverlayColor,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              margin: "0 auto",
              maxWidth: containerMaxWidth,
              borderRadius: heroContainerRadius,
              border: `${heroContainerBorderWidth} solid ${heroContainerBorderColor}`,
              backgroundColor: "rgba(255,255,255,0.5)",
              padding: isMobile ? "18px" : "28px",
            }}
          >
            <div style={{ maxWidth: heroContentMaxWidth, margin: "0 auto", textAlign: "center" }}>
              {heroTitle ? (
                <h2
                  style={{
                    color: heroTitleColor,
                    fontSize: isMobile ? "34px" : heroTitleFontSize,
                    lineHeight: 1.12,
                    fontWeight: 800,
                    margin: 0,
                  }}
                >
                  {heroTitle}
                </h2>
              ) : null}
              {heroSubtitle ? (
                <p
                  style={{
                    color: heroSubtitleColor,
                    fontSize: isMobile ? "18px" : heroSubtitleFontSize,
                    lineHeight: 1.5,
                    margin: "16px 0 0",
                  }}
                >
                  {heroSubtitle}
                </p>
              ) : null}

              {showHeroSearchBar ? (
                <div
                  style={{
                    marginTop: "24px",
                    borderRadius: "999px",
                    backgroundColor: heroSearchBackgroundColor,
                    display: "flex",
                    alignItems: "center",
                    padding: "8px",
                    gap: "8px",
                    flexWrap: isMobile ? "wrap" : "nowrap",
                  }}
                >
                  <input
                    type="text"
                    placeholder={heroSearchField1Placeholder}
                    style={{
                      flex: 1,
                      minWidth: isMobile ? "100%" : "0",
                      border: "none",
                      background: "transparent",
                      outline: "none",
                      padding: "10px 12px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder={heroSearchField2Placeholder}
                    style={{
                      flex: 1,
                      minWidth: isMobile ? "100%" : "0",
                      border: "none",
                      background: "transparent",
                      outline: "none",
                      padding: "10px 12px",
                    }}
                  />
                  <button
                    type="button"
                    style={{
                      backgroundColor: heroSearchButtonBackgroundColor,
                      color: heroSearchButtonTextColor,
                      border: "none",
                      borderRadius: "999px",
                      padding: "12px 22px",
                      fontWeight: 700,
                      width: isMobile ? "100%" : "auto",
                    }}
                  >
                    {heroSearchButtonText}
                  </button>
                </div>
              ) : null}
            </div>

            {showHeroGallery && safeHeroImages.length > 0 ? (
              <div
                style={{
                  marginTop: "26px",
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
                  gap: heroGalleryGap,
                }}
              >
                {safeHeroImages.map((img, index) => {
                  const imageKey = img.id || `hero-image-${index}`;
                  const imageHeight = heroImageHeight;
                  const linkHref = img.href || img.link;
                  const linkTarget = img.target || "_self";
                  const linkRel = linkTarget === "_blank" ? "noopener noreferrer" : undefined;
                  const wrapperStyle = {
                    position: "relative",
                    borderRadius: heroImageRadius,
                    overflow: "hidden",
                    width: "100%",
                    display: "block",
                    cursor: linkHref ? "pointer" : "default",
                  };
                  const priceBadgeStyle = {
                    ...heroBadgeBaseStyle,
                    bottom: "12px",
                    left: "12px",
                  };
                  const flashSaleBadgeStyle = {
                    ...heroBadgeBaseStyle,
                    top: "12px",
                    left: "12px",
                    backgroundColor: "rgba(234, 88, 12, 0.95)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontSize: "11px",
                    fontWeight: 700,
                  };
                  const wishlistBadgeStyle = {
                    ...heroBadgeBaseStyle,
                    top: "12px",
                    right: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    color: "#0f172a",
                    border: "1px solid rgba(15, 23, 42, 0.15)",
                    boxShadow: "0 6px 18px rgba(15,23,42,0.2)",
                  };
                  const discountPrice = img.discountPrice;
                  const originalPrice = img.price;
                  const hasPrice = Boolean(discountPrice || originalPrice);
                  const priceContent = discountPrice
                    ? (
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px", textAlign: "left" }}>
                          {originalPrice ? (
                            <span style={{ fontSize: "10px", opacity: 0.75, textDecoration: "line-through" }}>
                              {originalPrice}
                            </span>
                          ) : null}
                          <span style={{ fontSize: "14px" }}>{discountPrice}</span>
                        </div>
                      )
                    : originalPrice
                      ? (
                          <span style={{ fontSize: "14px", fontWeight: 600 }}>{originalPrice}</span>
                        )
                      : null;
                  const flashSaleLabel = img.flashSaleLabel;
                  const imageElement = (
                    <>
                      <img
                        src={img.src}
                        alt={img.alt || `hero-image-${index + 1}`}
                        style={{
                          width: "100%",
                          height: imageHeight,
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      {hasPrice && priceContent ? (
                        <span style={priceBadgeStyle}>{priceContent}</span>
                      ) : null}
                      {flashSaleLabel ? (
                        <span style={flashSaleBadgeStyle}>{flashSaleLabel}</span>
                      ) : null}
                      {img.wishlistSymbol ? (
                        <span style={wishlistBadgeStyle} aria-label="Wishlist">
                          {img.wishlistSymbol}
                        </span>
                      ) : null}
                    </>
                  );

                  if (linkHref) {
                    return (
                      <a
                        key={imageKey}
                        href={linkHref}
                        target={linkTarget}
                        rel={linkRel}
                        style={{
                          ...wrapperStyle,
                          textDecoration: "none",
                        }}
                      >
                        {imageElement}
                      </a>
                    );
                  }

                  return (
                    <div key={imageKey} style={wrapperStyle}>
                      {imageElement}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
};

MinimalHeader.propTypes = {
  id: PropTypes.string,
  headerMode: PropTypes.oneOf(["header", "hero"]),
  logoText: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  logoHref: PropTypes.string,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      href: PropTypes.string,
      target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
    }),
  ),
  showCTA: PropTypes.bool,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
  ctaTarget: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  linkColor: PropTypes.string,
  linkHoverColor: PropTypes.string,
  ctaBackgroundColor: PropTypes.string,
  ctaTextColor: PropTypes.string,
  borderColor: PropTypes.string,
  overlayColor: PropTypes.string,
  mobileMenuBackgroundColor: PropTypes.string,
  mobileMenuTextColor: PropTypes.string,
  menuButtonColor: PropTypes.string,
  containerMaxWidth: PropTypes.string,
  headerHeight: PropTypes.string,
  paddingX: PropTypes.string,
  paddingY: PropTypes.string,
  logoGap: PropTypes.string,
  navGap: PropTypes.string,
  borderRadius: PropTypes.string,
  navFontSize: PropTypes.string,
  navFontWeight: PropTypes.string,
  logoFontFamily: PropTypes.string,
  logoFontSize: PropTypes.string,
  logoFontWeight: PropTypes.string,
  logoLetterSpacing: PropTypes.string,
  logoTextTransform: PropTypes.string,
  ctaFontSize: PropTypes.string,
  ctaFontWeight: PropTypes.string,
  ctaBorderRadius: PropTypes.string,
  ctaPaddingY: PropTypes.string,
  ctaPaddingX: PropTypes.string,
  sticky: PropTypes.bool,
  topOffset: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showBorder: PropTypes.bool,
  showShadow: PropTypes.bool,
  boxShadow: PropTypes.string,
  glassEffect: PropTypes.bool,
  backdropBlur: PropTypes.string,
  mobileBreakpoint: PropTypes.string,
  showMobileMenu: PropTypes.bool,
  closeOnLinkClick: PropTypes.bool,
  heroBackgroundColor: PropTypes.string,
  heroBackgroundImage: PropTypes.string,
  heroOverlayColor: PropTypes.string,
  heroSectionPaddingY: PropTypes.string,
  heroContainerRadius: PropTypes.string,
  heroContainerBorderColor: PropTypes.string,
  heroContainerBorderWidth: PropTypes.string,
  heroContentMaxWidth: PropTypes.string,
  heroTitle: PropTypes.string,
  heroSubtitle: PropTypes.string,
  heroTitleColor: PropTypes.string,
  heroSubtitleColor: PropTypes.string,
  heroTitleFontSize: PropTypes.string,
  heroSubtitleFontSize: PropTypes.string,
  showHeroSearchBar: PropTypes.bool,
  heroSearchField1Placeholder: PropTypes.string,
  heroSearchField2Placeholder: PropTypes.string,
  heroSearchButtonText: PropTypes.string,
  heroSearchBackgroundColor: PropTypes.string,
  heroSearchButtonBackgroundColor: PropTypes.string,
  heroSearchButtonTextColor: PropTypes.string,
  showHeroGallery: PropTypes.bool,
  heroGalleryImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
      alt: PropTypes.string,
      href: PropTypes.string,
      link: PropTypes.string,
      target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
      price: PropTypes.string,
      discountPrice: PropTypes.string,
      flashSaleLabel: PropTypes.string,
      wishlistSymbol: PropTypes.string,
    }),
  ),
  heroGalleryGap: PropTypes.string,
  heroImageRadius: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  viewport: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};

MinimalHeader.defaultProps = minimalHeaderDefaultProps;

export default MinimalHeader;
