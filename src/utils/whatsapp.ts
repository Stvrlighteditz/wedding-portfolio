import { studio } from "@/constants/site";

type BookingMessageInput = {
  name: string;
  email?: string;
  phone?: string;
  eventType: string;
  eventDate?: string;
  location?: string;
  guestCount?: string;
  message?: string;
};

export function createWhatsAppUrl(message: string, whatsappNumber: string = studio.whatsapp) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function createBookingMessage(
  input: BookingMessageInput,
  studioName: string = studio.name
) {
  const lines = [
    `Hi ${studioName}, I would like to enquire about wedding cinematography.`,
    "",
    `Name: ${input.name}`,
    input.email ? `Email: ${input.email}` : null,
    input.phone ? `Phone: ${input.phone}` : null,
    `Event type: ${input.eventType}`,
    input.eventDate ? `Event date: ${input.eventDate}` : null,
    input.location ? `Location: ${input.location}` : null,
    input.guestCount ? `Guest count: ${input.guestCount}` : null,
    input.message ? "" : null,
    input.message ? `Notes: ${input.message}` : null
  ].filter(Boolean);

  return lines.join("\n");
}
