import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bath,
  Building2,
  Check,
  ChevronRight,
  House,
  MapPin,
  Menu,
  Phone,
  Play,
  RefreshCcw,
  Sparkles,
  SprayCan,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";
import { MapcnMarkerTooltip } from "@/components/ui/mapcn-marker-tooltip";
import heroImage from "@/assets/dream-clean-hero.jpg";
import kitchenImage from "@/assets/kitchen-transformation.jpg";
import bathroomImage from "@/assets/bathroom-transformation.jpg";
import livingImage from "@/assets/living-room-transformation.jpg";
import moveImage from "@/assets/move-in-transformation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dream Clean | Premium Cleaning in New Braunfels, TX" },
      {
        name: "description",
        content:
          "Premium, detailed cleaning services for homes and businesses in New Braunfels, Texas. Get a free quote from Dream Clean Cleaning Service LLC.",
      },
      { property: "og:title", content: "Dream Clean | A Cleaner Space. A Better Feeling." },
      {
        property: "og:description",
        content: "Premium cleaning services in New Braunfels, TX — detailed, dependable, and designed around your space.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const navItems = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Before & After", "#before-after"],
  ["About", "#about"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
] as const;

const services = [
  { title: "Residential Cleaning", text: "Thoughtful care for every room in your home.", icon: House },
  { title: "Deep Cleaning", text: "A detailed reset for the spaces that need more attention.", icon: Sparkles },
  { title: "Move-In / Move-Out", text: "A fresh, spotless start for your next transition.", icon: ArrowRight },
  { title: "Commercial Cleaning", text: "Polished, professional spaces ready for business.", icon: Building2 },
  { title: "Recurring Cleaning", text: "Dependable ongoing care built around your routine.", icon: RefreshCcw },
  { title: "Customized Cleaning", text: "A flexible service shaped to fit your space.", icon: SprayCan },
] as const;

const accordionItems = [
  { title: "Deep Cleaning", image: kitchenImage },
  { title: "Kitchen Cleaning", image: heroImage },
  { title: "Bathroom Cleaning", image: bathroomImage },
  { title: "Living Spaces", image: livingImage },
  { title: "Fresh & Spotless", image: moveImage },
];

const transformations = [
  { title: "Kitchen", image: kitchenImage },
  { title: "Bathroom", image: bathroomImage },
];

// Replace each "" with your reel video URL (e.g. an .mp4 link) when ready —
// the placeholder disappears automatically once a URL is set.
const reels = [
  { title: "Deep Cleaning", video: "" },
  { title: "Fresh & Spotless", video: "" },
  { title: "Dream Clean Difference", video: "" },
] as const;

