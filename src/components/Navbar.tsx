import React, { useEffect, useState } from "react";
import { Film, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { createPortal } from "react-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 shadow-md backdrop-blur-md bg-black/80"
          : "py-4 bg-transparent"
      }`}
    >
      <div
        className="container flex justify-between items-center px-4 mx-auto"
        style={{ direction: isRTL ? "rtl" : "ltr" }}
      >
        <div className="flex gap-x-3 items-center">
          <Film className="w-8 h-8 text-purple-500" />
          <span className="text-2xl font-bold text-white">Ahmed Ezz</span>
        </div>

        <div className="hidden space-x-8 xl:flex">
          <a
            href="#home"
            className="text-white transition-colors hover:text-purple-400"
          >
            {t("navbar.home")}
          </a>
          <a
            href="#creators"
            className="text-white transition-colors hover:text-purple-400"
          >
            {t("navbar.creators")}
          </a>
          <a
            href="#services"
            className="text-white transition-colors hover:text-purple-400"
          >
            {t("navbar.services")}
          </a>
          <a
            href="#shorts"
            className="text-white transition-colors hover:text-purple-400"
          >
            {t("navbar.viralShorts")}
          </a>
          <a
            href="#videos"
            className="text-white transition-colors hover:text-purple-400"
          >
            {t("navbar.clientVideos")}
          </a>
          <a
            href="#contact"
            className="text-white transition-colors hover:text-purple-400"
          >
            {t("navbar.contact")}
          </a>
          <LanguageSwitcher />
        </div>

        <div className="xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {!isOpen && <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        createPortal(
          <div
            className="fixed inset-0 !z-[9999999] overflow-y-auto bg-black/95 backdrop-blur-md xl:hidden"
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            <div className="flex flex-col min-h-screen">
              {/* Sticky header with close button */}
              <div className="sticky top-0 z-10 px-4 pt-4 backdrop-blur-md bg-black/80">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-white rounded-full hover:bg-white/10 hover:text-purple-400 focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>
              </div>

              {/* Menu content */}
              <div className="flex flex-col flex-1 justify-center py-10">
                <div className="container flex flex-col px-4 mx-auto space-y-8">
                  {/* Language switcher */}
                  <div className="flex justify-center mb-4">
                    <LanguageSwitcher />
                  </div>

                  {/* Navigation links */}
                  <div className="flex flex-col items-center space-y-6">
                    <a
                      href="#home"
                      className="px-6 py-3 text-xl font-medium text-white rounded-lg transition-colors hover:bg-white/10 hover:text-purple-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {t("navbar.home")}
                    </a>
                    <a
                      href="#creators"
                      className="px-6 py-3 text-xl font-medium text-white rounded-lg transition-colors hover:bg-white/10 hover:text-purple-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {t("navbar.creators")}
                    </a>
                    <a
                      href="#services"
                      className="px-6 py-3 text-xl font-medium text-white rounded-lg transition-colors hover:bg-white/10 hover:text-purple-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {t("navbar.services")}
                    </a>
                    <a
                      href="#shorts"
                      className="px-6 py-3 text-xl font-medium text-white rounded-lg transition-colors hover:bg-white/10 hover:text-purple-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {t("navbar.viralShorts")}
                    </a>
                    <a
                      href="#videos"
                      className="px-6 py-3 text-xl font-medium text-white rounded-lg transition-colors hover:bg-white/10 hover:text-purple-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {t("navbar.clientVideos")}
                    </a>
                    <a
                      href="#contact"
                      className="px-6 py-3 text-xl font-medium text-white rounded-lg transition-colors hover:bg-white/10 hover:text-purple-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {t("navbar.contact")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )
      )}
    </nav>
  );
};

export default Navbar;
