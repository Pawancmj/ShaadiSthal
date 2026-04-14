const rows = [
  { label: "Pricing", a: "₹2.5L/day", b: "₹3.2L/day" },
  { label: "Capacity", a: "500 Pax", b: "800 Pax" },
  { label: "Catering", a: "In-house", b: "Vendor 21+" },
  { label: "Rooms", a: "Around 40", b: "60+" },
];

export default function ChooseWithConfidence() {
  return (
    <section style={{
      maxWidth: 1160, margin: "0 auto",
      padding: "52px 32px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ display: "flex", gap: 60, alignItems: "center", flexWrap: "wrap" }}>

        {/* Left */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", color: "#bbb", textTransform: "uppercase", marginBottom: 8 }}>
            Compare
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.65rem", fontWeight: 700, marginBottom: 12 }}>
            Choose with Confidence.
          </h2>
          <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.7, maxWidth: 340, marginBottom: 22 }}>
            Stop jumping between tabs. Compare your top venue choices side-by-side on pricing, capacity, catering, and more — all from one single view.
          </p>
          <button style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#1a1a1a", color: "#fff",
            padding: "10px 20px", borderRadius: 6,
            fontSize: "0.8rem", fontWeight: 600,
            border: "none", cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Try Comparison Tool
          </button>
        </div>

        {/* Right – Compare Card */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <div style={{
            background: "#fff", borderRadius: 16,
            boxShadow: "0 4px 28px rgba(0,0,0,0.10)",
            padding: 20, border: "1px solid #f0f0f0",
          }}>
            {/* Photos */}
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
              <div style={{ flex: 1, borderRadius: 10, overflow: "hidden", height: 90 }}>
                <img src="https://images.unsplash.com/photo-1561908818-8a37f16ef3c2?w=300&q=80" alt="Heritage" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{
                width: 30, height: 30, flexShrink: 0,
                background: "#f0c020", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.58rem", fontWeight: 800, color: "#fff",
              }}>VS</div>
              <div style={{ flex: 1, borderRadius: 10, overflow: "hidden", height: 90 }}>
                <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=300&q=80" alt="Crystal" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>

            {/* Names */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#555" }}>Heritage Palace</span>
              <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#555" }}>The Crystal Suites</span>
            </div>

            {/* Rows */}
            {rows.map((row) => (
              <div key={row.label} style={{
                display: "flex", alignItems: "center",
                borderTop: "1px solid #f4f4f4", padding: "9px 0",
                fontSize: "0.78rem",
              }}>
                <span style={{ flex: 1, fontWeight: 500, color: "#222" }}>{row.a}</span>
                <span style={{ padding: "0 14px", fontSize: "0.68rem", color: "#aaa", fontWeight: 500, whiteSpace: "nowrap" }}>{row.label}</span>
                <span style={{ flex: 1, fontWeight: 500, color: "#222", textAlign: "right" }}>{row.b}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}