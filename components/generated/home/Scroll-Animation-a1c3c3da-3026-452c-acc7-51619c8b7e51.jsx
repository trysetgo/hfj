"use client";

import React from "react";
import { motion } from "framer-motion";

export const scrollAnimationDefaultProps = {
  animationType: "fade-up",
  duration: 0.8,
  delay: 0,
  once: true,
  threshold: 0.2,
  easing: "easeOut",
  distance: 50,
  scaleFrom: 0.92,
  rotateFrom: 0,
  blurFrom: 0,
  layout: "image-right",
  alignment: "left",
  verticalAlign: "center",
  containerMaxWidth: "1280px",
  contentMaxWidth: "620px",
  gap: 64,
  paddingX: 20,
  paddingY: 80,
  minHeight: 0,
  showEyebrow: true,
  eyebrow: "Scroll reveal",
  heading: "Premium Scroll Experience",
  content:
    "Engage your users with beautiful, scroll-triggered animations that bring your content to life. Add high-quality imagery to make it stand out.",
  showButton: true,
  imageUrl:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Modern premium workspace",
  showImage: true,
  buttonText: "Discover More",
  buttonLink: "#",
  secondaryButtonText: "",
  secondaryButtonLink: "#",
  showSecondaryButton: false,
  backgroundColor: "#ffffff",
  backgroundGradientStart: "#ffffff",
  backgroundGradientEnd: "#eef2ff",
  useGradient: false,
  surfaceColor: "#ffffff",
  surfaceBorderColor: "#e2e8f0",
  showSurface: false,
  accentColor: "#4f46e5",
  eyebrowColor: "#4f46e5",
  headingColor: "#0f172a",
  textColor: "#0f172a",
  mutedTextColor: "#475569",
  buttonBackgroundColor: "#4f46e5",
  buttonTextColor: "#ffffff",
  buttonBorderColor: "#4f46e5",
  secondaryButtonTextColor: "#0f172a",
  secondaryButtonBorderColor: "#cbd5e1",
  imageOverlayColor: "rgba(15, 23, 42, 0)",
  imageBackgroundColor: "#e2e8f0",
  headingFontSize: 48,
  headingFontWeight: 800,
  headingLineHeight: 1.05,
  contentFontSize: 18,
  contentLineHeight: 1.7,
  eyebrowFontSize: 12,
  eyebrowFontWeight: 800,
  buttonFontSize: 16,
  borderRadius: 28,
  surfaceRadius: 32,
  surfacePadding: 0,
  imageRadius: 24,
  imageAspectRatio: "4 / 3",
  imageObjectFit: "cover",
  imageObjectPosition: "center",
  imageShadow: "0 28px 80px rgba(15, 23, 42, 0.20)",
  imageBorderColor: "rgba(15, 23, 42, 0.10)",
  showImageBorder: true,
  showImageOverlay: false,
  showAccentLine: true,
  padding: 80,
};

const easingMap = {
  linear: "linear",
  easeIn: "easeIn",
  easeOut: "easeOut",
  easeInOut: "easeInOut",
  spring: [0.16, 1, 0.3, 1],
};

const getTextAlignmentClasses = (alignment) => {
  if (alignment === "center") return "items-center text-center";
  if (alignment === "right") return "items-end text-right";
  return "items-start text-left";
};

const getJustifyClass = (verticalAlign) => {
  if (verticalAlign === "start") return "items-start";
  if (verticalAlign === "end") return "items-end";
  return "items-center";
};

