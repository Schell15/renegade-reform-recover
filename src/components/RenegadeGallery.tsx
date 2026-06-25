import { useState } from "react";
import foundationsAsset from "@/assets/renegade-foundations.jpg.asset.json";
import classAsset from "@/assets/renegade-class.jpg.asset.json";
import rebuildAsset from "@/assets/renegade-rebuild.jpg.asset.json";

const images = [
  { src: foundationsAsset.url, name: "FOUNDATIONS.", sub: "Begin here" },
  { src: classAsset.url, name: "RENEGADE.", sub: "Find your rhythm" },
  { src: rebuildAsset.url, name: "REBUILD.", sub: "Strength meets reformer" },
];

const GalleryItem = ({ src, name, sub }: { src: string; name: string; sub: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden cursor-pointer w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={name}
        className="w-full h-full object-cover object-top transition-all duration-700 ease-out"
        style={{
          transform: hovered ? "scale(1.05)" : "scale(1)",
          filter: hovered ? "brightness(0.65)" : "brightness(0.82)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{
          height: "60%",
          background:
            "linear-gradient(to top, rgba(10,5,1,0.92) 0%, rgba(10,5,1,0.55) 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute bottom-8 left-7 right-7 z-20 transition-transform duration-500 ease-out"
        style={{ transform: hovered ? "translateY(-6px)" : "translateY(0)" }}
      >
        <span className="block mb-1.5" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
          <span
            className="inline-block relative pb-1.5 text-[#f0ebe3] uppercase tracking-widest font-black text-[22px] leading-none"
            style={{ letterSpacing: "0.1em" }}
          >
            {name}
            <span
              className="absolute bottom-0 left-0 h-[1.5px] transition-all duration-500 ease-out"
              style={{
                width: hovered ? "100%" : "0%",
                background: "#c8834a",
              }}
            />
          </span>
        </span>
        <span
          className="block text-[10.5px] uppercase tracking-[0.18em] font-normal"
          style={{ color: "rgba(240,235,227,0.55)" }}
        >
          {sub}
        </span>
      </div>
    </div>
  );
};

const RenegadeGallery = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "transparent",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            height: "620px",
            width: "100%",
            margin: 0,
            padding: 0,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative"
              style={{
                borderRight:
                  i < images.length - 1 ? "1px solid rgba(240,235,227,0.18)" : "none",
              }}
            >
              <GalleryItem {...img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenegadeGallery;