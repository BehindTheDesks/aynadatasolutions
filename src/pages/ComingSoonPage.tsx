import React from "react";
import { useNavigate } from "react-router-dom";
import FollowCursorCircle from "../components/FollowCursorCircle";

const ComingSoonPage = () => {
  const navigate = useNavigate();
  return (
    <section
      id="coming-soon-page"
      className="min-h-screen flex items-center bg-data-dark-bg py-16 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[80vh] bg-brand-yellow rounded-2xl flex flex-col text-center justify-center items-center gap-[-10]">
          <div className="px-5 py-3 md:px-20 md:py-5 rounded-full bg-data-dark-bg text-brand-yellow mt-[-20px] ">
            <p className=" text-lg md:text-2xl">Coming Soon</p>
          </div>
          <h1 className="text-[9.2rem] md:text-[15rem] font-bold text-data-dark-bg">AYNA</h1>
          <div className="w-full flex justify-center px-10 pb-6">
            <div className="bg-data-dark-bg px-9 py-6 flex justify-center text-xl cursor-pointer items-center rounded-full text-brand-yellow" onClick={() => navigate("/contact")}>
              <p className="cursor-pointer">Contact Us</p>
            </div>
          </div>
        </div>
      </div>

       <FollowCursorCircle
          color="bg-data-dark-bg" // Use a color from your Tailwind config
          opacity={1}
          springConfig={{ stiffness: 300, damping: 25, mass: 0.7 }}
        />
    </section>
  );
};

export default ComingSoonPage;
