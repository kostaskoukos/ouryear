import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

import drama from "./imgs/drama.jpg";
import epanomi from "./imgs/epanomi.jpg";
import pink_dot2 from "./imgs/pink_dot2.jpg";
import kalamaria from "./imgs/kalamaria.jpg";
import kastra from "./imgs/kastra.jpg";
import apofoithsh from "./imgs/apofoithsh.jpg";
import dentro from "./imgs/dentro.jpg";
import peiramatiko from "./imgs/peiramatiko.jpg";
import spiti_sou from "./imgs/spiti_sou.jpg";
import glyka from "./imgs/glyka.jpg";
import glykoula from "./imgs/glykoula.jpg";
import peraia from "./imgs/peraia.jpg";
import ikea from "./imgs/ikea.jpg";

const list: {
  position: [number, number];
  image?: ImageMetadata;
  title: string;
}[] = [
  {
    title: "Δεν βρήκα ακριβώς την φωτογραφία 😅",
    position: [47.4996919, 19.039325],
    image: undefined,
  },
  {
    title: "Δράμα στους 6 μήνες",
    position: [41.1479879, 24.1436259],
    image: drama,
  },
  {
    title: "Επανομή",
    position: [40.405173, 22.897841],
    image: epanomi,
  },
  {
    title: "Pink Dot",
    position: [40.5484084, 22.9792876],
    image: pink_dot2,
  },
  {
    title: "Καλαμαριά",
    position: [40.5818617, 22.9342401],
    image: kalamaria,
  },
  {
    title: "Κάστρα",
    position: [40.6406907, 22.9574213],
    image: kastra,
  },
  {
    title: "Rose Garden",
    position: [40.7097947, 22.9073337],
    image: apofoithsh,
  },
  {
    title: "Άναμμα δέντρου στην Αριστοτέλους",
    position: [40.6338521, 22.9396481],
    image: dentro,
  },
  {
    title: "Πειραματικό",
    position: [40.6654074, 22.9067625],
    image: peiramatiko,
  },
  {
    title: "Σπίτι σου",
    position: [40.6675837, 22.8996189],
    image: spiti_sou,
  },
  {
    title: "Γλυκά στο άναμμα δέντρου",
    position: [40.6317268, 22.9456714],
    image: glyka,
  },
  {
    title: "Εδώ απλά ήσουν τόσο γλυκούλα 🥰",
    position: [40.6305351, 22.944273],
    image: glykoula,
  },
  {
    title: "Τυροπιτάκια στην Περαία",
    position: [40.5090305, 22.9226384],
    image: peraia,
  },
  { title: "Τουρ στο ΙΚΕΑ", position: [40.5505663, 22.9799773], image: ikea },
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
            <Tooltip direction="top" offset={[0, -10]}>
              {/* <div className="flex max-w-40 flex-col items-center gap-2 rounded-2xl bg-white/95 p-2 text-center shadow-lg"> */}
                <p className="font-arima text-sm text-slate-900">
                  {item.title}
                </p>
                {item.image && (
                  <img
                    src={item.image.src}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="mx-auto h-24 w-24 rounded-xl object-cover"
                  />
                )}
              {/* </div> */}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MyMap;
