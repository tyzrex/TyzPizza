import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ShowNavbarProps {
  children: React.ReactNode;
}

export const ShowNavbar: React.FC<ShowNavbarProps> = ({ children }) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div className="top-0 sticky z-50">{showNavbar && children}</div>;
};

export const ShowFooter: React.FC<ShowNavbarProps> = ({ children }) => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return <div>{showFooter && children}</div>;
};
