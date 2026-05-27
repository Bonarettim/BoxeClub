import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import ContactHero from "@/components/Contact/ContactHero/ContactHero";
import ContactLocation from "@/components/Contact/ContactLocation/ContactLocation";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactLocation />
    </>
  );
}