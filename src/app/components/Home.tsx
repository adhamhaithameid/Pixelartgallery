import { Link } from "react-router";
import { iconProjects } from "./iconData";
import imgCalculator from "figma:asset/133038344d4a914553f218abe8ef7c9062f00ff3.png";
import imgChess from "figma:asset/c5f3ff40e1a88126ce5851af90dce2c4ccb81f25.png";
import imgClock from "figma:asset/a4a11a9902fd91c9ef5f270f2bb194eae95dcd84.png";
import imgContacts from "figma:asset/2e4fb07d107abbead2a09864ee7b926f177d8e71.png";
import imgMail from "figma:asset/923660ccbc3b87264950a491eae81c16e5ae9459.png";
import imgMsTodo from "figma:asset/3fd263f39afb031abe9fe674f62b963f72549baf.png";
import imgNotes from "figma:asset/364695b68978014a74e87b524d6780a1e69d098d.png";
import imgNotion from "figma:asset/36b2c8eae4709e38b3afe49211686fd08dc2198e.png";
import imgTerminal from "figma:asset/f0c6dc98064f5c881f660d0b70a2ce3c9779a48b.png";
import imgVsCode from "figma:asset/cf878b59c42926340a33253353d167527a947b19.png";
import imgX from "figma:asset/96a460adb8b77c882892f98c5d80dbbf0dc76b10.png";
import imgYoutube from "figma:asset/d95bbe93e4ffd68178c292d116634a2cca38cc89.png";

export const iconImages: Record<string, string> = {
  calculator: imgCalculator,
  chess: imgChess,
  clock: imgClock,
  contacts: imgContacts,
  mail: imgMail,
  "ms-todo": imgMsTodo,
  notes: imgNotes,
  notion: imgNotion,
  terminal: imgTerminal,
  "vs-code": imgVsCode,
  x: imgX,
  youtube: imgYoutube,
};

