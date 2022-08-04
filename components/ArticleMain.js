import Image from "next/image";

import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

import Qazi from "../image/qazi.jpg";

const styles = {
  wrapper: "flex items-center justify-center flex-[3] border-l border-r",
  content: "h-screen p-[2rem]",
  postHeaderContainer:
    "flex justify-between items-center mt-[2.2rem] mb-[1.2rem]",
  authorContainer: "flex gap-[1rem]",
  authorProfileImageContainer:
    "h-[3rem] w-[3rem] grid center rounded-full overflow-hidden",
  column: "flex-1 flex flex-col justify-center",
  postDetails: "flex gap-[.2rem] text-[#787878]",
  listenButton: "flex items-center gap-[.2rem] text-[#1A8917]",
};

const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                className={"object-cover"}
                src={Qazi}
                width={100}
                height={100}
                alt="Author Profile "
              />
            </div>
            <div className={styles.column}>
              <div>Egbadon Jeffrey</div>
              <div className={styles.postDetails}>
                <span>
                  June 15 | 7 min read{" "}
                  <span className={styles.listenButton}>
                    <AiFillPlayCircle /> Listen
                  </span>{" "}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space}>
              <BiBookmarks />
              <FiMoreHorizontal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
