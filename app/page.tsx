"use client";

import React, { useState, useEffect } from 'react';

export default function DeliveryMitraDashboard() {
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      maxWidth: "500px",
      margin: "0 auto",
      minHeight: "100vh",
      backgroundColor: "#F8F9FA",
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "column",
      padding: "0 0 40px 0"
    }}>
      {/* HEADER SECTION */}
      <header style={{
        backgroundColor: "#FFFFFF",
        padding: "32px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        borderRadius: "0 0 32px 32px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        marginBottom: "24px"
      }}>
        <img 
          src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
          alt="mishTee logo" 
          style={{ width: "80px", height: "auto", marginBottom: "16px" }}
        />
        <h1 style={{ color: "#FF8C00", fontSize: "24px", fontWeight: "800", margin: "0 0 8px 0" }}>
          mishTee Delivery Mitra
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            width: "10px",
            height: "10px",
            backgroundColor: "#22C55E",
            borderRadius: "50%",
            opacity: isPulsing ? 1 : 0.4,
            transition: "opacity 0.6s ease-in-out"
          }}></div>
          <span style={{ color: "#22C55E", fontSize: "14px", fontWeight: "700" }}>
            Agent Online
          </span>
        </div>
      </header>

      {/* TASK CARD */}
      <div style={{
        margin: "0 20px",
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        padding: "24px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        border: "1px solid #E2E8F0"
      }}>
        <div style={{ fontSize: "12px", fontWeight: "700", color: "#718096", textTransform: "uppercase", marginBottom: "8px" }}>
          Current Task
        </div>
        <div style={{ fontSize: "20px", fontWeight: "700", margin: "0 0 4px 0" }}>
          Deliver to: Arjun Mehta
        </div>
        <p style={{ margin: "4px 0 0 0", color: "#718096", fontSize: "15px", lineHeight: "1.4" }}>
          House 402, Rosewood Heights,<br />
          DLF Phase 5, Gurgaon
        </p>
      </div>

      {/* ACTION BUTTON */}
      <button 
        style={{
          margin: "24px 20px 0 20px",
          backgroundColor: "#FF8C00",
          color: "#FFFFFF",
          padding: "18px",
          borderRadius: "16px",
          fontSize: "18px",
          fontWeight: "700",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 14px 0 rgba(255, 140, 0, 0.39)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px"
        }}
        onClick={() => window.open('https://www.google.com/maps', '_blank')}
      >
        <span>📍</span>
        Start Navigation
      </button>

      <footer style={{ marginTop: "auto", textAlign: "center", padding: "20px" }}>
        <p style={{ color: "#718096", fontSize: "12px" }}>
          Safe travels, Mitra! Always wear a helmet.
        </p>
      </footer>
    </div>
  );
}
