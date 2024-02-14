import { MotionDiv } from "@/components/motion-elements";
import { fadeUp } from "@/utils/motion-variants";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionDiv variants={fadeUp} initial="hidden" animate="visible" exit="exit">
      {children}
    </MotionDiv>
  );
}
