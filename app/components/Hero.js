import Image from "next/image";
import profile from "../assets/profile.webp";

export default function Hero() {
  return (
    <div className="h-screen relative">
      <div className="w-full absolute top-32 text-center">
        <h1 className="font-extrabold text-5xl">Jordan Cortés</h1>
        <p>software developer / motion</p>
      </div>
      <div className="h-full flex justify-center items-center">
        <Image src={profile} alt="profile" className="rounded-full" />
      </div>
    </div>
  );
}
