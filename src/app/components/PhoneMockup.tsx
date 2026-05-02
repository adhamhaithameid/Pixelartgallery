import Iphone19 from "../../imports/Iphone19/Iphone19";

// ─── Iphone19 native coordinate chain ────────────────────────────────────────
//
//  Root (size-full → fills 1263 × 2622 container)
//  └─ Frame (phone body):            left=11   top=12
//  └─ Component4BorderPrimary:       left=11   top=14   (inset-[14px_9px_11px_11px])
//     └─ HomeScreen:                 left=28   top=12   → abs: x=39,  y=26
//        └─ MainHomescreen:          left=97   top=260  → abs: x=136, y=286
//           └─ Logo4 (first icon):   pos (0,0) within MainHomescreen
//              ↳ absolute from root: x=136, y=286
//              ↳ size: 176.67 × 176.67 px, radius: 38.647 px
//
//  Side buttons (Buttons div):       left=-20 from root → clips at overflow:hidden
//
// ─── Display geometry ────────────────────────────────────────────────────────
//  Target display width: 280 px
//  Scale = 280 / 1263  = 0.22171
//  Display height = 2622 × 0.22171  = 581 px
//
// ─── Icon overlay in display space ───────────────────────────────────────────
//  x    = 136    × 0.22171 = 30.15 px
//  y    = 286    × 0.22171 = 63.41 px
//  size = 176.67 × 0.22171 = 39.17 px
//  r    = 38.647 × 0.22171 =  8.57 px

const NATIVE_W  = 1263;
const NATIVE_H  = 2622;
const DISPLAY_W = 280;
const SCALE     = DISPLAY_W / NATIVE_W;           // 0.22171
const DISPLAY_H = Math.round(NATIVE_H * SCALE);   // 581

const OV_X    = Math.round(136    * SCALE * 100) / 100;    // 30.15
const OV_Y    = Math.round(286    * SCALE * 100) / 100;    // 63.41
const OV_SIZE = Math.round(176.67 * SCALE * 100) / 100;    // 39.17
const OV_R    = Math.round(38.647 * SCALE * 100) / 100;    //  8.57

interface PhoneMockupProps {
  iconSrc:  string;
  iconName: string;
}

export function PhoneMockup({ iconSrc, iconName }: PhoneMockupProps) {
  return (
    /*
     * Outer wrapper — sets the space the phone occupies in the layout.
     * overflow is intentionally NOT hidden so the hardware side-buttons
     * (which sit 4 px outside the left edge) remain visible.
     */
    <div
      style={{
        position:   "relative",
        width:      DISPLAY_W,
        height:     DISPLAY_H,
        flexShrink: 0,
      }}
    >
      {/*
       * Inner container: native 1263 × 2622 px.
       * Iphone19 uses size-full (100%×100%) so it fills this exactly.
       * transform: scale() shrinks it visually to DISPLAY_W × DISPLAY_H.
       * transformOrigin: "top left" keeps the top-left corner pinned at (0,0).
       */}
      <div
        style={{
          position:        "absolute",
          top:             0,
          left:            0,
          width:           NATIVE_W,
          height:          NATIVE_H,
          transform:       `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      >
        <Iphone19
          notesAppLabel={iconName === "Notes" ? "not that one 😂" : undefined}
          firstAppLabel={iconName}
        />
      </div>

      {/*
       * Pixel-art icon overlay — sits over the first app slot (row 0, col 0).
       * z-index 10 puts it above the scaled phone layer.
       */}
      <div
        style={{
          position:     "absolute",
          left:         OV_X,
          top:          OV_Y,
          width:        OV_SIZE,
          height:       OV_SIZE,
          borderRadius: OV_R,
          overflow:     "hidden",
          zIndex:       10,
          boxShadow:    "none",
        }}
      >
        <img
          src={iconSrc}
          alt={iconName}
          style={{
            width:          "100%",
            height:         "100%",
            objectFit:      "cover",
            imageRendering: "pixelated",
            display:        "block",
          }}
        />
      </div>
    </div>
  );
}
