"use client";

import React from "react";
import PropTypes from "prop-types";

export const estatePromoBannerDefaultProps = {
  containerBackground: "#eef1f8",
  containerPadding: "32px 16px",
  containerMaxWidth: "1200px",
  cardBackgroundColor: "#ffffff",
  cardBorderRadius: "28px",
  cardShadow: "0 25px 45px rgba(15, 23, 42, 0.18)",
  columnGap: "0px",
  leftPadding: "36px 32px",
  rightPadding: "24px",
  logoText: "LOGO",
  logoHref: "#",
  logoTextColor: "#0f172a",
  logoSrc: "",
  titleMain: "HOUSE",
  titleAccent: "FOR SALE",
  titleColor: "#0f172a",
  accentColor: "#4338ca",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna at est cursus, eget sodales elit venenatis.",
  descriptionColor: "#475569",
  tagline: "Your Website Goes Here",
  taglineColor: "#6b7280",
  buttonText: "Book Now",
  buttonHref: "#",
  buttonTarget: "_self",
  buttonPadding: "12px 26px",
  buttonBorderRadius: "999px",
  buttonBackground: "#4338ca",
  buttonTextColor: "#ffffff",
  buttonFontSize: "14px",
  mainImageSrc:
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
  mainImageAlt: "Modern house exterior",
  mainImageBorderRadius: "16px",
  mainImageShadow: "0 20px 45px rgba(15, 23, 42, 0.2)",
  rightTopImageSrc:
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
  rightTopImageAlt: "Bedroom interior",
  rightBottomImageSrc:
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
  rightBottomImageAlt: "Dining area",
  saleBadgeText: "Up to 50% Off",
  saleBadgeBackground: "#4338ca",
  saleBadgeTextColor: "#ffffff",
  saleBadgeLetterSpacing: "0.1em",
  saleBadgePadding: "10px 16px",
  saleBadgeBorderRadius: "999px",
  saleBadgeFontSize: "14px",
  showSaleBadge: true,
  socialLinks: [
    { id: "social-1", icon: "f", label: "Facebook", href: "#" },
    { id: "social-2", icon: "p", label: "Pinterest", href: "#" },
    { id: "social-3", icon: "in", label: "LinkedIn", href: "#" },
  ],
};

