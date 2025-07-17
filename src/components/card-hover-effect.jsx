import { HoverEffect } from "./ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Sign Up",

    link: "https://zentroa.com/our-design-process/#sign-up",
  },
  {
    title: "Explore",

    link: "https://zentroa.com/our-design-process/#explore",
  },
  {
    title: "Design",

    link: "https://zentroa.com/our-design-process/#design",
  },
  {
    title: "Develop",

    link: "https://zentroa.com/our-design-process/#develop",
  },
  {
    title: "Launch",

    link: "https://zentroa.com/our-design-process/#launch",
  },
  {
    title: "Grow",

    link: "https://zentroa.com/our-design-process/#grow",
  },
];
