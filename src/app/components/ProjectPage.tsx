import { Link, useParams } from "react-router";
import { iconProjects } from "./iconData";
import type { CSSProperties } from "react";

import calculatorPage from "../../assets/project-pages/calculator-page.png";
import chessPage from "../../assets/project-pages/chess-page.png";
import clockPage from "../../assets/project-pages/clock-page.png";
import contactsPage from "../../assets/project-pages/contacts-page.png";
import mailPage from "../../assets/project-pages/mail-page.png";
import msTodoPage from "../../assets/project-pages/ms-todo-page.png";
import notesPage from "../../assets/project-pages/notes-page.png";
import notionPage from "../../assets/project-pages/notion-page.png";
import terminalPage from "../../assets/project-pages/terminal-page.png";
import vsCodePage from "../../assets/project-pages/vs-code-page.png";
import xPage from "../../assets/project-pages/x-page.png";
import youtubePage from "../../assets/project-pages/youtube-page.png";

const projectPageImages: Record<string, string> = {
  calculator: calculatorPage,
  chess: chessPage,
  clock: clockPage,
  contacts: contactsPage,
  mail: mailPage,
  "ms-todo": msTodoPage,
  notes: notesPage,
  notion: notionPage,
  terminal: terminalPage,
  "vs-code": vsCodePage,
  x: xPage,
  youtube: youtubePage,
};

const actionButtonStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 20px",
  borderRadius: 10,
  fontFamily: "Inter, sans-serif",
  fontSize: 14,
  fontWeight: 700,
  textDecoration: "none",
  transition: "transform 0.15s ease, opacity 0.15s ease",
};

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = iconProjects.findIndex((p) => p.slug === slug);
  const project = iconProjects[index];

  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#05070f",
        }}
      >
        <Link to="/" style={{ ...actionButtonStyle, color: "#fff", backgroundColor: "#1769ff" }}>
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const nextProject = iconProjects[index + 1] ?? null;
  const projectImage = projectPageImages[project.slug];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#05070f",
        padding: "24px 16px 40px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <img
          src={projectImage}
          alt={`${project.name} page`}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: 14,
            boxShadow: "0 18px 60px rgba(0,0,0,0.5)",
          }}
        />

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 20 }}>
          <Link
            to="/"
            style={{
              ...actionButtonStyle,
              color: "#fff",
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.16)",
            }}
          >
            Back to Portfolio
          </Link>

          {nextProject && (
            <Link
              to={`/project/${nextProject.slug}`}
              style={{
                ...actionButtonStyle,
                color: "#fff",
                backgroundColor: "#1769ff",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Next Icon: {nextProject.name} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