const EstatePromoBanner = ({
  containerBackground = estatePromoBannerDefaultProps.containerBackground,
  containerPadding = estatePromoBannerDefaultProps.containerPadding,
  containerMaxWidth = estatePromoBannerDefaultProps.containerMaxWidth,
  cardBackgroundColor = estatePromoBannerDefaultProps.cardBackgroundColor,
  cardBorderRadius = estatePromoBannerDefaultProps.cardBorderRadius,
  cardShadow = estatePromoBannerDefaultProps.cardShadow,
  columnGap = estatePromoBannerDefaultProps.columnGap,
  leftPadding = estatePromoBannerDefaultProps.leftPadding,
  rightPadding = estatePromoBannerDefaultProps.rightPadding,
  logoText = estatePromoBannerDefaultProps.logoText,
  logoSrc = estatePromoBannerDefaultProps.logoSrc,
  logoHref = estatePromoBannerDefaultProps.logoHref,
  logoTextColor = estatePromoBannerDefaultProps.logoTextColor,
  titleMain = estatePromoBannerDefaultProps.titleMain,
  titleAccent = estatePromoBannerDefaultProps.titleAccent,
  titleColor = estatePromoBannerDefaultProps.titleColor,
  accentColor = estatePromoBannerDefaultProps.accentColor,
  description = estatePromoBannerDefaultProps.description,
  descriptionColor = estatePromoBannerDefaultProps.descriptionColor,
  tagline = estatePromoBannerDefaultProps.tagline,
  taglineColor = estatePromoBannerDefaultProps.taglineColor,
  buttonText = estatePromoBannerDefaultProps.buttonText,
  buttonHref = estatePromoBannerDefaultProps.buttonHref,
  buttonTarget = estatePromoBannerDefaultProps.buttonTarget,
  buttonPadding = estatePromoBannerDefaultProps.buttonPadding,
  buttonBorderRadius = estatePromoBannerDefaultProps.buttonBorderRadius,
  buttonBackground = estatePromoBannerDefaultProps.buttonBackground,
  buttonTextColor = estatePromoBannerDefaultProps.buttonTextColor,
  buttonFontSize = estatePromoBannerDefaultProps.buttonFontSize,
  mainImageSrc = estatePromoBannerDefaultProps.mainImageSrc,
  mainImageAlt = estatePromoBannerDefaultProps.mainImageAlt,
  mainImageBorderRadius = estatePromoBannerDefaultProps.mainImageBorderRadius,
  mainImageShadow = estatePromoBannerDefaultProps.mainImageShadow,
  rightTopImageSrc = estatePromoBannerDefaultProps.rightTopImageSrc,
  rightTopImageAlt = estatePromoBannerDefaultProps.rightTopImageAlt,
  rightBottomImageSrc = estatePromoBannerDefaultProps.rightBottomImageSrc,
  rightBottomImageAlt = estatePromoBannerDefaultProps.rightBottomImageAlt,
  saleBadgeText = estatePromoBannerDefaultProps.saleBadgeText,
  saleBadgeBackground = estatePromoBannerDefaultProps.saleBadgeBackground,
  saleBadgeTextColor = estatePromoBannerDefaultProps.saleBadgeTextColor,
  saleBadgeLetterSpacing = estatePromoBannerDefaultProps.saleBadgeLetterSpacing,
  saleBadgePadding = estatePromoBannerDefaultProps.saleBadgePadding,
  saleBadgeBorderRadius = estatePromoBannerDefaultProps.saleBadgeBorderRadius,
  saleBadgeFontSize = estatePromoBannerDefaultProps.saleBadgeFontSize,
  showSaleBadge = estatePromoBannerDefaultProps.showSaleBadge,
  socialLinks = estatePromoBannerDefaultProps.socialLinks,
}) => {
  const safeSocialLinks = Array.isArray(socialLinks) ? socialLinks : [];

  const cardStyle = {
    backgroundColor: cardBackgroundColor,
    borderRadius: cardBorderRadius,
    boxShadow: cardShadow,
    overflow: "hidden",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    gap: columnGap,
  };

  const leftColumnStyle = {
    flex: "1 1 260px",
    minWidth: "260px",
    padding: leftPadding,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    justifyContent: "space-between",
  };

  const centerColumnStyle = {
    flex: "1 1 360px",
    minWidth: "280px",
    padding: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const rightColumnStyle = {
    flex: "0 0 180px",
    minWidth: "160px",
    padding: rightPadding,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "stretch",
    justifyContent: "flex-start",
    background:
      columnGap === "0px"
        ? "transparent"
        : `linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))`,
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    fontSize: buttonFontSize,
    fontWeight: 600,
    backgroundColor: buttonBackground,
    color: buttonTextColor,
    borderRadius: buttonBorderRadius,
    padding: buttonPadding,
    border: "none",
    cursor: "pointer",
    transition: "opacity 160ms ease",
  };

  const saleBadgeStyle = {
    backgroundColor: saleBadgeBackground,
    color: saleBadgeTextColor,
    letterSpacing: saleBadgeLetterSpacing,
    padding: saleBadgePadding,
    borderRadius: saleBadgeBorderRadius,
    fontSize: saleBadgeFontSize,
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "center",
  };

  const socialButtonStyle = {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    border: "1px solid rgba(15,23,42,0.15)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
    fontWeight: 700,
    color: "#0f172a",
    backgroundColor: "#ffffff",
    textDecoration: "none",
  };

  return (
    <section
      style={{
        backgroundColor: containerBackground,
        padding: containerPadding,
      }}
    >
      <div
        style={{
          maxWidth: containerMaxWidth,
          margin: "0 auto",
        }}
      >
        <div style={cardStyle}>
          <div style={leftColumnStyle}>
            <div>
              <a
                href={logoHref || "#"}
                style={{
                  color: logoTextColor,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "16px",
                  letterSpacing: "0.1em",
                }}
              >
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={logoText || "Logo"}
                    style={{ height: "32px", width: "auto" }}
                  />
                ) : (
                  logoText
                )}
              </a>
            </div>
            {safeSocialLinks.length ? (
              <div style={{ display: "flex", gap: "10px" }}>
                {safeSocialLinks.map((link) => (
                  <a
                    key={link.id || link.label || link.icon}
                    href={link.href || "#"}
                    target={link.target || "_self"}
                    rel={
                      link.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    title={link.label || "Share"}
                    style={socialButtonStyle}
                  >
                    {link.icon || (link.label ? link.label.charAt(0) : "S")}
                  </a>
                ))}
              </div>
            ) : null}

            <div>
              <p
                style={{
                  margin: 0,
                  color: titleColor,
                  fontSize: "42px",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                }}
              >
                {titleMain}{" "}
                <span style={{ color: accentColor, display: "block" }}>
                  {titleAccent}
                </span>
              </p>
              <p
                style={{
                  margin: "16px 0 0 0",
                  color: descriptionColor,
                  fontSize: "16px",
                  lineHeight: 1.6,
                }}
              >
                {description}
              </p>
            </div>
            <div>
              <a
                href={buttonHref || "#"}
                target={buttonTarget || "_self"}
                rel={
                  buttonTarget === "_blank" ? "noopener noreferrer" : undefined
                }
                style={buttonStyle}
              >
                {buttonText}
              </a>
              {tagline ? (
                <p
                  style={{
                    margin: "12px 0 0 0",
                    color: taglineColor,
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {tagline}
                </p>
              ) : null}
            </div>
          </div>
          <div style={centerColumnStyle}>
            <img
              src={mainImageSrc}
              alt={mainImageAlt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: mainImageBorderRadius,
                boxShadow: mainImageShadow,
                display: "block",
              }}
            />
          </div>
          <div style={rightColumnStyle}>
            {showSaleBadge && saleBadgeText ? (
              <div style={saleBadgeStyle}>{saleBadgeText}</div>
            ) : null}
            {rightTopImageSrc ? (
              <img
                src={rightTopImageSrc}
                alt={rightTopImageAlt}
                style={{
                  width: "100%",
                  borderRadius: "14px",
                  objectFit: "cover",
                  height: "142px",
                }}
              />
            ) : null}
            {rightBottomImageSrc ? (
              <img
                src={rightBottomImageSrc}
                alt={rightBottomImageAlt}
                style={{
                  width: "100%",
                  borderRadius: "14px",
                  objectFit: "cover",
                  height: "130px",
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

EstatePromoBanner.propTypes = {
  containerBackground: PropTypes.string,
  containerPadding: PropTypes.string,
  containerMaxWidth: PropTypes.string,
  cardBackgroundColor: PropTypes.string,
  cardBorderRadius: PropTypes.string,
  cardShadow: PropTypes.string,
  columnGap: PropTypes.string,
  leftPadding: PropTypes.string,
  rightPadding: PropTypes.string,
  logoText: PropTypes.string,
  logoSrc: PropTypes.string,
  logoHref: PropTypes.string,
  logoTextColor: PropTypes.string,
  titleMain: PropTypes.string,
  titleAccent: PropTypes.string,
  titleColor: PropTypes.string,
  accentColor: PropTypes.string,
  description: PropTypes.string,
  descriptionColor: PropTypes.string,
  tagline: PropTypes.string,
  taglineColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  buttonTarget: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
  buttonPadding: PropTypes.string,
  buttonBorderRadius: PropTypes.string,
  buttonBackground: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonFontSize: PropTypes.string,
  mainImageSrc: PropTypes.string,
  mainImageAlt: PropTypes.string,
  mainImageBorderRadius: PropTypes.string,
  mainImageShadow: PropTypes.string,
  rightTopImageSrc: PropTypes.string,
  rightTopImageAlt: PropTypes.string,
  rightBottomImageSrc: PropTypes.string,
  rightBottomImageAlt: PropTypes.string,
  saleBadgeText: PropTypes.string,
  saleBadgeBackground: PropTypes.string,
  saleBadgeTextColor: PropTypes.string,
  saleBadgeLetterSpacing: PropTypes.string,
  saleBadgePadding: PropTypes.string,
  saleBadgeBorderRadius: PropTypes.string,
  saleBadgeFontSize: PropTypes.string,
  showSaleBadge: PropTypes.bool,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string,
      label: PropTypes.string,
      href: PropTypes.string,
      target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
    }),
  ),
};

EstatePromoBanner.defaultProps = estatePromoBannerDefaultProps;

export default EstatePromoBanner;
