import Link from "next/link";
import { socials } from "@/data/index";
const Socials: React.FC<{ containerStyle?: string; iconStyle?: string }> = ({
  containerStyle,
  iconStyle,
}) => {
  return (
    <div className={`${containerStyle}`}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          target="_blank"
          className={`${iconStyle}`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
