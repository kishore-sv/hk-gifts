export const sendWhatsAppOrder = ({
    name,
    price,
    quantity,
}: {
    name: string;
    price: number;
    quantity: number;
}) => {
    const phone = "917760220979";

    const message = `
*New Order*

Product: ${name}
Price: ₹${price}
Quantity: ${quantity}
Total: ₹${price * quantity}
`;

    const encodedMessage = encodeURIComponent(message);

    const url = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(url, "_blank");
};

export const sendFullWhatsAppOrder = ({
    message,
}: {
    message: string;
}) => {
    const phone = "919611108710";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
        message
    )}`;

    window.open(url, "_blank");
};