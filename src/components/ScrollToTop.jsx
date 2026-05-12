import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sayfayı anında en yukarı taşır
    window.scrollTo(0, 0);
  }, [pathname]); // Sayfa yolu her değiştiğinde çalışır

  return null;
};

export default ScrollToTop;
