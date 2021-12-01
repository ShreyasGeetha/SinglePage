import Head from 'next/head'
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import LogoCloud from '../components/LogoCloud';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import FeatureList from '../components/FeatureList';
import Header from '../components/Header';
import Team from '../components/Team';

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <Stats />
      <FeatureList />
      <LogoCloud />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  )
}
