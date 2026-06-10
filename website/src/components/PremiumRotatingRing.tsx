"use client";

/**
 * Decorative Luvia-style rotating ring backdrop.
 * Pure CSS animations — GPU transform/opacity only, pointer-events none.
 */
export function PremiumRotatingRing() {
  return (
    <div className="premium-ring-bg" aria-hidden="true">
      <div className="premium-ring-bg__stage">
        <div className="premium-ring-bg__glow" />
        <div className="premium-ring-bg__glass" />

        <div className="premium-ring premium-ring--1">
          <span className="premium-ring__arc premium-ring__arc--a" />
          <span className="premium-ring__arc premium-ring__arc--b" />
        </div>

        <div className="premium-ring premium-ring--2">
          <span className="premium-ring__arc premium-ring__arc--a" />
          <span className="premium-ring__arc premium-ring__arc--b" />
        </div>

        <div className="premium-ring premium-ring--3">
          <span className="premium-ring__stroke" />
        </div>

        <div className="premium-ring premium-ring--4">
          <span className="premium-ring__stroke premium-ring__stroke--dashed" />
        </div>
      </div>
    </div>
  );
}
