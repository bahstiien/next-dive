import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="font-round mt-20">
      <div className="border-t-2 w-3/5 flex justify-center items-center"></div>
      <div className="flex justify-around pt-10">
        <div className="">
          <h4 className="pb-4 text-blue-900">Nos réseaux sociaux</h4>
          <FacebookIcon fontSize="large" color="primary" />
          <InstagramIcon fontSize="large" color="primary" />
          <TwitterIcon fontSize="large" color="primary" />
          <LinkedInIcon fontSize="large" color="primary" />
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="pb-4 text-blue-900">Nos liens utiles</h4>

          <ul className="flex flex-col font-inter text-center">
            <Link href="/about"> A propos </Link>
            <Link href="/contact"> Contact </Link>
            <Link href="/mentions"> Mentions légales </Link>
            <Link href="/login"> Log in </Link>
            <Link href="/signup"> Sign Up </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
