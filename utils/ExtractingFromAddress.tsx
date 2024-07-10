export const ExtractingCityFromAddress = (address: string) => {
  // This example assumes the city is the last part of a comma-separated address
  const parts = address.split(",").map((part) => part.trim());
  return parts[parts.length - 1];
};
