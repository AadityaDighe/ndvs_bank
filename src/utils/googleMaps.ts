// utils/googleMaps.ts
export const openGoogleMaps = (lat: number, lng: number) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15`;
  window.open(googleMapsUrl, "_blank");
};

export const getStaticMapImage = (lat: number, lng: number, apiKey: string) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=200x200&maptype=roadmap&markers=color:red%7C${lat},${lng}&key=${apiKey}`;
};