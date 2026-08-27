// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { Sparkles } from "lucide-react";
// import { useEffect, useState } from "react";

// import { useReducedMotion } from "@/hooks/use-reduced-motion";

// // Small callout bubble that appears next to the chat button, then
// // fades away — a proven, low-risk pattern (Intercom/Crisp-style)
// // instead of a hand-drawn arrow. Positioned relative to the button
// // itself, not floating independently, so it can't misalign.
// export function AskPurposeCta() {
//   const reducedMotion = useReducedMotion();
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const showTimer = setTimeout(() => setVisible(true), reducedMotion ? 0 : 1200);
//     const hideTimer = setTimeout(() => setVisible(false), reducedMotion ? 0 : 6000);
//     return () => {
//       clearTimeout(showTimer);
//       clearTimeout(hideTimer);
//     };
//   }, [reducedMotion]);

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           aria-hidden="true"
//           initial={{ opacity: 0, scale: 0.9, y: 6 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.9, y: 6 }}
//           transition={{ duration: reducedMotion ? 0 : 0.25, ease: [0.4, 0, 0.2, 1] }}
//           className="pointer-events-none fixed bottom-[100px] right-6 z-20 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-body-sm text-foreground shadow-lg"
//         >
//           Ask Purpose AI
//           <Sparkles className="h-3.5 w-3.5 text-accent" />
//           <span
//             className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-border bg-card"
//             aria-hidden="true"
//           />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }