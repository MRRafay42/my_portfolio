import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="rafayshabbir42@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="03201426002" Image={FiPhone} />
      <SingleInfo text="Lahore,Pakistan" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
