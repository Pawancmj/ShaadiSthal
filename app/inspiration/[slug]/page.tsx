"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import { ReactElement } from "react";

const continueReading = [
  { title: "The Secret Language of Bridal Mehndi", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500&q=80" },
  { title: "Silk and Stone: Sherwani Essentials", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80" },
  { title: "Temple Weddings: A Sacred Minimalism", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500&q=80" },
];

const sidebarCards = [
  { title: "10 Palaces that Redefine Luxury", img: "https://images.unsplash.com/photo-1477587458883-47145ed31f2e?w=300&q=80" },
  { title: "The Editor's Guide to Sustainable Gifting", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=300&q=80" },
];

interface ArticlePageProps {
  params: { slug: string };
}

export default function ArticlePage({ params }: ArticlePageProps): ReactElement {
  const { slug } = params;
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  return (
    <div className="article-page">
      <Header />

      {/* HERO */}
      <div className="article-hero">
        <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1400&q=80" alt="Article Hero" />
        <div className="article-hero__overlay" />
        <div className="article-hero__content">
          <p className="article-hero__breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/inspiration">Journal</Link><span>›</span>
            <Link href="/inspiration?tab=Traditions">Traditions</Link>
          </p>
          <h1 className="article-hero__title">
            The Art of the Royal Varmala:<br />
            <em>A Guide to Floral Grandeur</em>
          </h1>
          <div className="article-hero__meta">
            <img src="https://i.pravatar.cc/40?img=12" alt="Author" className="article-hero__avatar" />
            <div>
              <p className="article-hero__author">Written by Ishaan Rathore, Senior Editor</p>
              <p className="article-hero__date">October 14, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <div className="article-body">
        {/* Share column */}
        <div className="article-share">
          <p className="article-share__label">SHARE</p>
          {[
            <svg key="share" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" /></svg>,
            <svg key="fb" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
            <svg key="tw" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>,
            <svg key="bm" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>,
          ].map((icon, i) => (
            <button key={i} className="article-share__btn">{icon}</button>
          ))}
        </div>

        {/* Main content */}
        <div className="article-content">
          <p>
            In the pantheon of Indian wedding rituals, few moments capture the breath of the assembly quite like the Varmala...
          </p>

          <h2>The Weight of Tradition</h2>
          <p>
            The history of the Varmala stretches back to Vedic times...
          </p>

          <div className="article-blockquote">
            <p>"The Varmala is the bridge between the mortal ceremony and the divine union—a circle of life woven through the transient beauty of nature."</p>
            <cite>— Acharya V. Shastry</cite>
          </div>

          <h2>Curating the Palette</h2>
          <p>
            When selecting your floral companions, consider the "Luxury of Contrast."...
          </p>

          <div className="article-img-grid">
            <div className="article-img-grid__main">
              <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80" alt="Floral arrangement" />
            </div>
            <div className="article-img-grid__side">
              <img src="https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=400&q=80" alt="Rose" />
            </div>
            <div className="article-img-grid__side">
              <img src="https://images.unsplash.com/photo-1561908818-8a37f16ef3c2?w=400&q=80" alt="Decor" />
            </div>
          </div>

          <p>
            Modern varmalas are also incorporating non-floral elements...
          </p>

          {/* Comment form */}
          <div className="comment-section">
            <h3>Join the Conversation</h3>
            <div className="comment-form">
              <div className="comment-form__row">
                <input type="text" placeholder="YOUR NAME" className="comment-form__input" value={name} onChange={e => setName(e.target.value)} />
                <input type="email" placeholder="EMAIL ADDRESS" className="comment-form__input" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <textarea placeholder="SHARE YOUR THOUGHTS..." className="comment-form__textarea" value={comment} onChange={e => setComment(e.target.value)} />
              <button className="comment-form__btn">Post Comment</button>
            </div>

            <div className="comment">
              <div className="comment__avatar">PK</div>
              <div className="comment__body">
                <div className="comment__header">
                  <span className="comment__name">Priya Kapoor</span>
                  <span className="comment__time">2 hours ago</span>
                </div>
                <p className="comment__text">This was so insightful!...</p>
                <span className="comment__reply">↩ Reply</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <aside className="article-sidebar">
          <div className="article-sidebar__section">
            <p className="article-sidebar__title">Inspiration</p>
            {sidebarCards.map((c) => (
              <div key={c.title} className="article-sidebar__card">
                <img src={c.img} alt={c.title} />
                <p className="article-sidebar__card-title">{c.title}</p>
              </div>
            ))}
          </div>
          <div className="article-sidebar__section">
            <div className="article-sidebar__newsletter">
              <h4 className="article-sidebar__newsletter-title">The Weekly Galas</h4>
              <p className="article-sidebar__newsletter-desc">Receive curated wedding inspiration directly in your inbox.</p>
              <input type="email" placeholder="Your Email" className="article-sidebar__newsletter-input" />
              <button className="article-sidebar__newsletter-btn">JOIN THE LIST</button>
            </div>
          </div>
        </aside>
      </div>

      {/* CONTINUE READING */}
      <div className="continue-section">
        <div className="continue-section__inner">
          <div className="continue-section__header">
            <h2 className="continue-section__title">Continue Your Journey</h2>
            <a href="#" className="continue-section__link">EXPLORE ALL TRADITIONS →</a>
          </div>
          <div className="continue-grid">
            {continueReading.map((c) => (
              <div key={c.title} className="continue-card">
                <img src={c.img} alt={c.title} />
                <div className="continue-card__overlay" />
                <div className="continue-card__text">
                  <p>{c.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="article-footer">
        <div className="article-footer__inner">
          <div className="article-footer__grid">
            <div>
              <span className="article-footer__logo">ShaadiSthal</span>
              <p className="article-footer__desc">The premier destination for the discerning Indian couple. Editorial. Excellence in wedding planning.</p>
              <div className="article-footer__social">
                {["↗", "📷", "▶"].map((icon, i) => (
                  <button key={i} className="article-footer__social-btn">{icon}</button>
                ))}
              </div>
            </div>
            {[
              { title: "Editorial", items: ["About Us", "Press Enquiries", "Editorial Policy"] },
              { title: "Legal", items: ["Privacy", "Terms of Service"] },
              { title: "Connect", items: [] },
            ].map(({ title, items }) => (
              <div key={title}>
                <p className="article-footer__col-title">{title}</p>
                {title === "Connect" ? (
                  <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                    {["↗", "📷", "▶"].map((icon, i) => (
                      <button key={i} className="article-footer__social-btn">{icon}</button>
                    ))}
                  </div>
                ) : (
                  <ul className="article-footer__col">
                    {items.map(i => <li key={i}><a href="#">{i}</a></li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="article-footer__bottom">© 2024 ShaadiSthal Editorial. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}