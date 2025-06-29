// src/pages/AboutPage.tsx (or src/components/AboutPage.tsx)
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../components/animations/variants"; // Adjust path
import AnimatedHighlightedWord from "../components/AnimatedHighlightedWord"; // Adjust path
import { AnimatedWrapper } from "../components/AnimatedWrapper"; // Adjust path
import FloatingImage from "../components/FloatingImage";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { AnimatedSVG } from "../components/AnimatedAfricaSvg";
import shield from "../assets/images/shield.png";
import money from "../assets/images/money.png";
import ai from "../assets/images/robot.png";
import tree from "../assets/images/tree.png";
import lightBulb from "../assets/images/light-bulb.png";
import chess from "../assets/images/chess.png";
import Chip from "../components/Chip";
import FAQItem from "../components/FAQItem";

// Placeholder images - update these paths
// const aboutImage1 = "/images/about/team-dynamic.jpg";
// const aboutImage2 = "/images/about/creative-process.png";
// const aboutImage3 = "/images/about/office-vibe.jpg";
// const aboutImage4 = "/images/about/data-visualization-abstract.jpg"; // Another placeholder

interface faqInterface {
  question: string;
  answer: any;
}
interface ServicesInterface {
  chipText: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  FAQ?: faqInterface[];
}

function ServicesPage() {
  const navigate = useNavigate();

  const services: ServicesInterface[] = [
    {
      chipText: "Foundation & Trust",
      title: "Laying the Groundwork for Trusted, Actionable Data",
      description:
        "Before data can deliver insight, value, or innovation, it must be trusted. That trust begins with how it is governed, protected, structured, and shared. At AYNA, we help organizations build resilient data foundations that inspire confidence, ensure compliance, and unlock cross-functional clarity.",
      image: shield,
      FAQ: [
        {
          question: "Data Governance",
          answer: (
            <p>
              Strong governance turns data from a liability into a strategic
              asset. We help organizations set clear rules, roles, and routines
              for how data is created, used, and shared — ensuring it drives
              strategic decisions and operational effectiveness.
              <br />
              Whether you're a public agency connecting siloed systems or a
              growing enterprise navigating complexity, we support you to:
              <br />
              <br />
              • Build governance frameworks tailored to your environment and
              goals
              <br />
              • Define ownership and accountability for critical data assets'
              <br />
              • Improve data quality, consistency, and discoverability
              <br />
              • Enable interoperability across departments or agencies
              <br />• Assess current maturity and develop a practical roadmap
              forward
            </p>
          ),
        },

        {
          question: "Data Privacy & Protection",
          answer: (
            <p>
              In today’s digital world, protecting personal data is not just
              about compliance, it is about trust. AYNA helps organizations
              treat privacy as both a core value and a competitive advantage.
              <br />
              We support clients to:
              <br />
              <br />
              • Develop policies aligned with NDPR, GDPR, and other relevant
              regulations
              <br />
              • Classify and manage sensitive data with care and accountability
              <br />
              • Embed privacy and security principles from the ground up
              <br />
              • Build resilience with breach readiness and recovery protocol
              <br />
              <br />
              Whether handling citizen records or customer information, we help
              you prove that data is safe in your hands — and back it with
              action.
            </p>
          ),
        },

        {
          question: "Data Quality & Architecture",
          answer: (
            <p>
              Reliable insights depend on reliable data, and that starts with
              solid architecture. AYNA helps organizations design and implement
              systems that ensure accuracy, consistency, and scalability from
              the start.
              <br />
              Whether you're unifying fragmented systems or preparing for
              growth, we help you:
              <br />
              <br />
              • Build tailored data architectures that reflect your goals and
              scale
              <br />
              • Strengthen quality through validation, standardization, and
              oversight
              <br />
              • Enable interoperability with unified models and system design
              <br />
              • Optimize data lifecycle management: from collection to archival
              <br />• Embed quality monitoring into everyday operation
            </p>
          ),
        },
      ],
    },

    {
      chipText: "Intelligence & Automation",

      title: "Transforming Data into Direction, Clarity, and Competitive Edge",
      description:
        "Data becomes truly valuable when it sharpens your ability to see clearly, act decisively, and adapt quickly. AYNA helps public and private institutions move from spreadsheets and static dashboards to real-time intelligence and predictive systems; grounded in context, driven by purpose",
      image: ai,

      reverse: true,

      FAQ: [
        {
          question: "Data Analytics",
          answer: (
            <p>
              We believe analytics should solve real problems, not just generate
              reports. We build analytical environments that connect strategy to
              insight and insight to action.
              <br />
              Our services include:
              <br />
              <br />
              • Use-case-driven analytics aligned with KPIs: from service
              delivery to financial performance
              <br />
              • Self-service BI environments for leaders and frontline teams
              <br />
              • Integrated reporting across units, departments, or business
              lines
              <br />
              • Predictive models to surface risks, trends, and opportunities
              <br />• Visual storytelling that brings clarity to complexity
              <br />
              <br />
              We help you understand your data and act on it with speed and
              confidence.
            </p>
          ),
        },

        {
          question: "AI & Automation",
          answer: (
            <p>
              AI has the power to transform operations; only when used with
              clarity and intent. AYNA helps organizations demystify AI and
              implement it responsibly, unlocking value at the right pace
              <br />
              Our offerings include:
              <br />
              <br />
              • AI strategy design: where, when, and how to apply it
              <br />
              • Development of intelligent agents, models, and NLP tools
              <br />
              • Cognitive search and machine learning integrations
              <br />
              • AI governance frameworks for transparency, fairness, and
              accountability
              <br />
              • Capacity-building for teams to adopt, sustain, and evolve
              solutions
              <br />
              <br />
              We help you go from exploring AI to extracting real value
              responsibly, sustainably, and aligned with your mission.
            </p>
          ),
        },
      ],
    },

    {
      chipText: "Growth & Execution",

      title: "Bridging Strategy and Value: From Vision to Bottom Line",
      description:
        "At AYNA, we don’t just help you understand your data’s potential, we help you turn it into growth, efficiency, and competitive advantage. This is where insight becomes strategy and ideas become execution. We work alongside teams across the organization to uncover monetization opportunities, drive transformation initiatives, and deliver outcomes that matter.",
      image: tree,
      
      FAQ: [
        {
          question: "Data Monetization",
          answer: (
            <p>
              Turning Data into Revenue, Efficiency, and Strategic Advantage
              Data can do more than inform — it can deliver measurable value. At
              AYNA, we help organizations move from insight to income by
              identifying monetization opportunities that are ethical, scalable,
              and aligned with your mission.
              <br />
              Our approach spans:
              <br />
              <br />
              • Direct monetization through data products, licensing, and
              strategic partnerships
              <br />
              • Indirect value creation by reducing costs, mitigating risk, and
              driving smarter decisions
              <br />
              • Monetization readiness with clear roadmaps, asset valuation, and
              policy design
              <br />
              • Predictive models to surface risks, trends, and opportunities
              <br />• Visual storytelling that brings clarity to complexity
              <br />
              <br />
              Whether you're commercializing a new data offering or exploring
              internal gains, we partner with your teams to unlock the full
              economic potential of your data.
            </p>
          ),
        },

        {
          question: "Strategy & Consulting",
          answer: (
            <p>
              AYNA’s consulting team serves as your strategic partner. We help
              translate your data ambition into structured action.
              <br />
              We help you:
              <br />
              <br />
              • Develop enterprise-level data and AI strategies
              <br />
              • Align data with corporate, national, or sector-wide goals
              <br />
              • Build modern operating models and governance structures
              <br />
              • Mobilize cross-functional teams around priority initiatives
              <br />
              • Guide executive and board-level decision-making
              <br />
            </p>
          ),
        },
      ],
    },

    {
      chipText: "People & Capacity",

      title: "Empowering Teams to Sustain and Scale the Data Journey",
      description:
        "Great data strategies don’t succeed on technology alone, they succeed when people are equipped to lead and sustain them. AYNA supports clients in building the internal capacity it takes to move from dependence to ownership. We help align teams, build skillsets, and embed data-driven culture at every level.",
           image: lightBulb,

      reverse: true,

      FAQ: [
        {
          question: "Capacity Building & Training",
          answer: (
            <p>
              We design hands-on training that demystifies data and gives teams
              the skills to lead transformation.
              <br />
              Our programs include:
              <br />
              <br />
              • Executive briefings and board education
              <br />
              • Practical workshops on governance, analytics, and AI adoption
              <br />
              • Custom learning journeys for technical and non-technical staff
              <br />
              • AI literacy and use-case design for business functions
              <br />• Change management support for internal adoption
              <br />
            </p>
          ),
        },

        {
          question: "Tech Talent Sourcing & Placement",
          answer: (
            <p>
              Talent is often the missing piece in transformation. We help you
              find and retain the people who will power your next chapter.
              <br />
              Our services include:
              <br />
              <br />
              • Permanent and contract placements for data, engineering, and analytics roles.
              <br />
              • Talent pipelines aligned with your strategy.
              <br />
              • On-demand experts for high-impact projects.
              <br />
              • MSupport with onboarding, upskilling, and long-term retention.
              <br />
            </p>
          ),
        },
      ],
    },

    // {
    //   chipText: "",

    //   title: "Technology Talent Sourcing & Placement",
    //   description:
    //     "We provide technology talent sourcing and placement services, offering both contract and permanent hires. Our support includes talent strategy development for digital transformation, workforce readiness assessments, and capability-building initiatives,ensuring organizations have the skilled professionals needed to scale and succeed in the digital economy.",
    //   image: lightBulb,
    // },
    // {
    //   chipText: "",

    //   title: "Strategy Consulting & Execution Support",
    //   description:
    //     "We offer strategy consulting and execution support through organizational diagnostics, vision alignment, and performance planning. Our services include ecosystem mapping, stakeholder engagement, and program delivery, with a focus on business model innovation,especially for tech-driven sectors aiming to scale impact and drive sustainable growth.",
    //   image: chess,
    //   reverse: true,
    // },
  ];

  return (
    <section className="relative bg-data-dark-bg min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 items-center">
          {" "}
          {/* Increased gap */}
          {/* Left Column: Text Content */}
          <AnimatedWrapper
            variants={staggerContainer(0.25, 0.1)}
            className="text-center lg:text-left relative z-10 order-2 lg:order-1 py-8 lg:py-0"
          >
            <motion.h1
              variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              What &nbsp;
              <AnimatedHighlightedWord
                word="Services "
                highlightColorClass="bg-yellow-300/50" // Example different highlight
                textColorClass="text-data-accent" // Ensure data-accent is defined
                className="mx-1"
              />{" "}
              <br className="" />
              Do We Offer
            </motion.h1>

            <motion.p
              variants={fadeInUp(0.7, 0.2)} // Staggered delay
              className="text-lg sm:text-xl md:text-2xl text-data-text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              We deliver practical, end-to-end solutions across six
              interconnected service pillars
            </motion.p>
          </AnimatedWrapper>
          {/* Right Column: Floating Images Area */}
          <div className="relative lg:pl-0 pl-11 h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] order-1 lg:order-2 mt-12 lg:mt-0 pointer-events-none lg:pointer-events-auto">
            <AnimatedSVG
              animation="float"
              responsiveSizes={{
                mobile: 300,
                tablet: 500,
                desktop: 1000,
              }}
            />
          </div>
        </div>
        {services.map((service) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 items-center mt-14">
            <div
              className={`relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] order-1 ${
                service?.reverse ? " lg:order-2" : " lg:order-1"
              } mt-12 lg:mt-0 pointer-events-none lg:pointer-events-auto`}
            >
              <FloatingImage
                src={service?.image}
                alt="shield"
                className="w-[70%] sm:w-[55%] md:w-[420px] lg:w-[420px] bottom-[10%] left-[15%] lg:left-[10%] z-0"
                rotate={-3}
                floatDelay={0.5}
                borderHidden
                // aspectRatio="aspect-[2/4]"
              />
            </div>
            <AnimatedWrapper
              variants={staggerContainer(0.25, 0.1)}
              className={`flex flex-col lg:items-start items-center  lg:text-left relative z- order-2   ${
                service?.reverse ? "lg:order-1" : "lg:order-2"
              } py-8 lg:py-0`}
            >
              <AnimatedWrapper
                variants={fadeInUp(0.6)}
                className="text-center w-fit mb-8 md:mb-8"
              >
                <Chip
                  // textSize="xl"
                  bgColor="bg-yellow-300/40"
                  textColor="text-brand-yellow"
                  border={false}
                  label={`✨${service?.chipText}`}
                  className="text-base md:text-xl"
                />
              </AnimatedWrapper>
              <motion.h1
                variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
                className="text-3xl sm:text-4xl text-center md:text-5xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
              >
                {service?.title}
              </motion.h1>

              <motion.p
                variants={fadeInUp(0.7, 0.2)} // Staggered delay
                className="text-base md:text-lg text-center text-data-text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                {service?.description}
              </motion.p>

              {service?.FAQ &&
                service?.FAQ?.map((question, index) => (
                  <FAQItem
                    key={index}
                    question={question?.question}
                    answer={question?.answer}
                  />
                ))}
              <div className="flex justify-center lg:justify-start mt-11 ">
                <Button
                  label="Reach Out Now"
                  onClick={() => navigate("/contact")}
                />
              </div>
            </AnimatedWrapper>
            {/* Right Column: Floating Images Area */}
          </div>
        ))}
      </div>

      {/* Subtle Background Blobs (optional, similar to Hero if you like the effect) */}
      <div className="absolute -bottom-1/4 -right-1/4 w-80 h-80 bg-yellow-300/10 rounded-full filter blur-3xl opacity-50 -z-0"></div>
      <div className="absolute -top-1/4 -left-1/4 w-72 h-72 bg-blue-300/10 rounded-full filter blur-3xl opacity-50 -z-0"></div>
    </section>
  );
}

export default ServicesPage;

// Ensure AnimatedWrapper and AnimatedHighlightedWord components are correctly imported or defined.
// If AnimatedWrapper is in this file:
// interface AnimatedWrapperProps { children: React.ReactNode; variants?: any; className?: string; threshold?: number; triggerOnce?: boolean; [key: string]: any; }
// const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children, variants, className, threshold = 0.1, triggerOnce = true, ...motionProps }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce, threshold });
//   useEffect(() => { if (inView) controls.start("visible"); else if (!triggerOnce) controls.start("hidden"); }, [controls, inView, triggerOnce]);
//   return (<motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className} {...motionProps}>{children}</motion.div>);
// };
// ... and similar for AnimatedHighlightedWord if defined here.
