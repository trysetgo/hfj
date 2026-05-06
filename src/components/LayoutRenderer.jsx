"use client";

import React from "react";
import UniversalContactPageV1 from "./cms/UniversalContactPageV1.jsx";
import MinimalHeader from "./cms/MinimalHeader.jsx";
import EstatePromoBanner from "./cms/EstatePromoBanner.jsx";
import TrustCredibilityV1 from "./cms/TrustCredibilityV1.jsx";
import ScrollAnimation from "./cms/ScrollAnimation.jsx";
import ModernMixedCta from "./cms/ModernMixedCta.jsx";

const LayoutRendererInternalComponentMap = {
  UniversalContactPageV1: UniversalContactPageV1,
  "Minimal Header": MinimalHeader,
  "Estate Promo Banner": EstatePromoBanner,
  TrustCredibilityV1: TrustCredibilityV1,
  "Scroll Animation": ScrollAnimation,
  "Modern Mixed CTA": ModernMixedCta,
};

let RenderElementInternal;

const renderChildrenRecursive = (children) => {
  if (!children || !Array.isArray(children)) return null;
  return children.map((child, index) => (
    <RenderElementInternal key={child.id || index} element={child} />
  ));
};

const RenderElementInternalComponent = ({ element }) => {
  if (!element?.type) return null;
  const { type, props = {} } = element;
  const Comp = LayoutRendererInternalComponentMap[type];

  if (Comp) {
    let childrenToRender = props.children;
    if (
      Array.isArray(props.children) &&
      props.children.every(
        (child) => typeof child === "object" && child !== null && child.type,
      )
    ) {
      childrenToRender = renderChildrenRecursive(props.children);
    }
    return <Comp {...props}>{childrenToRender}</Comp>;
  }

  return <div>Unknown component type in LayoutRenderer: {type}</div>;
};

RenderElementInternal = RenderElementInternalComponent;

const LayoutRenderer = (props) => {
  const {
    layoutType,
    rows,
    columnsData,
    gap,
    padding,
    backgroundColor,
    style,
    ...restProps
  } = props;

  if (layoutType === "Layout Selector") {
    const containerStyle = {
      padding: padding || "0.5rem",
      backgroundColor: backgroundColor || "transparent",
      margin: restProps.margin || "0px",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      ...(style || {}),
    };
    const actualRows = rows || [];

    return (
      <div style={containerStyle}>
        {actualRows.map((row, rowIndex) => (
          <div
            key={row.id || `row-${rowIndex}`}
            className="flex"
            style={{
              gap: row.gap || gap || "0.5rem",
              marginBottom:
                rowIndex < actualRows.length - 1
                  ? row.gap || gap || "0.5rem"
                  : "0",
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            {(row.columns || []).map((col, colIndex) => (
              <div
                key={col.id || `col-${colIndex}`}
                style={{
                  ...col.style,
                  flexBasis: col.style?.flexBasis || "auto",
                  flexGrow: 1,
                  boxSizing: "border-box",
                }}
              >
                {renderChildrenRecursive(col.children)}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (layoutType === "Multi Column Layout") {
    const containerStyle = {
      display: "flex",
      gap: gap || "0.5rem",
      padding: padding || "0.5rem",
      backgroundColor: backgroundColor || "transparent",
      boxSizing: "border-box",
      ...(style || {}),
    };
    return (
      <div style={containerStyle}>
        {(columnsData || []).map((col, index) => (
          <div
            key={col.id || index}
            style={{
              ...col.style,
              flex: col.style?.flex || 1,
              boxSizing: "border-box",
            }}
          >
            {renderChildrenRecursive(col.children)}
          </div>
        ))}
      </div>
    );
  }

  if (props.element) {
    return <RenderElementInternal element={props.element} />;
  }

  return (
    <div>
      LayoutRenderer: Invalid props or direct usage. layoutType: {layoutType}
    </div>
  );
};

export default LayoutRenderer;
