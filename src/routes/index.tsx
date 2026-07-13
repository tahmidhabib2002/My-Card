import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tahmid Habib — Digital Dental Card" },
      {
        name: "description",
        content:
          "Premium digital dental card for Tahmid Habib, Dental Practitioner (DDT). Book appointments, view services, and connect instantly.",
      },
      { property: "og:title", content: "Tahmid Habib — Digital Dental Card" },
      {
        property: "og:description",
        content: "Modern, gentle dental care. Root canal, crowns, whitening, smile design and more.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/card.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#05070d" }} aria-hidden="true" />
  );
}
