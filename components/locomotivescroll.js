// import React, { useEffect, useRef } from "react";

// const LocomotiveScroll = ({ children }) => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const locomotive = require("locomotive-scroll").default;
//       const scroll = new locomotive({
//         el: containerRef.current,
//         smooth: true,
//         smoothMobile: true,
//         inertia: 0.75,
//         damping: 0.1,
//         friction: 0.15,
//         offset: [0, 50], // Adjusted offset to reduce extra space
//       });

//       return () => {
//         if (scroll) {
//           scroll.destroy();
//         }
//       };
//     }
//   }, []);

//   return <div ref={containerRef}>{children}</div>;
// };

// export default LocomotiveScroll;
