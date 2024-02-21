import { MotionDiv } from "@/components/motion-elements";
import { fadeUp } from "@/utils/motion-variants";

/**
 *
 * @description This component is used to animate page transitions, since the template.tsx is re-rendered every time unlike the layout.tsx (it does not affect the children)
 * More info: https://nextjs.org/docs/app/api-reference/file-conventions/template
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionDiv variants={fadeUp} initial="hidden" animate="visible" exit="exit">
      {children}
    </MotionDiv>
  );
}
