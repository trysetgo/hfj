"use client";

import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { ArrowRight, Search, SlidersHorizontal, Star } from "lucide-react";
import { BACKEND_URL } from "../../../services/apiClient";

const extractField = (obj, possibleKeys, fallback = "") => {
  if (!obj || typeof obj !== "object") return fallback;
  for (const key of possibleKeys) {
    const foundKey = Object.keys(obj).find(
      (entry) => entry.toLowerCase() === key.toLowerCase(),
    );
    if (foundKey && obj[foundKey] !== null && obj[foundKey] !== undefined)
      return obj[foundKey];
  }
  return fallback;
};

const currencyMap = {
  US: "$",
  GB: "GBP ",
  IN: "Rs ",
  JP: "JPY ",
  EU: "EUR ",
};

const defaultManualProducts = [
  {
    id: "prod-1",
    name: "Aster Leather Weekender",
    description:
      "Hand-finished carryall with brushed hardware and a refined travel silhouette.",
    price: "380",
    compareAtPrice: "460",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    category: "Travel",
    badge: "Best seller",
    rating: 4.8,
    ctaLabel: "View product",
  },
  {
    id: "prod-2",
    name: "Noir Table Lamp",
    description:
      "Sculptural ambient lighting for hospitality-grade interiors and premium homes.",
    price: "220",
    compareAtPrice: "290",
    imageUrl:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
    category: "Lighting",
    badge: "New drop",
    rating: 4.6,
    ctaLabel: "Explore",
  },
  {
    id: "prod-3",
    name: "Canvas Studio Chair",
    description:
      "Minimal silhouette with a tailored seat profile and warm oak framing.",
    price: "540",
    compareAtPrice: "620",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    category: "Furniture",
    badge: "Limited",
    rating: 4.9,
    ctaLabel: "Shop now",
  },
];

export const dynamicProductListDefaultProps = {
  dataMode: "manual",
  apiUrl: "",
  apiMethod: "GET",
  apiHeadersJson: "",
  apiBodyJson: "",
  apiProductsPath: "products",
  apiTotalPath: "total",
  manualProducts: defaultManualProducts,
  heading: "Featured products",
  subtitle:
    "Mix curated products with live inventory feeds and keep the presentation premium.",
  showHeader: true,
  showSearch: true,
  showSort: true,
  showCategory: true,
  showBadge: true,
  showComparePrice: true,
  showRating: true,
  showPagination: true,
  columns: 3,
  limit: 9,
  country: "US",
  sort: "",
  order: "asc",
  q: "",
  embed: "",
  customFilters: "",
  productDetailPageUrl: "/products",
  defaultButtonLabel: "Add to cart",
  cardBackgroundColor: "#ffffff",
  sectionBackgroundColor: "#f6f1e9",
  textColor: "#1f2937",
  mutedTextColor: "#6b7280",
  buttonBackgroundColor: "#1f2937",
  buttonTextColor: "#ffffff",
  accentColor: "#b77934",
  borderColor: "#e5dfd6",
  cardRadius: "24px",
  imageHeight: "260px",
  gap: "24px",
  containerMaxWidth: "1240px",
  sectionPadding: "48px 24px",
  badgeBackgroundColor: "#f6e6cf",
  badgeTextColor: "#8a5a20",
  cardShadow: "0 24px 48px rgba(15, 23, 42, 0.10)",
  loadingText: "Loading products...",
  emptyText: "No products found.",
};

