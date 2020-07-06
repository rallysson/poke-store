export const formatPrice = (price: number) =>
  price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const capitalize = (name: string) =>
  `${name[0].toUpperCase()}${name.substring(1)}`;
