import { Link, useParams } from "react-router";
import { iconProjects, type IconProject } from "./iconData";
import { iconImages } from "./Home";
import { PhoneMockup } from "./PhoneMockup";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = iconProjects.findIndex((p) => p.slug === slug);
  const project = iconProjects[index];

  if (!project) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#0c0c14" }}>
        <Link to="/" style={{ color: "#6fa3ff", fontFamily: "Inter, sans-serif" }}>← Back</Link>
      </div>
    );
  }

  const prevProject = iconProjects[index - 1] ?? null;
  const nextProject = iconProjects[index + 1] ?? null;

  return (
    <div style={{ backgroundColor: "#0c0c14", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <BehanceCoverPage
        project={project}
        iconSrc={iconImages[project.imageKey]}
        index={index}
      />

      {/* ── Prev / Next footer nav ── */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        backgroundColor: "#0c0c14",
        padding: "24px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1400,
        margin: "0 auto",
      }}>
        {/* Back to portfolio */}
        <Link to="/" style={{
          display: "flex", alignItems: "center", gap: 8,
          textDecoration: "none", color: "rgba(255,255,255,0.3)",
          fontSize: 13, fontWeight: 500,
        }}>
          <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>← Portfolio</span>
        </Link>

        {/* Page counter */}
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
          {String(index + 1).padStart(2, "0")} / {String(iconProjects.length).padStart(2, "0")}
        </span>

        {/* Prev / Next */}
        <div style={{ display: "flex", gap: 24 }}>
          {prevProject && (
            <Link to={`/project/${prevProject.slug}`} style={{
              display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
                <img src={iconImages[prevProject.imageKey]} alt={prevProject.name} style={{ width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated", display: "block" }} />
              </div>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>← {prevProject.name}</span>
            </Link>
          )}
          {nextProject && (
            <Link to={`/project/${nextProject.slug}`} style={{
              display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
            }}>
              <span style={{ fontSize: 13, color: "#6fa3ff", fontWeight: 600 }}>{nextProject.name} →</span>
              <div style={{ width: 32, height: 32, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
                <img src={iconImages[nextProject.imageKey]} alt={nextProject.name} style={{ width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated", display: "block" }} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// The Behance cover page — matches the Figma design exactly:
//   • Very dark background (#0c0c14)
//   • Left side: large icon + badge + huge title + tagline + meta row
//   • Right side: iPhone mockup (IphoneTopLeft-2 scaled to 236px)
// ─────────────────────────────────────────────────────────────────────────────
function BehanceCoverPage({
  project,
  iconSrc,
  index,
}: {
  project: IconProject;
  iconSrc: string;
  index: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0c0c14",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {/* ── Radial glow — accent color, left side ── */}
      <div
        style={{
          position: "absolute",
          left: -70,
          top: -84,
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle at center, ${project.accentColor}22 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* ── Max-width content wrapper ── */}
      <div
        style={{
          maxWidth: 1400,
          width: "100%",
          margin: "0 auto",
          padding: "0 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",   // ← centred, not space-between
          gap: 100,                    // ← gap between the two columns
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ═══════════════════════════════
            LEFT COLUMN
            Icon · Badge · Title · Tagline · Meta
        ════════════════════════════════ */}
        <div
          style={{
            flex: "0 0 auto",
            width: "clamp(320px, 38%, 480px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",        // ← centred horizontally in the column
            gap: 0,
          }}
        >
          {/* Project icon — 160×160px, white background, glow shadow */}
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: 36,
              overflow: "hidden",
              backgroundColor: "rgba(255,255,255,0)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0px 32px 80px rgba(0,0,0,0.6), 0px 0px 60px " + project.accentColor + "30",
              marginBottom: 48,
              flexShrink: 0,
            }}
          >
            <img
              src={iconSrc}
              alt={project.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                imageRendering: "pixelated",
                display: "block",
              }}
            />
          </div>

          {/* Badge — "PIXEL ART ICON · 2024" */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 25,
              borderRadius: 20,
              border: "1px solid rgba(23,105,255,0.3)",
              backgroundColor: "rgba(23,105,255,0.18)",
              padding: "0 14px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 10,
                color: "#6fa3ff",
                letterSpacing: "1.317px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Pixel Art Icon
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(52px, 5.5vw, 72px)",
              color: "#ffffff",
              margin: "0 0 16px",
              letterSpacing: "-2.037px",
              lineHeight: 1,
              whiteSpace: "nowrap",
              textAlign: "center",     // ← centred title
            }}
          >
            {project.name}
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: 20,
              color: "#888888",
              margin: "0 0 56px",
              letterSpacing: "-0.449px",
              whiteSpace: "nowrap",
              textAlign: "center",     // ← centred tagline
            }}
          >
            {project.tagline}
          </p>

          {/* Meta row — Tool / Size / Type  (Year removed) */}
          <div
            style={{
              display: "flex",
              gap: 32,
              alignItems: "flex-start",
            }}
          >
            {[
              ["Tool", "Aseprite"],
              ["Size", "32×32px"],
              ["Type", "Pixel Art"],
            ].map(([label, value]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: 10,
                    color: "#555555",
                    letterSpacing: "1.117px",
                    textTransform: "uppercase",
                    lineHeight: "15px",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#dddddd",
                    letterSpacing: "-0.15px",
                    lineHeight: "21px",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════
            RIGHT COLUMN
            iPhone mockup — 236px wide, matching Figma exactly
        ════════════════════════════════ */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PhoneMockup iconSrc={iconSrc} iconName={project.name} />
        </div>
      </div>
    </div>
  );
}