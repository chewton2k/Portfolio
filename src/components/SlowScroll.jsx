import { useEffect, useRef } from "react";

function SlowScrollWrapper({ children }) {
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);
  const animationRef = useRef(null);
  const isScrollingToSection = useRef(false);
  
  // You can adjust this value to control the scroll speed
  // Lower values = slower scrolling (try 0.05 for very slow)
  // Higher values = faster scrolling (try 0.3 for faster)
  const scrollSpeedFactor = 1;
  
  useEffect(() => {
    // Set up a custom event to handle navigation from navbar
    const handleNavigation = (event) => {
      const { sectionId } = event.detail;
      const element = document.getElementById(sectionId);
      
      if (element) {
        isScrollingToSection.current = true;
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset;
        targetScrollRef.current = yPosition;
        
        // Reset the flag after animation completes
        setTimeout(() => {
          isScrollingToSection.current = false;
        }, 1000);
      }
    };
    
    window.addEventListener('navigateToSection', handleNavigation);
    
    // Initialize scrolling variables
    targetScrollRef.current = window.scrollY;
    currentScrollRef.current = window.scrollY;
    
    function smoothScroll() {
      // Calculate distance to target
      const distance = targetScrollRef.current - currentScrollRef.current;
      
      // Only animate if there's a significant distance to travel
      if (Math.abs(distance) > 0.5) {
        // During section navigation, use faster scrolling
        const factor = isScrollingToSection.current ? 0.15 : scrollSpeedFactor;
        
        // Update the current position based on the factor
        currentScrollRef.current += distance * factor;
        
        // Apply the scroll
        window.scrollTo(0, Math.round(currentScrollRef.current));
      }
      
      // Continue the animation
      animationRef.current = requestAnimationFrame(smoothScroll);
    }
    
    function handleWheel(event) {
      // Only handle wheel events if not currently navigating to a section
      if (!isScrollingToSection.current) {
        event.preventDefault();
        
        // Add scroll delta to target position, apply a multiplier to control sensitivity
        const scrollMultiplier = 0.5; // Decrease this value to make scrolling less sensitive
        targetScrollRef.current += event.deltaY * scrollMultiplier;
        
        // Constrain to page bounds
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        targetScrollRef.current = Math.max(0, Math.min(targetScrollRef.current, maxScroll));
      }
    }
    
    // Start the animation
    animationRef.current = requestAnimationFrame(smoothScroll);
    
    // Add event listener for scroll events
    window.addEventListener("wheel", handleWheel, { passive: false });
    
    // Make sure to track actual window scroll position if changed by other means
    const handleWindowScroll = () => {
      if (!isScrollingToSection.current) {
        targetScrollRef.current = window.scrollY;
        currentScrollRef.current = window.scrollY;
      }
    };
    
    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener('navigateToSection', handleNavigation);
    };
  }, []);
  
  return <>{children}</>;
}

export default SlowScrollWrapper;