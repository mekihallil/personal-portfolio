import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <>
      <div className="flex flex-col h-40 dark:bg-[#0a0f1c] bg-[#e4e2e2] mt-10 ">
        <div className="h-4/5 flex felx-row justify-between mx-22">
          <div className="flex flex-col justify-around mt-3">
            <div className="flex flex-row">
              <div className="mr-3">
                <MailOutlineRoundedIcon />
              </div>
              <div>mekigk37@gmail.com</div>
            </div>
            <div className="flex flex-row">
              <div className="mr-3">
                <LocationOnOutlinedIcon />
              </div>
              <div>Addis Ababa, Ethiopia</div>
            </div>
            <div className="flex flex-row">
              <div className="mr-3">
                <LocalPhoneRoundedIcon />
              </div>
              <div>+251-910283179</div>
            </div>
          </div>
          <div className="my-auto text-3xl font-semibold">M3k!</div>
          <div className=" flex flex-row justify-around my-auto">
            <div>
              <a href="#" target="_blank" className="">
                <MailOutlineRoundedIcon fontSize="large" />
              </a>
            </div>
            <div className="ml-5 ">
              <a
                href="https://www.linkedin.com/in/meki-hallil/"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" />
              </a>
            </div>

            <div className="mx-5">
              <a href="https://github.com/mekihallil" target="_blank">
                <GitHubIcon fontSize="large" />
              </a>
            </div>

            <div className="-rotate-25">
              <a href="https://t.me/meki_hallil" target="_blank">
                <SendRoundedIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
        <div className="h-1/5 flex justify-center text-sm font-thin ">
          © {thisYear === 2026 ? thisYear : `2026 - ${thisYear}`} Meki Hallil.
          All rights reserved.
        </div>
      </div>
    </>
  );
};
