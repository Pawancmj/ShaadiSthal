import Link from "next/link";

export default function BudgetCalculator(): React.ReactElement {
  return (
    <section className="budget-section" style={{
      background: "#1a1a1a",
      textAlign: "center",
      padding: "64px 32px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.75rem", fontWeight: 700,
        color: "#fff", marginBottom: 12,
      }}>
        Financial Harmony for Your Big Day.
      </h2>
      <p style={{
        fontSize: "0.82rem", color: "#888",
        maxWidth: 420, margin: "0 auto 28px",
        lineHeight: 1.7,
      }}>
        Set a budget, get recommendations on vendors, catering, decor based on your estimated guest count, city, and preferences made.
      </p>
      <Link href="/planner" style={{ display: "inline-block",
        background: "#D4A017", color: "#1a1a1a",
        padding: "12px 32px", borderRadius: 8,
        fontSize: "0.82rem", fontWeight: 700,
        textDecoration: "none",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        Calculate Your Budget
      </Link>
    </section>
  );
}
