import type { Metadata } from "next";
import { slots as mockSlots } from "@/components/dashboard/dashboard-data";
import SlotDetailClient from "./slot-detail-client";

export const metadata = ({ params }: { params: Promise<{ id: string }> }) => {
  return new Promise<Metadata>((resolve) => {
    params.then(({ id }) => {
      const slot = mockSlots.find((s) => s.id === id) || mockSlots[0];
      resolve({
        title: slot.title,
        description: `Book ${slot.title} — ${slot.dateLabel}, ${slot.timeRange}. ${slot.demand} interested.`,
        robots: {
          index: false,
          follow: false,
        },
      });
    });
  });
};

export default async function SlotDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <SlotDetailClient id={id} />;
}
