import { fade } from "@utils/animations";
import { ExtendedCarreer } from "@utils/interfaces";
import { MotionDiv } from "./MotionElements";

export default function CarreerCard(props: ExtendedCarreer) {
  return (
    <MotionDiv
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      className="grid w-full p-6 md:w-2/4 md:odd:place-self-start md:odd:text-end md:even:place-self-end"
    >
      <p className="text-sm font-light">
        <strong className="font-normal uppercase text-primary">
          {props.type.name} &nbsp;
        </strong>
        {props.date && "- " + props.date}
      </p>

      <p className="text-lg font-bold">
        {props.name} - {props.company}
      </p>

      <p className="mt-1 text-muted-foreground">{props.about}</p>
    </MotionDiv>
  );
}
