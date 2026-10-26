import type { Metadata } from "next";
import ReceiptClient from "./receipt-client";

export const metadata: Metadata = {
  title: "Receipt",
  description: "Shared receipt view for a settled ChronoPay transaction.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SharedReceiptPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <ReceiptClient params={params} searchParams={searchParams} />;
}
