import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const list: { position: [number, number]; image?: string; title: string }[] = [
  {
    title: "Δεν βρήκα ακριβώς την φωτογραφία 😅",
    position: [47.4996919, 19.039325],
  },
  { title: "Δράμα στους 6 μήνες", position: [41.1479879, 24.1436259] },
  {
    title: "Επανομή",
    position: [40.405173, 22.897841],
  },
  {
    title: "Pink Dot",
    position: [40.5484084, 22.9792876],
  },
  {
    title: "Καλαμαριά",
    position: [40.5818617, 22.9342401],
  },
  {
    title: "Κάστρα",
    position: [40.6406907, 22.9574213],
  },
  {
    title: "Rose Garden",
    position: [40.7097947, 22.9073337],
  },
  {
    title: "Άναμμα δέντρου στην Αριστοτέλους",
    position: [40.6338521, 22.9396481],
  },
  {
    title: "Πειραματικό",
    position: [40.6654074, 22.9067625],
  },
  {
    title: "Σπίτι σου",
    position: [40.6675837, 22.8996189],
  },
  {
    title: "Γλυκά στο άναμμα δέντρου",
    position: [40.6317268, 22.9456714],
  },
  {
    title: "Εδώ απλά ήσουν τόσο γλυκούλα 🥰",
    position: [40.6305351, 22.944273],
  },
  { title: "Τυροπιτάκια στην Περαία", position: [40.5090305, 22.9226384] },
  { title: "Τουρ στο ΙΚΕΑ", position: [40.5505663, 22.9799773] },
];

const MyMap: React.FC = () => {
  const position: [number, number] = [40.63759, 22.946321];

  return (
    <div className="w-3/4 h-230 m-auto py-8">
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {list.map((item, index) => (
          <Marker key={index} position={item.position}>
            <Tooltip direction="top">
              <p className="font-arima">{item.title}</p>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MyMap;