export default function Home() {
  return (
    <div style={{ backgroundColor: "#0c0c14", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>

      {/* ─── NAV ─── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        backgroundColor: "rgba(12,12,20,0.95)",
        backdropFilter: "blur(16px)",
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 64px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, backgroundColor: "#1769ff", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 13, fontWeight: 900, letterSpacing: "-0.5px", fontFamily: "Inter, sans-serif" }}>Bē</span>
            </div>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>pixel.art</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ height: 32, width: 1, backgroundColor: "rgba(255,255,255,0.08)" }} />
            <button style={{ fontSize: 13, fontWeight: 700, color: "#fff", backgroundColor: "#1769ff", border: "none", borderRadius: 4, padding: "8px 18px", cursor: "pointer" }}>
              Follow
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <div style={{
        maxWidth: 1400, margin: "0 auto", padding: "80px 64px 72px",
        position: "relative", overflow: "hidden",
      }}>
        {/* bg glow */}
        <div style={{
          position: "absolute", left: -200, top: -200,
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(23,105,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ display: "flex", alignItems: "center", gap: 80, position: "relative", zIndex: 1 }}>
          {/* Left */}
          <div style={{ flex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              backgroundColor: "rgba(23,105,255,0.18)",
              border: "1px solid rgba(23,105,255,0.3)",
              borderRadius: 20, padding: "5px 14px", marginBottom: 32,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#1769ff" }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: "#6fa3ff", letterSpacing: "1.317px", textTransform: "uppercase" }}>
                Featured Project · 2024
              </span>
            </div>

            <h1 style={{
              fontFamily: "Inter, sans-serif", fontWeight: 900,
              fontSize: 72, color: "#fff", lineHeight: 0.95,
              letterSpacing: "-2.037px", margin: "0 0 24px",
            }}>
              Pixel Art<br />Icon Pack
            </h1>

            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, maxWidth: 460, margin: "0 0 48px" }}>
              12 app icons redesigned at 32×32 pixels using Aseprite. A study in reduction — stripping away gradients to find the essential shape beneath.
            </p>

            <div style={{ display: "flex", gap: 40 }}>
              {[["12", "Icons"], ["32×32", "Resolution"], ["Aseprite", "Tool"], ["2024", "Year"]].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: 26, color: "#fff", letterSpacing: "-0.5px" }}>{val}</div>
                  <div style={{ fontSize: 10, color: "#555", marginTop: 4, textTransform: "uppercase", letterSpacing: "1.117px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: icon grid on dark card */}
          <div style={{
            flexShrink: 0,
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20, padding: 36,
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 64px)", gap: 20 }}>
              {iconProjects.map((p) => (
                <Link key={p.slug} to={`/project/${p.slug}`} style={{ display: "block", textDecoration: "none" }}>
                  <div
                    style={{
                      width: 64, height: 64, borderRadius: 16, overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
                      transition: "transform 0.15s ease, box-shadow 0.15s ease",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.12)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.7)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.5)";
                    }}
                  >
                    <img src={iconImages[p.imageKey]} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated", display: "block" }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── DIVIDER ─── */}
      <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.05)", maxWidth: 1400, margin: "0 auto 0", width: "calc(100% - 128px)" }} />

      {/* ─── PROJECT GRID ─── */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "72px 64px 80px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 48 }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: 28, color: "#fff", margin: 0, letterSpacing: "-0.5px" }}>
            All Projects
          </h2>
          <span style={{ fontSize: 12, color: "#444", letterSpacing: "0.05em" }}>{iconProjects.length} works</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {iconProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "24px 64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 24, height: 24, backgroundColor: "#1769ff", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 9, fontWeight: 900 }}>Bē</span>
            </div>
            <span style={{ fontSize: 12, color: "#333" }}>Pixel Art Icon Pack · 2024</span>
          </div>
          <span style={{ fontSize: 12, color: "#333" }}>Made with Aseprite · 32×32px</span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: (typeof iconProjects)[0]; index: number }) {
  return (
    <Link to={`/project/${project.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12,
          overflow: "hidden",
          transition: "border-color 0.2s ease, background-color 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.05)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.03)";
        }}
      >
        {/* Cover area — 808×632 ratio (78.2%) */}
        <div style={{ width: "100%", paddingTop: "78.2%", position: "relative", overflow: "hidden" }}>
          {/* Dark bg + subtle accent glow */}
          <div style={{ position: "absolute", inset: 0, backgroundColor: "#0c0c14" }} />
          <div style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(circle at 30% 40%, ${project.accentColor}18 0%, transparent 65%)`,
          }} />
          {/* Subtle pixel grid */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.04,
            backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.8) 0px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(255,255,255,0.8) 0px, transparent 1px, transparent 24px)`,
            backgroundSize: "24px 24px",
          }} />
          {/* Project number */}
          <div style={{ position: "absolute", top: 14, left: 16, fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.15)", letterSpacing: "0.1em" }}>
            {String(index + 1).padStart(2, "0")}
          </div>
          {/* 32×32 badge */}
          <div style={{
            position: "absolute", top: 14, right: 14,
            backgroundColor: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 4, padding: "2px 7px",
          }}>
            <span style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: "0.05em" }}>32×32</span>
          </div>
          {/* Icon */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{
              width: 96, height: 96, borderRadius: 22, overflow: "hidden",
              boxShadow: `0 0 0 1px rgba(255,255,255,0.08), 0 16px 40px rgba(0,0,0,0.7), 0 0 40px ${project.accentColor}25`,
            }}>
              <img
                src={iconImages[project.imageKey]}
                alt={project.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* Card body */}
        <div style={{ padding: "18px 20px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 16, color: "#fff", margin: 0, letterSpacing: "-0.3px" }}>{project.name}</h3>
            <span style={{ fontSize: 11, color: "#333", fontWeight: 500 }}>{project.year}</span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", margin: "0 0 14px", lineHeight: 1.5 }}>{project.tagline}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 6 }}>
              {project.tools.map(t => (
                <span key={t} style={{ fontSize: 10, backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)", borderRadius: 3, padding: "2px 7px", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
            <span style={{ fontSize: 11, color: "#1769ff", fontWeight: 700 }}>View →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