export default function ScrollAnimationComponent(incomingProps) {
  const props = incomingProps.props || incomingProps;
  const { isPreviewing, isEditable } = incomingProps;

  const {
    animationType,
    duration,
    delay,
    once,
    threshold,
    easing,
    distance,
    scaleFrom,
    rotateFrom,
    blurFrom,
    layout,
    alignment,
    verticalAlign,
    containerMaxWidth,
    contentMaxWidth,
    gap,
    paddingX,
    paddingY,
    minHeight,
    showEyebrow,
    eyebrow,
    heading,
    content,
    showButton,
    imageUrl,
    imageAlt,
    showImage,
    buttonText,
    buttonLink,
    secondaryButtonText,
    secondaryButtonLink,
    showSecondaryButton,
    backgroundColor,
    backgroundGradientStart,
    backgroundGradientEnd,
    useGradient,
    surfaceColor,
    surfaceBorderColor,
    showSurface,
    accentColor,
    eyebrowColor,
    headingColor,
    textColor,
    mutedTextColor,
    buttonBackgroundColor,
    buttonTextColor,
    buttonBorderColor,
    secondaryButtonTextColor,
    secondaryButtonBorderColor,
    imageOverlayColor,
    imageBackgroundColor,
    headingFontSize,
    headingFontWeight,
    headingLineHeight,
    contentFontSize,
    contentLineHeight,
    eyebrowFontSize,
    eyebrowFontWeight,
    buttonFontSize,
    borderRadius,
    surfaceRadius,
    surfacePadding,
    imageRadius,
    imageAspectRatio,
    imageObjectFit,
    imageObjectPosition,
    imageShadow,
    imageBorderColor,
    showImageBorder,
    showImageOverlay,
    showAccentLine,
    padding,
  } = { ...scrollAnimationDefaultProps, ...props };

  const getVariants = () => {
    const safeDistance = Number(distance) || 0;
    const safeScale = Number(scaleFrom) || 1;
    const safeRotate = Number(rotateFrom) || 0;
    const safeBlur = Number(blurFrom) || 0;
    const baseHidden = {
      opacity: 0,
      filter: safeBlur > 0 ? `blur(${safeBlur}px)` : "blur(0px)",
    };
    const visible = {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
    };

    switch (animationType) {
      case "fade-up":
        return { hidden: { ...baseHidden, y: safeDistance }, visible };
      case "fade-down":
        return { hidden: { ...baseHidden, y: -safeDistance }, visible };
      case "fade-in":
        return { hidden: baseHidden, visible };
      case "zoom-in":
        return { hidden: { ...baseHidden, scale: safeScale }, visible };
      case "zoom-out":
        return {
          hidden: { ...baseHidden, scale: Math.max(1, safeScale) },
          visible,
        };
      case "slide-left":
        return { hidden: { ...baseHidden, x: safeDistance }, visible };
      case "slide-right":
        return { hidden: { ...baseHidden, x: -safeDistance }, visible };
      case "rotate-in":
        return {
          hidden: { ...baseHidden, rotate: safeRotate, scale: safeScale },
          visible,
        };
      case "blur-in":
        return { hidden: { ...baseHidden, y: safeDistance / 2 }, visible };
      default:
        return { hidden: { ...baseHidden, y: safeDistance }, visible };
    }
  };

  // To prevent constant re-triggering while editing, we force visibility in edit mode
  const animateProps =
    isEditable && !isPreviewing
      ? { initial: "visible", animate: "visible" }
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once, amount: threshold },
        };

  const isImageLeft = layout === "image-left";
  const isStacked = layout === "stacked";
  const isFullWidth = layout === "full-width";
  const effectivePaddingY = Number.isFinite(Number(paddingY))
    ? Number(paddingY)
    : padding;
  const effectivePaddingX = Number.isFinite(Number(paddingX))
    ? Number(paddingX)
    : 20;
  const sectionBackground = useGradient
    ? `linear-gradient(135deg, ${backgroundGradientStart}, ${backgroundGradientEnd})`
    : backgroundColor;
  const transitionEase = easingMap[easing] || easingMap.easeOut;
  const textAlignmentClass = getTextAlignmentClasses(
    isStacked ? "center" : alignment,
  );
  const justifyClass = getJustifyClass(verticalAlign);
  const preventEditClick = (event) => {
    if (isEditable && !isPreviewing) event.preventDefault();
  };

  const contentBlock = (
    <div
      className={`flex min-w-0 flex-1 flex-col ${textAlignmentClass}`}
      style={{
        color: textColor,
        maxWidth: isStacked || isFullWidth ? "860px" : contentMaxWidth,
      }}
    >
      {showEyebrow && eyebrow && (
        <p
          className="mb-4 inline-flex items-center gap-2 uppercase tracking-[0.18em]"
          style={{
            color: eyebrowColor,
            fontSize: `${eyebrowFontSize}px`,
            fontWeight: eyebrowFontWeight,
          }}
        >
          {showAccentLine && (
            <span
              className="inline-block h-px w-9"
              style={{ backgroundColor: accentColor }}
            />
          )}
          {eyebrow}
        </p>
      )}
      {heading && (
        <h2
          className="mb-0 tracking-tight"
          style={{
            color: headingColor,
            fontSize: `clamp(2rem, 6vw, ${headingFontSize}px)`,
            fontWeight: headingFontWeight,
            lineHeight: headingLineHeight,
          }}
        >
          {heading}
        </h2>
      )}
      {content && (
        <p
          className="mb-0 mt-6 max-w-2xl"
          style={{
            color: mutedTextColor,
            fontSize: `${contentFontSize}px`,
            lineHeight: contentLineHeight,
          }}
        >
          {content}
        </p>
      )}
      {(showButton && buttonText) ||
      (showSecondaryButton && secondaryButtonText) ? (
        <div
          className={`mt-8 flex flex-wrap gap-3 ${alignment === "center" || isStacked ? "justify-center" : alignment === "right" ? "justify-end" : "justify-start"}`}
        >
          {showButton && buttonText && (
            <a
              href={buttonLink}
              onClick={preventEditClick}
              className="inline-flex items-center justify-center border px-8 py-3.5 font-semibold no-underline transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: buttonBackgroundColor,
                borderColor: buttonBorderColor,
                borderRadius: `${borderRadius}px`,
                color: buttonTextColor,
                fontSize: `${buttonFontSize}px`,
              }}
            >
              {buttonText}
            </a>
          )}
          {showSecondaryButton && secondaryButtonText && (
            <a
              href={secondaryButtonLink}
              onClick={preventEditClick}
              className="inline-flex items-center justify-center border bg-transparent px-8 py-3.5 font-semibold no-underline transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: secondaryButtonBorderColor,
                borderRadius: `${borderRadius}px`,
                color: secondaryButtonTextColor,
                fontSize: `${buttonFontSize}px`,
              }}
            >
              {secondaryButtonText}
            </a>
          )}
        </div>
      ) : null}
    </div>
  );

  const imageBlock =
    showImage && imageUrl ? (
      <div
        className="relative min-w-0 flex-1 overflow-hidden"
        style={{
          borderRadius: `${imageRadius}px`,
          backgroundColor: imageBackgroundColor,
        }}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full"
          style={{
            aspectRatio: imageAspectRatio,
            objectFit: imageObjectFit,
            objectPosition: imageObjectPosition,
            borderRadius: `${imageRadius}px`,
            boxShadow: imageShadow,
            border: showImageBorder ? `1px solid ${imageBorderColor}` : "none",
          }}
        />
        {showImageOverlay && (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: imageOverlayColor,
              borderRadius: `${imageRadius}px`,
            }}
          />
        )}
      </div>
    ) : null;

  const orderedChildren = isFullWidth
    ? [contentBlock]
    : isImageLeft
      ? [imageBlock, contentBlock]
      : [contentBlock, imageBlock];

  return (
    <div
      style={{
        background: sectionBackground,
        padding: `${effectivePaddingY}px ${effectivePaddingX}px`,
        width: "100%",
        overflow: "hidden",
        minHeight: minHeight ? `${minHeight}px` : undefined,
      }}
    >
      <motion.div
        {...animateProps}
        variants={getVariants()}
        transition={{ duration, delay, ease: transitionEase }}
        className={`mx-auto flex flex-col ${isStacked || isFullWidth ? "items-center text-center" : `lg:flex-row ${justifyClass}`}`}
        style={{
          maxWidth: containerMaxWidth,
          gap: `${gap}px`,
          backgroundColor: showSurface ? surfaceColor : "transparent",
          border: showSurface ? `1px solid ${surfaceBorderColor}` : "none",
          borderRadius: showSurface ? `${surfaceRadius}px` : 0,
          padding: showSurface ? `${surfacePadding}px` : 0,
        }}
      >
        {orderedChildren.map((child, index) =>
          child ? <React.Fragment key={index}>{child}</React.Fragment> : null,
        )}
      </motion.div>
    </div>
  );
}
