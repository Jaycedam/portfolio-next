"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import image1 from "../assets/motion/1.png";
import image2 from "../assets/motion/2.png";
import image3 from "../assets/motion/3.png";
import image4 from "../assets/motion/4.png";

// toggle data-active for gallery panel
function toggleGallery(activePanel) {
  // get all gallery panels and disable active status
  const allPanels = document.querySelectorAll(".gallery-selection");
  allPanels.forEach((panel) => {
    panel.setAttribute("data-active", "false");
  });

  // sets active the panel selected
  activePanel.setAttribute("data-active", true);
}

export default function MotionGallery() {
  const [video, setVideo] = useState(
    "https://cdn.dribbble.com/userupload/5932420/file/original-3ed0e9458325f07366ea71d242771d3f.mp4"
  );

  useEffect(() => {
    // adds event for gallery, gets closest panel selected
    const gallery = document.querySelector("#gallery");
    gallery.addEventListener("click", (e) => {
      const activePanel = e.target.closest(".gallery-selection");
      if (!activePanel) return;
      toggleGallery(activePanel);
    });
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full h-full aspect-[16/9]">
        <video
          className="w-full h-full rounded-xl shadow-xl"
          controls
          loop
          src={video}
        />{" "}
      </div>

      {/* gallery selection grid  */}
      <div
        id="gallery"
        className="w-full grid grid-cols-2 gap-2
          md:grid-cols-4"
      >
        <div
          className="gallery-selection"
          data-active="true"
          onClick={() =>
            setVideo(
              "https://cdn.dribbble.com/userupload/5932420/file/original-3ed0e9458325f07366ea71d242771d3f.mp4"
            )
          }
        >
          <Image
            alt="Change video source"
            src={image1}
            className="gallery-image"
          />
        </div>
        <div
          className="gallery-selection"
          data-active="false"
          onClick={() =>
            setVideo(
              "https://cdn.dribbble.com/userupload/5576587/file/original-863942a46a31c017572048a1ecc58cfe.mp4"
            )
          }
        >
          <Image
            alt="Change video source"
            src={image2}
            className="gallery-image"
          />
        </div>
        <div
          className="gallery-selection"
          data-active="false"
          onClick={() =>
            setVideo(
              "https://cdn.dribbble.com/userupload/5576228/file/original-8a01f9ad3e9504a160f6b3c912dc3667.mp4"
            )
          }
        >
          <Image
            alt="Change video source"
            src={image3}
            className="gallery-image"
          />
        </div>
        <div
          className="gallery-selection"
          data-active="false"
          onClick={() =>
            setVideo(
              "https://cdn.dribbble.com/userupload/5576014/file/original-45c60e686d2e5f879b8d3cdccb6e3cde.mp4"
            )
          }
        >
          <Image
            alt="Change video source"
            src={image4}
            className="gallery-image"
          />
        </div>
      </div>
    </div>
  );
}
