"use client";

import Image from "next/image";

const MARQUEE_IMAGES = [
  { src: "/images/radiology/fresh-01-xray-panel.jpeg", alt: "Multi-view X-ray diagnostic film" },
  { src: "/images/radiology/fresh-02-brain-mri-grid.jpeg", alt: "Brain MRI film output" },
  { src: "/images/radiology/rad-10-blue-medical-film.png", alt: "Medical film" },
  { src: "/images/radiology/fresh-04-shoulder-xray.jpeg", alt: "Shoulder X-ray film" },
  { src: "/images/radiology/fresh-05-foot-xray.jpeg", alt: "Foot X-ray film" },
  { src: "/images/radiology/fresh-08-skull-profile.jpeg", alt: "Skull profile X-ray film" },
  { src: "/images/radiology/rad-04-print-films.png", alt: "Print films" },
  { src: "/images/radiology/fresh-07-leg-fracture-dual.jpeg", alt: "Leg fracture X-ray film" },
];

export function ImageMarquee() {
  const track = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

  return (
    <div className="image-marquee">
      <div className="image-marquee__fade image-marquee__fade--left" />
      <div className="image-marquee__fade image-marquee__fade--right" />
      <div className="image-marquee__track">
        {track.map((item, idx) => (
          <div key={idx} className="image-marquee__item">
            <Image src={item.src} alt={item.alt} fill sizes="380px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
