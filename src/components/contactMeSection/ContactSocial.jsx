import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/mohammad-rafay-shabbir-1aa6a023a/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/MRRafay42"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/abdulrafay_world/"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
