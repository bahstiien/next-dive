import Link from "next/link";
import Head from "next/head";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = (props) => {
  return (
    <div className="font-inter  text-gray-600  p-10 ">
      <Head>
        <title>{props.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex">
        <ul className="flex flex-row font-round">
          <li className="pl-4 ">
            <Link href="/"> Accueil </Link>
          </li>
          <li className="pl-4 ">
            <Link href="/registration"> Inscription </Link>
          </li>
          <li className="pl-4 ">
            <Link href="/clubs"> Nos clubs partenaires </Link>
          </li>
          <li className="pl-4 ">
            <Link href="/contact"> Contact </Link>
          </li>
        </ul>
        <div className="flex-end ml-24">
          <AccountCircleIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Header;
