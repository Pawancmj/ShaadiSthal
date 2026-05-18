const timelineCards = [
  {
    title: "Next Task",
    text: "Confirm Floral Theme for Reception",
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h2M10 7h10M4 12h10M18 12h2M4 17h2M10 17h10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 5v4M16 10v4M8 15v4" />
      </svg>
    ),
  },
  {
    title: "Budget Status",
    text: "65% of Rs.50L Allocated",
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.4" />
        <path strokeLinecap="round" d="M7 9h1M16 15h1" />
      </svg>
    ),
  },
];

export default function AIConcierge(): React.ReactElement {
  return (
    <section
      className="ai-section"
      style={{
        maxWidth: 1160,
        margin: "0 auto",
        padding: "52px 32px 52px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        className="ai-card"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 260px",
          gap: 28,
          alignItems: "stretch",
        }}
      >
        <div
          className="ai-card__copy"
          style={{
            position: "relative",
            minHeight: 248,
            overflow: "hidden",
            borderRadius: 16,
            background: "linear-gradient(135deg, #c70458 0%, #e00b65 50%, #d3054d 100%)",
            padding: "42px 44px 34px",
            boxShadow: "0 18px 42px rgba(199, 4, 88, 0.18)",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: -22,
              bottom: -4,
              width: 150,
              height: 150,
              color: "rgba(255,255,255,0.12)",
            }}
          >
            <svg width="150" height="150" viewBox="0 0 120 120" fill="none">
              <path
                d="M60 4L74.5 45.5L116 60L74.5 74.5L60 116L45.5 74.5L4 60L45.5 45.5L60 4Z"
                stroke="currentColor"
                strokeWidth="9"
              />
              <path
                d="M99 10L104 25L119 30L104 35L99 50L94 35L79 30L94 25L99 10Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <h2
            style={{
              position: "relative",
              fontFamily: "'Playfair Display', serif",
              fontSize: "2rem",
              lineHeight: 1.15,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 14,
            }}
          >
            Your AI Wedding Concierge.
          </h2>
          <p
            style={{
              position: "relative",
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.65,
              maxWidth: 500,
              marginBottom: 30,
            }}
          >
            Let our intelligent assistant handle the timelines, vendor
            follow-ups, and guest lists while you focus on the magic.
          </p>

          <div
            className="ai-card__task-grid"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 16,
              maxWidth: 620,
            }}
          >
            {timelineCards.map((card) => (
              <div
                key={card.title}
                style={{
                  minHeight: 72,
                  borderRadius: 6,
                  border: "1px solid rgba(255,255,255,0.16)",
                  background: "rgba(255,255,255,0.12)",
                  padding: "13px 15px",
                  color: "#fff",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div style={{ marginBottom: 6, opacity: 0.95 }}>{card.icon}</div>
                <p style={{ fontSize: "0.74rem", fontWeight: 800, marginBottom: 2 }}>{card.title}</p>
                <p style={{ fontSize: "0.66rem", color: "rgba(255,255,255,0.72)" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="ai-card__countdown"
          style={{
            minHeight: 248,
            borderRadius: 16,
            background: "#fff",
            boxShadow: "0 16px 34px rgba(38, 31, 24, 0.16)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "36px 26px",
            textAlign: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.58rem",
                fontWeight: 800,
                letterSpacing: "0.13em",
                color: "#c59b38",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              The Big Day
            </p>
            <div
              className="ai-card__time-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr auto 1fr",
                alignItems: "start",
                columnGap: 10,
                marginBottom: 18,
              }}
            >
              {[
                { n: "124", u: "Days" },
                { n: "18", u: "Hours" },
                { n: "45", u: "Mins" },
              ].map((time, index) => (
                <span key={time.u} style={{ display: "contents" }}>
                  <span>
                    <span
                      className="ai-card__time-number"
                      style={{
                        display: "block",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.85rem",
                        lineHeight: 1,
                        fontWeight: 600,
                        color: "#151515",
                      }}
                    >
                      {time.n}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.54rem",
                        color: "#86817a",
                        marginTop: 5,
                        textTransform: "uppercase",
                      }}
                    >
                      {time.u}
                    </span>
                  </span>
                  {index < 2 && (
                    <span style={{ fontSize: "1.35rem", lineHeight: 1, color: "#25211d", paddingTop: 2 }}>:</span>
                  )}
                </span>
              ))}
            </div>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.04rem",
                color: "#171717",
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              Simran &amp; Arjun
            </p>
            <p style={{ fontSize: "0.62rem", color: "#8d877f", marginBottom: 20 }}>
              November 24th, 2024
            </p>
            <button
              style={{
                color: "#d30558",
                background: "none",
                border: "none",
                fontSize: "0.72rem",
                fontWeight: 800,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Customize My Countdown
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
