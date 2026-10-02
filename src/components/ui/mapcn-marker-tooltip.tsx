import { useEffect, useRef } from "react";

type MapcnMarkerTooltipProps = {
  latitude: number;
  longitude: number;
  title: string;
  subtitle: string;
};

export function MapcnMarkerTooltip({
  latitude,
  longitude,
  title,
  subtitle,
}: MapcnMarkerTooltipProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    let cancelled = false;
    let removeMap: (() => void) | undefined;

    void import("maplibre-gl").then(({ default: maplibregl }) => {
      if (cancelled || !mapContainerRef.current) return;

      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        center: [longitude, latitude],
        zoom: 11.5,
        cooperativeGestures: true,
        attributionControl: false,
        style: {
          version: 8,
          sources: {
            openStreetMap: {
              type: "raster",
              tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
              tileSize: 256,
              attribution: "© OpenStreetMap contributors",
            },
          },
          layers: [{ id: "openStreetMap", type: "raster", source: "openStreetMap" }],
        },
      });

      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "bottom-right");
      map.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-left");

      const markerElement = document.createElement("span");
      markerElement.className = "service-area-marker";
      markerElement.setAttribute("aria-label", `${title}, ${subtitle}`);

      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 24,
        className: "service-area-popup",
      }).setHTML(`<strong>${title}</strong><span>${subtitle}</span>`);

      new maplibregl.Marker({ element: markerElement, anchor: "center" })
        .setLngLat([longitude, latitude])
        .setPopup(popup)
        .addTo(map)
        .togglePopup();

      removeMap = () => map.remove();
    });

    return () => {
      cancelled = true;
      removeMap?.();
    };
  }, [latitude, longitude, subtitle, title]);

  return <div ref={mapContainerRef} className="service-area-map" aria-label={`Map showing ${title} in ${subtitle}`} />;
}