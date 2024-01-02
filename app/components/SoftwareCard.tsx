import Image from "next/image";
import Link from "next/link";
import { ExtendedSoftware } from "@/utils/interfaces";

export default function SoftwareCard(props: ExtendedSoftware) {
  return (
    <Link href={`/software/${props.id}`}>
      <div
        className="group relative isolate aspect-square overflow-hidden rounded-md
             transition-all duration-500"
      >
        {/* overlay  */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 z-20 grid
              w-full items-center justify-center bg-gradient-to-t
              from-zinc-950/80 pb-8 
              pt-12 text-lg 
              text-zinc-50"
        >
          {props.name} - {props.area.name}
        </div>
        <Image
          src={props.imageUrl}
          alt="project-image"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-full w-full object-cover 
            transition-all duration-500 group-hover:scale-110 group-active:scale-100
            "
        />
      </div>
    </Link>
  );
}
