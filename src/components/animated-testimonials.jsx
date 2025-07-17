import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "As a satisfied customer, I highly recommend Zentroa Technologies to anyone seeking peace of mind in their business or personal website projects. Their team in Dubai excels in understanding customer expectations and delivers exceptional websites. The professionalism and skill demonstrated by Zentroa Technologies have been instrumental in achieving our digital goals. Zentroa team's commitment to excellence and attention to even small details ensures a seamless experience from start to finish. Truly, Zentroa Technologies is a top choice for web development services. You will never regret hiring them.",
      name: "Reycel Arcena",
      designation: "Ahbira Middle East",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "We had a great experience with Zentroa Technologies! They helped with everything from digital consultancy and brand name selection to logo design, web design, and SEO for my business. They guided me through picking the perfect domain name and ensured my site was well-optimized for search engines. The best part? They managed to do all this within my budget! Thanks to their work, I've seen more customers come in, and even Google and Bing rank my site better. The team was super supportive and made the entire process so smooth. I'll keep recommending Zentroa to anyone who needs excellent service. Thanks, Zentroa!",
      name: "Sankar",
      designation: "Founder & Director - Ideas Packaging and Machinery - Dubai",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "We hired Zentroa Technologies for our website design project at Barari Tyres, which included graphics and copywriting services. We are incredibly pleased with their talented and young team, along with the guidance from their team head. They have expertise and experience in popular web technologies like WordPress, HTML sites, and PHP development. As the IT head, I genuinely admire their team spirit and dedication. They are attentive, easy to collaborate with, and have consistently delivered on our expectations. Despite their strong presence in Dubai and international exposure, Zentroa Technologies remains well-grounded and approachable. Their pricing is also very competitive compared to other web development companies in Dubai and UAE. We were so satisfied with their work that we rewarded them with another Custom Web Application Development project, which we expect them to deliver next month. If you're looking for a dependable and affordable partner, we highly recommend Zentroa Technologies!",
      name: "Rajan",
      designation: "IT Head - Barari Group Dubai, UAE",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "We hired Zentroa Technologies to develop a web portal to streamline our travel business processes. They provided a very user-friendly design and development that is incredibly easy to use. Our headaches from juggling between MS Excel and Outlook Email have decreased by 90%! Thanks to the entire Zentroa Dubai and India team for their fantastic web portal development expertise and patience in listening to our needs. It was definitely a 5-star experience!",
      name: "Vijay",
      designation: "Airlink International - Dubai",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
