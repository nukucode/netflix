import AmazonIcon from "../assets/icon-amazon.png";
import NetflixIcon from "../assets/icon-netflix.png";
import MarvelIcon from "../assets/icon-marvel.svg";
import HuluIcon from "../assets/icon-hulu.png";
import DisneyIcon from "../assets/icon-disney.png";
import DCIcon from "../assets/icon-dc.png";

export const findCompaniesLogo = (homepage) => {
  if (homepage && homepage.includes("netflix")) {
    return NetflixIcon;
  } else if (homepage && homepage.includes("amazon")) {
    return AmazonIcon;
  } else if (homepage && homepage.includes("marvel")) {
    return MarvelIcon;
  } else if (homepage && homepage.includes("hulu")) {
    return HuluIcon;
  } else if (homepage && homepage.includes("disney")) {
    return DisneyIcon;
  } else if (homepage && homepage.includes("dc")) {
    return DCIcon;
  } else return false;
};
