import type { Metadata } from "next";
import MarketplaceClient from "./marketplace-client";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Browse and book time slots from suppliers worldwide",
};

export default function MarketplacePage() {
  return <MarketplaceClient />;
}
