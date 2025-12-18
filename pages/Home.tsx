import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Services } from '../components/Services';
import { Philosophy } from '../components/Philosophy';
import { Pricing } from '../components/Pricing';
import { ContactCTA } from '../components/ContactCTA';

export const Home: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        // Handle hash scrolling when arriving from another page
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Hero />
            <Features />
            <Services />
            <Philosophy />
            <Pricing />
            <ContactCTA />
        </>
    );
};
