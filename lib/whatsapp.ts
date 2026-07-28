const CLIENT_WHATSAPP_NUMBER = "2348148362220"; // Replace with your client's number (international format, no + or spaces)

export interface WhatsAppMessageProps {
  type: "ORDER" | "MODEL_TEST_RIDE" | "GENERAL_VISIT" | "CONTACT_FORM";
  data: {
    name: string;
    phone?: string;
    email?: string;
    address?: string;
    date?: string;
    message?: string;
    modelName?: string;
    price?: string;
    imageUrl?: string;
  };
}

export function sendToWhatsApp({ type, data }: WhatsAppMessageProps) {
  let message = "";

  switch (type) {
    case "ORDER":
      message =
        ` *NEW BIKE ORDER*\n\n` +
        `*Model:* ${data.modelName || "N/A"}\n` +
        `*Price:* ${data.price || "N/A"}\n` +
        (data.imageUrl ? `*Bike Image:* ${data.imageUrl}\n` : "") +
        `-------------------------\n` +
        `*Customer Name:* ${data.name}\n` +
        `*Email:* ${data.email || "N/A"}\n` +
        `*Delivery Address:* ${data.address || "N/A"}\n\n` +
        `_Sent from website order checkout._`;
      break;

    case "MODEL_TEST_RIDE":
      message =
        ` *SPECIFIC TEST RIDE BOOKING*\n\n` +
        `*Bike Model:* ${data.modelName || "N/A"}\n` +
        (data.imageUrl ? `*Bike Image:* ${data.imageUrl}\n` : "") +
        `*Customer Name:* ${data.name}\n` +
        `*Phone:* ${data.phone || "N/A"}\n` +
        `*Preferred Date:* ${data.date || "N/A"}\n\n` +
        `_Please confirm if this bike is prepped for this date._`;
      break;

    case "GENERAL_VISIT":
      message =
        ` *SHOWROOM VISIT / GENERAL TEST RIDE*\n\n` +
        `*Customer Name:* ${data.name}\n` +
        `*Phone:* ${data.phone || "N/A"}\n` +
        `*Preferred Visit Date:* ${data.date || "N/A"}\n\n` +
        `_Customer will select their preferred model in-person at the showroom._`;
      break;

    case "CONTACT_FORM":
      message =
        ` *NEW SERVICE / GENERAL INQUIRY*\n\n` +
        `*Name:* ${data.name}\n` +
        `*Email:* ${data.email || "N/A"}\n` +
        `*Phone:* ${data.phone || "N/A"}\n` +
        `*Message:* ${data.message || "N/A"}`;
      break;
  }

  const encodedMessage = encodeURIComponent(message);
  window.open(
    `https://wa.me/${CLIENT_WHATSAPP_NUMBER}?text=${encodedMessage}`,
    "_blank",
  );
}
