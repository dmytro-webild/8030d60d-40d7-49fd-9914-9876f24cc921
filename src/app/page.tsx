"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="blurBottom"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Menu",          id: "products"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Rivoli"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain"}}
      title="Authentic Italian Elegance in Tunis"
      description="NOTICE: This demo has expired. Please contact Mouadh at Mourezlabs at 50421825 for a fully functional, custom-built site for your business."
      leftCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-red-cafe-interior-with-tiled-walls_181624-59785.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/sliced-fish-with-cheese-glass-wine_140725-6341.jpg" }
      ]}
      rightCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/senior-couple-dancing-home_23-2149891557.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/elegant-dining-table-setting-with-candles-decorations_23-2152009915.jpg" }
      ]}
      buttons={[{ text: "Contact Developer", href: "#contact" }]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="A Legacy of Italian Passion"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Handmade Pasta", description: "Freshly kneaded pasta using traditional Italian methods.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-mushroom-soup-with-seasonings-dark-space_140725-75770.jpg" },
        { title: "Curated Wine", description: "A refined selection from Italy’s most prestigious vineyards.", imageSrc: "http://img.b2bpic.net/free-photo/bartender-looking-glass-red-wine_107420-65843.jpg" }
      ]}
      title="The Rivoli Experience"
      description="We blend heritage techniques with the finest local ingredients to create an unforgettable dining journey."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Fresh Ravioli", price: "$24", imageSrc: "http://img.b2bpic.net/free-photo/top-view-bolognese-spaghetti-topped-with-basil-turquoise-plate_140725-5095.jpg" },
        { id: "p2", name: "Creamy Risotto", price: "$28", imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-italian-food-composition-with-copyspace_23-2148202524.jpg" }
      ]}
      title="Signature Flavors"
      description="Explore our chef-curated selection of authentic Italian classics."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        { id: "t1", name: "Marco Rossi", role: "Executive Chef", imageSrc: "http://img.b2bpic.net/free-photo/crazy-chef-happy-expression_1194-1360.jpg" }
      ]}
      title="Meet Our Culinary Artists"
      description="Passionate experts committed to bringing authentic Italy to your plate."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Sarah J.", role: "Food Critic", testimonial: "An incredible journey of flavors!", imageSrc: "http://img.b2bpic.net/free-photo/lovely-couple-enjoying-new-year-party_23-2149173295.jpg" }
      ]}
      title="Guest Reflections"
      description="Hear what our patrons say about their dining experience at Rivoli."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["Gourmet Award", "Tunis Dining Guide"]}
      title="Recognized Excellence"
      description="Honored to be a preferred destination for culinary enthusiasts."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[{ id: "q1", title: "Do I need a reservation?", content: "We highly recommend reservations." }]}
      sideTitle="Frequently Asked"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      text="Demo period expired. Please contact Mouadh at Mourezlabs at 50421825 to secure your full license and launch your professional website today."
      buttons={[{ text: "Contact Mouadh", href: "tel:+21650421825" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Rivoli Restaurant"
      columns={[{ title: "Navigation", items: [{ label: "About", href: "#about" }] }]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}