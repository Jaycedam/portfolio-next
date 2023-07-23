"use client";
import Lottie from "lottie-react";

export default function LottieAnimation(props: { data: any }) {
  return <Lottie animationData={props.data} loop={true} />;
}
