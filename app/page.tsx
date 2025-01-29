import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/home/About";
import FAQs from "@/components/home/FAQs";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";

export default function Home() {
    return (
        <>
            <Header />

            <Hero />

            <About />

            <Features />
            

            <Pricing />

            <FAQs />

            <Footer />
        </>
    )
}