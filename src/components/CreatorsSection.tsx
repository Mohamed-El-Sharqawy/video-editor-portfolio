import React from "react";
import { creators } from "../data/creators";
import { useTranslation } from "react-i18next";

const CreatorsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <section
      id="creators"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-500 to-blue-600"
      style={{ direction: isRTL ? "rtl" : "ltr" }}
    >
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 sm:mb-12 md:mb-16 text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
          {t("creators.title")}
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {creators.map((creator) => (
            <div
              key={creator.id}
              className="flex flex-col items-center group"
            >
              <div className="overflow-hidden mb-3 sm:mb-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 shadow-xl transition-all duration-300 transform border-white/70 group-hover:scale-110">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-1 text-lg sm:text-xl md:text-2xl font-bold text-white text-center">
                {creator.name}
              </h3>
              <span className="px-3 sm:px-4 py-1 text-sm sm:text-base md:text-lg font-medium text-blue-100 rounded-full bg-blue-700/50 text-center">
                {creator.subscribers}{" "}
                {i18n.language == "ar" ? "مليون" : "Million"}{" "}
                {t("creators.subscribers")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;
