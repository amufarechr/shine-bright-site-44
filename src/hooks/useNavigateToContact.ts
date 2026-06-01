import { useNavigate, useLocation } from "react-router-dom";

/**
 * Returns a function that navigates to /consultoria and then scrolls to #contacto.
 * React Router's navigate() doesn't trigger hash scrolling on cross-page navigation,
 * so we wait for the DOM to be ready before scrolling.
 */
export function useNavigateToContact() {
  const navigate = useNavigate();
  const location = useLocation();

  return () => {
    const targetPath = "/consultoria";
    const scrollToContact = () => {
      // Try a few times in case the DOM hasn't rendered yet
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById("contacto");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 10) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };
      setTimeout(tryScroll, 100);
    };

    if (location.pathname === targetPath) {
      // Already on the page — just scroll
      scrollToContact();
    } else {
      // Navigate first, then scroll after render
      navigate(targetPath);
      setTimeout(scrollToContact, 350);
    }
  };
}
