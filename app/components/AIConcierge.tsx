export default function AIConcierge(): React.ReactElement {
  return (
    <section style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px 52px", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{
        borderRadius: 20, overflow: "hidden",
        background: "linear-gradient(130deg, #e91e8c 0%, #c8102e 55%, #7b0000 100%)",
        display: "flex", flexWrap: "wrap",
      }}>
        {/* Left */}
        <div style={{ flex: 1, minWidth: 280, padding: "44px 48px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(255,255,255,0.18)", color: "#fff",
            fontSize: "0.7rem", fontWeight: 600,
            padding: "5px 12px", borderRadius: 20, marginBottom: 16,
          }}>
            ⚡ AI-Powered
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.65rem", fontWeight: 700,
            color: "#fff", marginBottom: 12,
          }}>
            Your AI Wedding Concierge.
          </h2>
          <p style={{
            fontSize: "0.8rem", color: "rgba(255,255,255,0.78)",
            lineHeight: 1.7, maxWidth: 320, marginBottom: 24,
          }}>
            Let our intelligent assistant discover vendors, curate shortlists, draft your timeline, and budget allocation based on your ideals and vision.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{
              background: "#fff", color: "#C8102E",
              padding: "9px 20px", borderRadius: 8,
              fontSize: "0.78rem", fontWeight: 700,
              border: "none", cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Start Now
            </button>
            <button style={{
              background: "transparent", color: "#fff",
              border: "1px solid rgba(255,255,255,0.5)",
              padding: "9px 20px", borderRadius: 8,
              fontSize: "0.78rem", fontWeight: 600,
              cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
            }}>
              Budget Status
            </button>
          </div>
        </div>

        {/* Right – Countdown */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "44px 52px", textAlign: "center",
        }}>
          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginBottom: 14 }}>
              Days to Go
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 20, marginBottom: 16 }}>
              {[{ n: "124", u: "Days" }, { n: "18", u: "Hours" }, { n: "45", u: "Mins" }].map(({ n, u }) => (
                <div key={u} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.2rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{u}</div>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#fff", fontWeight: 600 }}>
              Simran &amp; Arjun
            </p>
            <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.55)", marginTop: 4, marginBottom: 12 }}>
              November 2024
            </p>
            <button style={{
              fontSize: "0.7rem", color: "rgba(255,255,255,0.6)",
              textDecoration: "underline", cursor: "pointer",
              background: "none", border: "none",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Customize My Countdown
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}