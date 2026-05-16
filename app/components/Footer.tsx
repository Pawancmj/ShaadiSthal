const links = {
  "Quick Links": ["Venues", "Photographers", "Catering", "Makeup Artists", "Decor"],
  "Company": ["About Us", "Careers", "Press", "Contact", "Blog"],
  "Connect": ["Instagram", "Facebook", "Pinterest", "YouTube", "Twitter"],
};

export default function Footer(): React.ReactElement {
  return (
    <footer style={{
      background: "#111",
      padding: "56px 32px 28px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
          gap: 40, marginBottom: 40,
        }}>
          {/* Brand */}
          <div>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.25rem", fontWeight: 700,
              color: "#E91E8C", display: "block", marginBottom: 10,
            }}>
              ShaadiSthal
            </span>
            <p style={{ fontSize: "0.75rem", lineHeight: 1.7, color: "#666", maxWidth: 220 }}>
              Helping South Asian couples plan their dream wedding with grandeur and precision.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 style={{
                fontSize: "0.68rem", fontWeight: 600, color: "#ccc",
                textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14,
              }}>
                {heading}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" style={{ fontSize: "0.76rem", color: "#666", textDecoration: "none" }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid #222", paddingTop: 20,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: "0.7rem", color: "#444" }}>© 2024 Shaadified. All rights reserved.</p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" style={{ fontSize: "0.7rem", color: "#444", textDecoration: "none" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
