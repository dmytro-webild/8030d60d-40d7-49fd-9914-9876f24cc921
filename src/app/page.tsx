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
        background="none"
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
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Rivoli"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain",
      }}
      title="Authentic Italian Elegance in Tunis"
      description="Experience timeless Italian cuisine crafted with passion in an intimate, sophisticated setting. From handmade pasta to curated wine selections, every detail reflects our commitment to culinary excellence."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-red-cafe-interior-with-tiled-walls_181624-59785.jpg",
          imageAlt: "Chef preparing dish",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sliced-fish-with-cheese-glass-wine_140725-6341.jpg",
          imageAlt: "Chef preparing dish",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-eating-pasta-italian-restaurant_1303-24360.jpg",
          imageAlt: "Chef preparing dish",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/event-hall-furniture-brown-white-colors_114579-2230.jpg",
          imageAlt: "Chef preparing dish",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/chicken-tagliatelle-sauce-parmesan_140725-6574.jpg",
          imageAlt: "Chef preparing dish",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-table-arrangement-with-delicious-food_23-2149617138.jpg",
          imageAlt: "Chef preparing dish",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/senior-couple-dancing-home_23-2149891557.jpg",
          imageAlt: "Fine wine selection",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-dining-table-setting-with-candles-decorations_23-2152009915.jpg",
          imageAlt: "Fine wine selection",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-macaroons-cafe-table_23-2147787053.jpg",
          imageAlt: "Fine wine selection",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/table-assortment-with-plant-view_23-2148914893.jpg",
          imageAlt: "Fine wine selection",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/glass-red-wine-dining-table_181624-57657.jpg",
          imageAlt: "Fine wine selection",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-dining-table-arrangement_23-2150312217.jpg",
          imageAlt: "Fine wine selection",
        },
      ]}
      buttons={[
        {
          text: "Reserve Your Table",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081864.jpg",
          alt: "Happy guest",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheese-platter-with-grapes-glass-red-wine_114579-1782.jpg",
          alt: "Wine pairing",
        },
        {
          src: "http://img.b2bpic.net/free-photo/vegetable-salad-with-glass-wine_140725-4323.jpg",
          alt: "Fresh salad",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sitting-table-with-chairs-yellow-sofa-restaurant-with-panoramic-view_114579-1523.jpg",
          alt: "Restaurant view",
        },
        {
          src: "http://img.b2bpic.net/free-photo/friendly-afro-man-traditional-yellow-clothes-restaurant_627829-1132.jpg",
          alt: "Staff member",
        },
      ]}
      avatarText="Over 5,000 delighted guests"
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/crazy-chef-happy-expression_1194-1506.jpg",
          alt: "Award 1",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/abstract-green-cream-food-logo_23-2149153009.jpg",
          alt: "Award 2",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/girl-looking-side-while-holding-hand-tablet_1157-2118.jpg",
          alt: "Award 3",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/restaurant-retro-brand-logo-pack_23-2148368480.jpg",
          alt: "Award 4",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/spoon-fork-food-logo-art-illustration_56104-776.jpg",
          alt: "Award 5",
        },
      ]}
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
        {
          title: "Handmade Pasta",
          description: "Freshly kneaded pasta using traditional Italian methods.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-mushroom-soup-with-seasonings-dark-space_140725-75770.jpg",
        },
        {
          title: "Curated Wine",
          description: "A refined selection from Italy’s most prestigious vineyards.",
          imageSrc: "http://img.b2bpic.net/free-photo/bartender-looking-glass-red-wine_107420-65843.jpg",
        },
        {
          title: "Intimate Ambiance",
          description: "Sophisticated, cozy setting perfect for any special occasion.",
          imageSrc: "http://img.b2bpic.net/free-photo/new-year-spend-with-friends-celebrating_23-2149196964.jpg",
        },
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
        {
          id: "p1",
          name: "Fresh Ravioli",
          price: "$24",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-bolognese-spaghetti-topped-with-basil-turquoise-plate_140725-5095.jpg",
        },
        {
          id: "p2",
          name: "Creamy Risotto",
          price: "$28",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-italian-food-composition-with-copyspace_23-2148202524.jpg",
        },
        {
          id: "p3",
          name: "Artisan Pizza",
          price: "$20",
          imageSrc: "http://img.b2bpic.net/free-photo/view-pizza-cutter-arrangement_23-2148574228.jpg",
        },
        {
          id: "p4",
          name: "Tiramisu",
          price: "$12",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-fruit-tart-plate_23-2148519066.jpg",
        },
        {
          id: "p5",
          name: "Grilled Sea Bass",
          price: "$32",
          imageSrc: "http://img.b2bpic.net/free-photo/chicken-roulets-with-vegetables-table_140725-4553.jpg",
        },
        {
          id: "p6",
          name: "Antipasto Platter",
          price: "$26",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-food-cocktails-arrangement_23-2150245003.jpg",
        },
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
        {
          id: "t1",
          name: "Marco Rossi",
          role: "Executive Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-chef-happy-expression_1194-1360.jpg",
        },
        {
          id: "t2",
          name: "Elena Bianchi",
          role: "Sommelier",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-male-cook-wearing-chef-s-hat_23-2147863769.jpg",
        },
        {
          id: "t3",
          name: "Giovanni Moretti",
          role: "Sous Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-business-owner_23-2149434511.jpg",
        },
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
        {
          id: "1",
          name: "Sarah J.",
          role: "Food Critic",
          testimonial: "An incredible journey of flavors! The ambiance is unmatched.",
          imageSrc: "http://img.b2bpic.net/free-photo/lovely-couple-enjoying-new-year-party_23-2149173295.jpg",
        },
        {
          id: "2",
          name: "David L.",
          role: "Diner",
          testimonial: "The best Italian dining in Tunis. Absolute perfection.",
          imageSrc: "http://img.b2bpic.net/free-photo/affectionate-man-kissing-his-girlfriend-while-toasting-with-champagne-dinner-dining-table_637285-3602.jpg",
        },
        {
          id: "3",
          name: "Amira H.",
          role: "Local",
          testimonial: "Perfect for our date night. The staff is so welcoming.",
          imageSrc: "http://img.b2bpic.net/free-photo/meeting-businessmen_1098-15491.jpg",
        },
        {
          id: "4",
          name: "Michael K.",
          role: "Tourist",
          testimonial: "Felt just like sitting in a Rome trattoria. Highly recommend.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5054.jpg",
        },
        {
          id: "5",
          name: "Julian W.",
          role: "Foodie",
          testimonial: "Superb wine list and exquisite pasta dishes. A true gem.",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-restaurant_23-2148006620.jpg",
        },
      ]}
      title="Guest Reflections"
      description="Hear what our patrons say about their dining experience at Rivoli."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Gourmet Award",
        "Tunis Dining Guide",
        "City Star",
        "Italian Culinary Association",
        "Top Rated 2024",
        "Excellence Seal",
        "Gold Standard",
      ]}
      title="Recognized Excellence"
      description="Honored to be a preferred destination for culinary enthusiasts."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Do I need a reservation?",
          content: "We highly recommend reservations, especially for weekend dinner service.",
        },
        {
          id: "q2",
          title: "Is there a dress code?",
          content: "We encourage smart casual attire to match our upscale, cozy atmosphere.",
        },
        {
          id: "q3",
          title: "Do you offer private dining?",
          content: "Yes, we host intimate celebrations and private events.",
        },
      ]}
      sideTitle="Frequently Asked"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to experience Rivoli? Reserve your table for an evening of authentic Italian excellence."
      buttons={[
        {
          text: "Book Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Rivoli Restaurant"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#products",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
