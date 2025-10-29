"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollY = window.scrollY;
    let scrollDirection = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      scrollDirection = currentScrollY > lastScrollY ? 1 : -1;
      lastScrollY = currentScrollY;

      setPercentage(
        (currentScrollY / (document.body.offsetHeight - window.innerHeight)) *
          100
      );
      setSticky(currentScrollY > 2);

      // Scroll threshold - belirli bir hızda scroll yapılıyorsa snap et
      if (scrollDelta > 50 && !isScrolling) {
        setIsScrolling(true);
        const threshold = 200; // Threshold mesafesi (px)
        const sections = ['#about', '#app-development', '#game-development', '#music'];
        
        let nearestSection: string | null = null;
        let nearestDistance = Infinity;

        sections.forEach((section) => {
          const element = document.querySelector(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            const distance = Math.abs(currentScrollY - elementTop);

            // Scroll direction'a göre kontrol et
            if (
              (scrollDirection > 0 && elementTop > currentScrollY && distance < threshold) ||
              (scrollDirection < 0 && elementTop < currentScrollY && distance < threshold)
            ) {
              if (distance < nearestDistance) {
                nearestDistance = distance;
                nearestSection = section;
              }
            }
          }
        });

        if (nearestSection && nearestDistance < threshold) {
          const targetElement = document.querySelector(nearestSection) as HTMLElement | null;
          if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 144; // scroll-mt-36 offset
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling]);

  return (
    <>
      <div
        className={`sticky ${
          sticky ? "shadow " : ""
        }transition-all duration-500 ease-in-out top-0 w-full h-max py-6 px-24 z-50 bg-light_theme text-front font-poppins`}
        id="navbar"
      >
        <div
          className={`${
            percentage < 1 ? "w-0 " : "w-full"
          } bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 transition-all duration-500 ease-in-out mb-4`}
        >
          <div
            className="bg-theme h-2.5 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="grid-cols-3 flex justify-between items-center h-full w-full">
          <Link
            href={"#"}
            className="flex w-96 justify-start font-semibold text-2xl border-l-2 pl-2 mt-2 border-front"
          >
            Umut Bideci
          </Link>
          <div className="relative left-[-10px] flex gap-8 w-full justify-center">
            <div className="group/a hover:border-white h-full border-b-2 border-front pt-2 pb-1 transition-all duration-300">
              <Link
                href={"#"}
                className={
                  "text-lg group-hover/a:text-white transition-all duration-300 p-2 rounded-lg"
                }
              >
                home
              </Link>
            </div>
            <div className="group/b hover:border-white h-full border-b-2 border-front pt-2 pb-1 transition-all duration-300">
              <Link
                href="#about"
                className={
                  "text-lg group-hover/b:text-white transition-all duration-300 p-2 rounded-lg "
                }
              >
                about
              </Link>
            </div>
            <div className="group/c hover:border-white h-full border-b-2 border-front pt-2 pb-1 transition-all duration-300">
              <Link
                href="#app-development"
                className={
                  "text-lg group-hover/c:text-white transition-all duration-300 p-2 rounded-lg"
                }
              >
                app development
              </Link>
            </div>
            <div className="group/d hover:border-white h-full border-b-2 border-front pt-2 pb-1 transition-all duration-300">
              <Link
                href="#game-development"
                className={
                  "text-lg group-hover/d:text-white transition-all duration-300 p-2 rounded-lg"
                }
              >
                game development
              </Link>
            </div>
            <div className="group/e hover:border-white h-full border-b-2 border-front pt-2 pb-1 transition-all duration-300">
              <Link
                href="#music"
                className={
                  "text-lg group-hover/e:text-white transition-all duration-300 p-2 rounded-lg"
                }
              >
                music
              </Link>
            </div>
          </div>
          <div className="flex w-80 justify-end">
          </div>
        </div>
      </div>
    </>
  );
}
