// src/app/home/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Section07() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const isEnglish = i18n.language === "en";

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
    setMounted(true);
  }, [i18n]);

  return (
    <div className="sec07">
      <div className="innerCont">
        <ul className="logoList">
          <li>
              <Image src="/mrware_logo01.png" width={300} height={50} alt="" />
          </li>
          <li>
              <Image src="/mrware_logo02.png" width={300} height={30} alt="" />
          </li>
          <li>
              <Image src="/mrware_logo03.png" width={300} height={30} alt="" />
          </li>
          <li>
              <Image src="/mrware_logo04.png" width={300} height={30} alt="" />
          </li>
          <li>
              <Image src="/mrware_logo05.png" width={300} height={30} alt="" />
          </li>
          <li>
              <Image src="/mrware_logo06.png" width={300} height={30} alt="" />
          </li>
          <li>
              <Image src="/mrware_logo07.png" width={300} height={30} alt="" />
          </li>
          <li>
              <Image src="/mrware_logo08.png" width={300} height={30} alt="" />
          </li>
          <li>
              <Image src="/mrware_logo09.png" width={300} height={30} alt="" />
          </li>
          <li>
              <Image src="/mrware_logo10.png" width={300} height={30} alt="" />
          </li>
          <li>
              <Image src="/mrware_logo11.png" width={300} height={30} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
