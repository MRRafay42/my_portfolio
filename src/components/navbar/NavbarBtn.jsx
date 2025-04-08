import { Link } from "react-scroll";
import { LuArrowDownRight, LuDownload } from "react-icons/lu";

const NavbarBtn = () => {
  // Function to handle resume download with proper filename
  const handleDownloadResume = () => {
    // Path to your resume in public folder
    const resumeUrl = "/resume/Resume.pdf";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = resumeUrl;

    // Set the desired download filename
    link.download = "MR_Rafay_Resume.pdf"; // This will force the browser to use this filename

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex gap-2">
      {/* Hire Me Button */}
      <button className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="contact"
        >
          Hire Me
        </Link>
        <div className="sm:hidden md:block">
          <LuArrowDownRight />
        </div>
      </button>

      {/* Download Resume Button */}
      <button
        onClick={handleDownloadResume}
        className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
      >
        My Resume
        <div className="sm:hidden md:block">
          <LuDownload />
        </div>
      </button>
    </div>
  );
};

export default NavbarBtn;
