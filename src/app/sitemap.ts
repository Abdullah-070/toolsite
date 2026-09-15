import type { MetadataRoute } from "next";

const BASE_URL = "https://www.devtoolskit.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/privacy-policy",
    "/blog",
    "/blog/hardware",
    "/blog/hardware/ram-vs-rom",
    "/blog/hardware/ssd-vs-hdd",
    "/blog/hardware/i5-vs-i7",
    "/blog/dev",
    "/blog/dev/what-is-regex",
    "/blog/dev/what-is-json",
    "/blog/dev/what-is-base64",
    "/blog/dev/what-is-jwt",
    "/blog/dev/what-is-uuid",
    "/tools/dev",
    "/tools/dev/json-formatter",
    "/tools/dev/regex-tester",
    "/tools/dev/base64-encoder-decoder",
    "/tools/dev/jwt-decoder",
    "/tools/dev/uuid-generator",
    "/tools/student",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog/") || route.startsWith("/tools/") ? 0.8 : 0.5,
  }));
}
