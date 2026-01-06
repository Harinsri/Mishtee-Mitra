"use client";

import React, { useState, useEffect, CSSProperties } from 'react';

/**
 * mishTee Delivery Mitra - Mobile Dashboard (TypeScript Verified)
 */

export default function DeliveryMitraDashboard() {
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const theme = {
    colors: {
      orange: "#FF8C00",
      green: "#22C55E",
      white: "#FFFFFF",
      bg: "#F8F9FA",
      textMain: "#1A202C",
      textSecondary: "#718096",
      border: "#E2E8F0"
    },
    shadows: {
      card: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      button: "0 4px 14px 0 rgba(255, 140, 0, 0.39)"
    }
  };

  // Explicitly typing these as CSSProperties fixes the "Type Error"
  const containerStyle: CSSProperties = {
    maxWidth: "500px",
    margin: "0 auto",
    minHeight: "100vh",
    backgroundColor: theme.colors.bg,
    fontFamily: "Inter, -apple-system, system-ui, sans-serif",
    display: "flex",
    flexDirection: "column",
    padding: "0 0 40px 0",
    color: theme.colors.textMain
  };

  const headerStyle: CSSProperties = {
    backgroundColor: theme.colors.white,
    padding: "32px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "0 0 32px 32px",
    borderBottom: `1px solid ${theme.colors.border}`,
    marginBottom: "24px"
  };

  const logoStyle: CSSProperties = {
    width: "80px",
    height: "auto",
    marginBottom: "16px"
  };

  const titleStyle: CSSProperties = {
    color: theme.colors.orange,
    fontSize: "24px",
    fontWeight: "800",
    margin: "0 0 8px 0",
    letterSpacing: "-0.5px"
  };

  const statusBoxStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 16px",
    backgroundColor: "rgba(34, 197, 94, 0.1)",
    borderRadius: "20px"
  };

  const pulseDotStyle: CSSProperties = {
    width: "10px",
    height: "10px",
    backgroundColor: theme.colors.green,
    borderRadius: "50%",
    opacity: isPulsing ? 1 : 0.4,
    transition: "opacity 0.6s ease-in-out"
  };

  const cardStyle: CSSProperties = {
    margin: "0 20px",
    backgroundColor: theme.colors.white,
    borderRadius: "20px",
    padding: "24px",
    boxShadow: theme.shadows.card,
    border: `1px solid ${theme.colors.border}`
  };

  const navButtonStyle: CSSProperties = {
    margin: "24px 20px 0 20px",
    backgroundColor: theme.colors.orange,
    color: theme.colors.white,
    padding: "18px",
    borderRadius: "16px",
    fontSize: "18px",
    fontWeight: "700",
    border: "none",
    cursor: "pointer",
    boxShadow: theme.shadows.button,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px"
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <img 
          src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
          alt="mishTee logo" 
          style={logoStyle}
        />
        <h1 style={titleStyle}>mishTee Delivery Mitra</h1>
        <div style={statusBoxStyle}>
          <div style={pulseDotStyle}></div>
          <span style={{ color: theme.colors.green, fontSize: "14px", fontWeight: "700" }}>
            Agent Online
          </span>
        </div>
      </header>

      <div style={cardStyle}>
        <div style={{ fontSize: "12px", fontWeight: "700", color: theme.colors.textSecondary, textTransform: "uppercase", marginBottom: "8px" }}>
          Current Task
        </div>
        <div style={{ fontSize: "20px", fontWeight: "700", margin: "0 0 4px 0" }}>
          Deliver to: Arjun Mehta
        </div>
        <p style={{ margin: "4px 0 0 0", color: theme.colors.textSecondary, fontSize: "15px", lineHeight: "1.4" }}>
          House 402, Rosewood Heights,<br />
          DLF Phase 5, Gurgaon
        </p>
      </div>

      <button 
        style={navButtonStyle}
        onClick={() => window.open('https://www.google.com/maps', '_blank')}
      >
        <span>📍</span>
        Start Navigation
      </button>

      <footer style={{ marginTop: "auto", textAlign: "center", padding: "20px" }}>
        <p style={{ color: theme.colors.textSecondary, fontSize: "12px" }}>
          Safe travels, Mitra! Always wear a helmet.
        </p>
      </footer>
    </div>
  );
}
