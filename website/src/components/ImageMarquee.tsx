"use client";

import Image from "next/image";

const MARQUEE_IMAGES = [
  { src: "/images/radiology/rad-03-mri-wide.png", alt: "MRI suite" },
  { src: "/images/radiology/rad-01-ct-scanner-room.png", alt: "CT scanner" },
  { src: "/images/radiology/rad-10-blue-medical-film.png", alt: "Medical film" },
  { src: "/images/radiology/rad-11-hospital-radiology.png", alt: "Hospital radiology" },
  { src: "/images/radiology/rad-05-diagnostic-lobby.png", alt: "Diagnostic center" },
  { src: "/images/radiology/rad-12-spine-mri.png", alt: "Spine MRI" },
  { src: "/images/radiology/rad-04-print-films.png", alt: "Print films" },
  { src: "/images/radiology/rad-06-radiologist-desk.png", alt: "Radiologist desk" },
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