const parseJson = (value, fallback) => {
  if (!value || !String(value).trim()) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

const getByPath = (source, path) => {
  if (!path) return source;
  return String(path)
    .split(".")
    .filter(Boolean)
    .reduce((acc, key) => acc?.[key], source);
};

const normalizeImageUrl = (imageUrl) => {
  if (!imageUrl) return "https://via.placeholder.com/1200x900?text=Product";
  if (
    String(imageUrl).startsWith("http://") ||
    String(imageUrl).startsWith("https://")
  )
    return imageUrl;
  return `${BACKEND_URL}${imageUrl}`;
};

const ProductCard = ({
  product,
  currencySymbol,
  productDetailPageUrl,
  config,
}) => {
  const name = extractField(product, ["name", "title"], "Product Name");
  const description = extractField(
    product,
    ["description", "desc", "details"],
    "Product description goes here.",
  );
  const priceValue = extractField(product, ["price", "cost", "value"], "0.00");
  const compareAtPrice = extractField(
    product,
    ["compareAtPrice", "compare_at_price", "mrp", "originalPrice"],
    "",
  );
  const badge = extractField(product, ["badge", "label", "tag"], "");
  const rating = Number(extractField(product, ["rating", "stars"], 0));
  const category = extractField(product, ["category", "type"], "");
  const imageUrl = normalizeImageUrl(
    extractField(
      product,
      ["image_url", "image", "imageUrl", "thumbnail", "url"],
      "",
    ),
  );
  const ctaLabel = extractField(
    product,
    ["ctaLabel", "buttonLabel"],
    config.defaultButtonLabel,
  );
  const detailHref = `${productDetailPageUrl}/${product.id}`;

  return (
    <Link
      to={detailHref}
      className="group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: config.cardBackgroundColor,
        border: `1px solid ${config.borderColor}`,
        borderRadius: config.cardRadius,
        boxShadow: config.cardShadow,
      }}
    >
      <div className="relative overflow-hidden">
        <img
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={imageUrl}
          alt={name}
          style={{ height: config.imageHeight }}
        />
        {config.showBadge && badge ? (
          <span
            className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
            style={{
              backgroundColor: config.badgeBackgroundColor,
              color: config.badgeTextColor,
            }}
          >
            {badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {config.showCategory && category ? (
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: config.accentColor }}
          >
            {category}
          </p>
        ) : null}
        <h3
          className="mt-2 text-xl font-semibold leading-tight"
          style={{ color: config.textColor }}
        >
          {name}
        </h3>
        <p
          className="mt-3 text-sm leading-6"
          style={{ color: config.mutedTextColor }}
        >
          {description}
        </p>
        {config.showRating && rating > 0 ? (
          <div
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium"
            style={{ color: config.textColor }}
          >
            <Star
              className="h-4 w-4 fill-current"
              style={{ color: config.accentColor }}
            />
            {rating.toFixed(1)}
          </div>
        ) : null}
        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p
              className="text-xl font-bold"
              style={{ color: config.textColor }}
            >
              {currencySymbol}
              {priceValue}
            </p>
            {config.showComparePrice && compareAtPrice ? (
              <p
                className="mt-1 text-sm line-through"
                style={{ color: config.mutedTextColor }}
              >
                {currencySymbol}
                {compareAtPrice}
              </p>
            ) : null}
          </div>
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-opacity duration-200 group-hover:opacity-90"
            style={{
              backgroundColor: config.buttonBackgroundColor,
              color: config.buttonTextColor,
            }}
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

const DynamicProductList = (incomingProps) => {
  const props = incomingProps.props || incomingProps;
  const config = { ...dynamicProductListDefaultProps, ...props };
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(config.q || "");
  const [sortValue, setSortValue] = useState(config.sort || "");

  useEffect(() => {
    setCurrentPage(1);
  }, [
    config.apiUrl,
    config.limit,
    config.showPagination,
    config.sort,
    config.order,
    config.q,
    config.embed,
    config.customFilters,
    config.dataMode,
  ]);

  useEffect(() => {
    setSearchTerm(config.q || "");
    setSortValue(config.sort || "");
  }, [config.q, config.sort]);

  useEffect(() => {
    if (config.dataMode !== "api") {
      setProducts(
        Array.isArray(config.manualProducts) ? config.manualProducts : [],
      );
      setTotalPages(0);
      setError(null);
      setIsLoading(false);
      return;
    }

    if (!config.apiUrl) {
      setProducts([]);
      setTotalPages(0);
      return;
    }

    const controller = new AbortController();
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        if (config.showPagination) {
          params.append("_limit", config.limit);
          params.append("_page", currentPage);
        }
        if (sortValue) params.append("_sort", sortValue);
        if (config.order) params.append("_order", config.order);
        if (searchTerm) params.append("_q", searchTerm);
        if (config.embed) params.append("_embed", config.embed);
        if (config.customFilters) {
          const customParams = new URLSearchParams(config.customFilters);
          customParams.forEach((value, key) => params.append(key, value));
        }

        const queryString = params.toString();
        const finalApiUrl = queryString
          ? `${config.apiUrl}?${queryString}`
          : config.apiUrl;
        const method = config.apiMethod || "GET";
        const headers = parseJson(config.apiHeadersJson, {});
        const body =
          method === "GET"
            ? undefined
            : JSON.stringify(parseJson(config.apiBodyJson, {}));
        const response = await fetch(finalApiUrl, {
          method,
          headers: body
            ? { "Content-Type": "application/json", ...headers }
            : headers,
          body,
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        const data = await response.json();
        const productsArray = Array.isArray(data)
          ? data
          : getByPath(data, config.apiProductsPath) || data.products || [];
        setProducts(Array.isArray(productsArray) ? productsArray : []);

        if (config.showPagination) {
          const totalCountHeader = response.headers.get("x-total-count");
          const headerTotal = parseInt(totalCountHeader, 10);
          const payloadTotal = Number(
            getByPath(data, config.apiTotalPath) || data.total || 0,
          );
          const resolvedTotal = !Number.isNaN(headerTotal)
            ? headerTotal
            : payloadTotal;
          if (resolvedTotal > 0) {
            setTotalPages(Math.ceil(resolvedTotal / config.limit));
          } else {
            setTotalPages(
              productsArray.length >= config.limit
                ? currentPage + 1
                : currentPage,
            );
          }
        } else {
          setTotalPages(0);
        }
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("Failed to fetch products. Please check the API settings.");
        setProducts([]);
        setTotalPages(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
    return () => controller.abort();
  }, [
    config.apiBodyJson,
    config.apiHeadersJson,
    config.apiMethod,
    config.apiProductsPath,
    config.apiTotalPath,
    config.apiUrl,
    config.customFilters,
    config.dataMode,
    config.embed,
    config.limit,
    config.order,
    config.showPagination,
    currentPage,
    searchTerm,
    sortValue,
  ]);

  const manualFilteredProducts = useMemo(() => {
    if (config.dataMode !== "manual") return products;
    let next = Array.isArray(products) ? [...products] : [];
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      next = next.filter((product) =>
        `${extractField(product, ["name", "title"], "")} ${extractField(product, ["description", "desc"], "")}`
          .toLowerCase()
          .includes(q),
      );
    }
    if (sortValue === "price") {
      next.sort(
        (a, b) =>
          Number(extractField(a, ["price"], 0)) -
          Number(extractField(b, ["price"], 0)),
      );
    } else if (sortValue === "name") {
      next.sort((a, b) =>
        extractField(a, ["name", "title"], "").localeCompare(
          extractField(b, ["name", "title"], ""),
        ),
      );
    }
    if (!config.showPagination) return next;
    const start = (currentPage - 1) * config.limit;
    return next.slice(start, start + config.limit);
  }, [
    config.dataMode,
    config.limit,
    config.showPagination,
    currentPage,
    products,
    searchTerm,
    sortValue,
  ]);

  const displayProducts =
    config.dataMode === "manual" ? manualFilteredProducts : products;
  const manualTotal =
    config.dataMode === "manual"
      ? Math.ceil(
          ((Array.isArray(products) ? products : []).filter((product) =>
            searchTerm
              ? `${extractField(product, ["name", "title"], "")} ${extractField(product, ["description", "desc"], "")}`
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              : true,
          ).length || 0) / config.limit,
        )
      : totalPages;
  const pageCount = config.showPagination
    ? Math.max(1, manualTotal || totalPages || 1)
    : 0;

  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
  };

  const currencySymbol = currencyMap[config.country] || "$";

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: config.sectionBackgroundColor,
        padding: config.sectionPadding,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: config.containerMaxWidth }}>
        {config.showHeader ? (
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2
                className="text-3xl font-semibold leading-tight"
                style={{ color: config.textColor }}
              >
                {config.heading}
              </h2>
              <p
                className="mt-3 text-sm leading-6"
                style={{ color: config.mutedTextColor }}
              >
                {config.subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              {config.showSearch ? (
                <label
                  className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
                  style={{
                    borderColor: config.borderColor,
                    backgroundColor: "#ffffff",
                  }}
                >
                  <Search
                    className="h-4 w-4"
                    style={{ color: config.mutedTextColor }}
                  />
                  <input
                    value={searchTerm}
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search products"
                    className="bg-transparent outline-none"
                    style={{ color: config.textColor }}
                  />
                </label>
              ) : null}
              {config.showSort ? (
                <label
                  className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
                  style={{
                    borderColor: config.borderColor,
                    backgroundColor: "#ffffff",
                  }}
                >
                  <SlidersHorizontal
                    className="h-4 w-4"
                    style={{ color: config.mutedTextColor }}
                  />
                  <select
                    value={sortValue}
                    onChange={(event) => {
                      setSortValue(event.target.value);
                      setCurrentPage(1);
                    }}
                    className="bg-transparent outline-none"
                    style={{ color: config.textColor }}
                  >
                    <option value="">Default sort</option>
                    <option value="price">Price</option>
                    <option value="name">Name</option>
                  </select>
                </label>
              ) : null}
            </div>
          </div>
        ) : null}

        {isLoading ? (
          <div
            className="py-10 text-center"
            style={{ color: config.textColor }}
          >
            {config.loadingText}
          </div>
        ) : null}
        {error ? (
          <div className="py-10 text-center text-red-500">{error}</div>
        ) : null}
        {!isLoading && !error && displayProducts.length === 0 ? (
          <div
            className="py-10 text-center"
            style={{ color: config.mutedTextColor }}
          >
            {config.emptyText}
          </div>
        ) : null}

        {!isLoading && !error && displayProducts.length > 0 ? (
          <div
            className={classNames(
              "grid",
              gridClasses[config.columns] || gridClasses[3],
            )}
            style={{ gap: config.gap }}
          >
            {displayProducts.map((product, index) => (
              <ProductCard
                key={product.id || `product-${index}`}
                product={product}
                currencySymbol={currencySymbol}
                productDetailPageUrl={config.productDetailPageUrl}
                config={config}
              />
            ))}
          </div>
        ) : null}

        {config.showPagination && pageCount > 1 ? (
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="rounded-full px-4 py-2 text-sm disabled:opacity-50"
              style={{
                backgroundColor: "#ffffff",
                color: config.textColor,
                border: `1px solid ${config.borderColor}`,
              }}
            >
              Previous
            </button>
            <span className="text-sm" style={{ color: config.textColor }}>
              Page {currentPage} of {pageCount}
            </span>
            <button
              onClick={() =>
                setCurrentPage((page) => Math.min(pageCount, page + 1))
              }
              disabled={currentPage === pageCount}
              className="rounded-full px-4 py-2 text-sm disabled:opacity-50"
              style={{
                backgroundColor: "#ffffff",
                color: config.textColor,
                border: `1px solid ${config.borderColor}`,
              }}
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

DynamicProductList.propTypes = {
  apiUrl: PropTypes.string,
  columns: PropTypes.number,
  limit: PropTypes.number,
  showPagination: PropTypes.bool,
  country: PropTypes.string,
  cardBackgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  buttonBackgroundColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  sort: PropTypes.string,
  order: PropTypes.string,
  q: PropTypes.string,
  embed: PropTypes.string,
  productDetailPageUrl: PropTypes.string,
  customFilters: PropTypes.string,
};

export default DynamicProductList;