function Brand() {
  return (
    <a href="#home" className="brand" aria-label="Dream Clean home">
      <span className="brand-mark" aria-hidden="true"><Sparkles /></span>
      <span><strong>Dream Clean</strong><small>Cleaning Service LLC</small></span>
    </a>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <Button asChild variant="luxury" className="nav-cta">
            <a href="#contact">Get a Free Quote</a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ChevronRight /></a>
            ))}
            <Button asChild variant="luxury" size="lg"><a href="#contact">Get a Free Quote</a></Button>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy entrance-copy">
            <div className="trust-pill"><BadgeCheck /> 100% Recommended <span /> 21 Reviews</div>
            <p className="eyebrow">Premium cleaning · New Braunfels, TX</p>
            <h1>A Cleaner Space.<br /><em>A Better Feeling.</em></h1>
            <p className="hero-lede">Premium cleaning services in New Braunfels, TX — detailed, dependable, and designed around your space.</p>
            <div className="hero-actions">
              <Button asChild variant="luxury" size="lg"><a href="#contact">Get a Free Quote <ArrowRight /></a></Button>
              <Button asChild variant="luxuryOutline" size="lg"><a href="tel:+18308379572"><Phone /> Call +1 830-837-9572</a></Button>
            </div>
            <div className="hero-detail"><span /><p>Care in every detail</p></div>
          </div>
          <div className="hero-visual entrance-image">
            <div className="hero-image-wrap">
              <img src={heroImage} alt="Professional cleaner polishing a bright modern kitchen" width={1600} height={1104} />
            </div>
            <div className="hero-glass-card">
              <span className="glass-icon"><Sparkles /></span>
              <div><strong>Fresh. Polished. Yours.</strong><small>Cleaning designed around your space.</small></div>
            </div>
          </div>
        </section>

        <section className="trust-strip" id="reviews" aria-label="Dream Clean trust markers">
          <div><strong>100%</strong><span>Recommended</span></div>
          <i />
          <div><strong>21</strong><span>Reviews</span></div>
          <i />
          <div><strong>New Braunfels</strong><span>Texas</span></div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-heading">
            <div><p className="eyebrow">Elevated everyday care</p><h2>Cleaning, considered.</h2></div>
            <p>From a complete reset to dependable recurring care, every service is tailored to the way you use your space.</p>
          </div>
          <div className="services-grid">
            {services.map(({ title, text, icon: Icon }, index) => (
              <article className="service-card" key={title}>
                <span className="service-number">0{index + 1}</span>
                <Icon className="service-icon" />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact" aria-label={`Ask about ${title}`}><ArrowRight /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="showcase-section">
          <div className="section-heading light-heading">
            <div><p className="eyebrow">Our approach</p><h2>See the Dream Clean Difference</h2></div>
            <p>Explore the spaces we care for, from deep-clean details to a fresh and spotless finish.</p>
          </div>
          <InteractiveImageAccordion items={accordionItems} />
        </section>

        <section id="before-after" className="section transformations-section">
          <div className="section-heading centered-heading">
            <div><p className="eyebrow">Visible results</p><h2>From Messy to Remarkable</h2></div>
            <p>Two spaces, transformed through thoughtful, detailed care.</p>
          </div>
          <div className="transformation-grid">
            {transformations.map(({ title, image }) => (
              <article className="transformation-card" key={title}>
                <div className="comparison-image">
                  <img src={image} alt={`Before and after ${title.toLowerCase()} cleaning`} loading="lazy" width={1600} height={1008} />
                  <span className="before-label">Before</span>
                  <span className="after-label"><Check /> After</span>
                  <span className="comparison-line" />
                </div>
                <div className="transformation-caption"><h3>{title}</h3><span>Before &amp; After</span></div>
              </article>
            ))}
          </div>
        </section>

        <section id="reels" className="section reels-section" aria-label="Cleaning in Action">
          <div className="section-heading centered-heading">
            <div><p className="eyebrow">Cleaning in Action</p><h2>A Little Look Inside Dream Clean</h2></div>
            <p>Short clips from our visits — the details, the finish, and the care behind every clean.</p>
          </div>
          <div className="reels-grid">
            {reels.map(({ title, video }) => (
              <article className="reel-card" key={title} aria-label={title}>
                {video ? (
                  <video src={video} muted loop playsInline preload="metadata" />
                ) : (
                  <div className="reel-placeholder" aria-hidden="true" />
                )}
                <span className="reel-play" aria-hidden="true"><Play /></span>
                <div className="reel-caption"><span className="reel-dot" aria-hidden="true" /><h3>{title}</h3></div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-image-wrap">
            <img src={heroImage} alt="Detailed cleaning of a polished kitchen island" loading="lazy" width={1600} height={1104} />
            <span className="about-badge"><BadgeCheck /><strong>100%</strong><small>Recommended</small></span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Dream Clean Cleaning Service LLC</p>
            <h2>Cleaning With Care.<br />Results You Can See.</h2>
            <p>Dream Clean provides premium cleaning services in New Braunfels, TX. Every service is detailed, dependable, and designed around your space.</p>
            <ul>
              <li><Check /> Residential and commercial care</li>
              <li><Check /> One-time and recurring cleaning</li>
              <li><Check /> Customized for your space</li>
            </ul>
            <Button asChild variant="luxuryOutline" size="lg"><a href="#services">Explore Our Services <ArrowRight /></a></Button>
          </div>
        </section>

        <section className="service-area-section" aria-labelledby="service-area-heading">
          <div className="service-area-copy">
            <p className="eyebrow">Location / Service Area</p>
            <h2 id="service-area-heading">Proudly serving New Braunfels.</h2>
            <p>Premium cleaning care for homes and businesses in New Braunfels, TX, United States.</p>
            <div className="service-area-address">
              <span><MapPin /></span>
              <div><strong>Dream Clean Cleaning Service LLC</strong><small>New Braunfels, TX</small></div>
            </div>
          </div>
          <div className="service-area-map-wrap">
            <MapcnMarkerTooltip
              latitude={29.703}
              longitude={-98.1245}
              title="Dream Clean Cleaning Service LLC"
              subtitle="New Braunfels, TX"
            />
          </div>
        </section>

        <section id="contact" className="cta-section">
          <div className="cta-inner">
            <span className="cta-icon"><Sparkles /></span>
            <p className="eyebrow">Your fresh start</p>
            <h2>Ready for a Cleaner Space?</h2>
            <p>Let Dream Clean Cleaning Service LLC take care of the cleaning so you can enjoy your space.</p>
            <div className="hero-actions cta-actions">
              <Button asChild variant="luxury" size="lg"><a href="tel:+18308379572">Get a Free Quote <ArrowRight /></a></Button>
              <Button asChild variant="luxuryOutline" size="lg"><a href="tel:+18308379572"><Phone /> Call +1 830-837-9572</a></Button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <Brand />
          <p>Premium cleaning services in New Braunfels, TX.</p>
          <a className="footer-phone" href="tel:+18308379572"><Phone /> +1 830-837-9572</a>
        </div>
        <nav aria-label="Footer navigation">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="footer-bottom"><span>Dream Clean Cleaning Service LLC</span><span>New Braunfels, TX, United States</span></div>
      </footer>
    </div>
  );
}