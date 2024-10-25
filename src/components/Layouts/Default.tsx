import React, { useEffect, useState, useRef } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const Default = ({ children }: DefaultLayoutProps) => {
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current && containerRef.current.scrollTop > 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <div ref={containerRef} className="container-app">
        <Header scrolled={scrolled} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Default;
