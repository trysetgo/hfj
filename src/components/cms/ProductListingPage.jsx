"use client";

import React, { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import SidebarFilters from "./SidebarFilters";
import DynamicProductList from "./DynamicProductList";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductListingPage = ({
  apiUrl = "https://dummyjson.com/products",
  sidebarPosition = "left",
  productDetailPageUrl,
  categories,
  brands,
  titleColor,
  containerBackgroundColor,
  containerPadding,
  containerWidth,
  borderColor,
  marginTop,
  marginBottom,
  dividerColor,
  sectionTitleColor,
  itemTextColor,
  buttonBackgroundColor,
  buttonTextColor,
  resetButtonTextColor,
  // DynamicProductList props
  columns,
  limit,
  showPagination,
  cardBackgroundColor,
  textColor,
  sort,
  order,
  q,
  embed,
  country,
}) => {
  const [activeFilter, setActiveFilter] = useState({
    field: null,
    value: null,
  });

  const query = useQuery();
  const categorySlug = query.get("cn") || "";

  const handleFilterSelect = (field, value) => {
    // If clicking the same filter, clear it. Otherwise, set the new one.
    if (activeFilter.field === field && activeFilter.value === value) {
      setActiveFilter({ field: null, value: null });
    } else {
      setActiveFilter({ field, value });
    }
  };

  const productListQuery = useMemo(() => {
    const params = new URLSearchParams();
    if (activeFilter.field && activeFilter.value) {
      params.append(activeFilter.field, activeFilter.value);
    }
    return params.toString();
  }, [activeFilter]);

  const sidebar = (
    <div className="w-full md:w-1/4 lg:w-1/5">
      <SidebarFilters
        onFilterSelect={handleFilterSelect}
        activeFilter={activeFilter}
        categories={categories}
        brands={brands}
        titleColor={titleColor}
        containerBackgroundColor={containerBackgroundColor}
        containerPadding={containerPadding}
        containerWidth={containerWidth}
        borderColor={borderColor}
        marginTop={marginTop}
        marginBottom={marginBottom}
        dividerColor={dividerColor}
        sectionTitleColor={sectionTitleColor}
        itemTextColor={itemTextColor}
        buttonBackgroundColor={buttonBackgroundColor}
        buttonTextColor={buttonTextColor}
        resetButtonTextColor={resetButtonTextColor}
        selectedCategory={categorySlug}
      />
    </div>
  );

  const productList = (
    <div className="w-full md:w-3/4 lg:w-4/5">
      <DynamicProductList
        apiUrl={apiUrl}
        productDetailPageUrl={productDetailPageUrl}
        customFilters={productListQuery}
        columns={columns}
        limit={limit}
        showPagination={showPagination}
        cardBackgroundColor={cardBackgroundColor}
        textColor={textColor}
        buttonBackgroundColor={buttonBackgroundColor}
        buttonTextColor={buttonTextColor}
        sort={sort}
        order={order}
        q={q}
        embed={embed}
        country={country}
      />
    </div>
  );

  return (
    <div
      className={`flex flex-col md:flex-row gap-8 p-4 ${
        sidebarPosition === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {sidebar}
      {productList}
    </div>
  );
};

ProductListingPage.propTypes = {
  apiUrl: PropTypes.string,
  sidebarPosition: PropTypes.oneOf(["left", "right"]),
  productDetailPageUrl: PropTypes.string,
  // SidebarFilters props
  categories: PropTypes.arrayOf(PropTypes.string),
  brands: PropTypes.arrayOf(PropTypes.string),
  titleColor: PropTypes.string,
  containerBackgroundColor: PropTypes.string,
  containerPadding: PropTypes.string,
  containerWidth: PropTypes.string,
  borderColor: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  dividerColor: PropTypes.string,
  sectionTitleColor: PropTypes.string,
  itemTextColor: PropTypes.string,
  buttonBackgroundColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  resetButtonTextColor: PropTypes.string,
  // DynamicProductList props
  columns: PropTypes.number,
  limit: PropTypes.number,
  showPagination: PropTypes.bool,
  cardBackgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  sort: PropTypes.string,
  order: PropTypes.oneOf(["asc", "desc"]),
  q: PropTypes.string,
  embed: PropTypes.string,
  country: PropTypes.string,
};

export const productListingPageDefaultProps = {
  apiUrl: "https://dummyjson.com/products",
  sidebarPosition: "left",
  productDetailPageUrl: "/products",
};

ProductListingPage.defaultProps = productListingPageDefaultProps;

export default ProductListingPage;
