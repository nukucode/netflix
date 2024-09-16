import React from "react";

function Footer() {
  return (
    <footer className="mb-[50px] -mt-[70px] flex items-center flex-col justify-center">
      <div className="flex items-center justify-center space-x-2">
        <a href="https://netflix.com">
          <img
            src="https://pngimg.com/d/netflix_PNG15.png"
            alt="Netflix"
            className="w-[42px] aspect-square object-contain"
          />
        </a>
        <a href="http://themoviedb.org">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="The Movie Db"
            className="w-[42px] aspect-square object-contain"
          />
        </a>
      </div>
      <div className="mt-5">
        {" "}
        <font className="text-white">Made with</font>
        <span> {" "}
          <font className="text-white">❤️ by</font> {" "}
          <a
            className="font-[700] text-white"
            href="https://github.com/nukucode"
          >
            Nukucode
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
