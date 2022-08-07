import Image from "next/image";
import Banner from "../image/banner.png";

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
  content: "h-screen w-full p-[2rem]",
  postHeaderContainer:
    "flex justify-between gap-[1rem] items-center mt-[2.2rem] mb-[1.2rem]",
  authorContainer: "flex gap-[1rem]",
  articleMainContainer: "flex flex-col gap-[1rem]",
  authorProfileImageContainer:
    "h-[3rem] w-[3rem] grid center rounded-full overflow-hidden",
  column: "flex-1 flex flex-col justify-center",
  postDetails: "flex gap-[.2rem] text-[#787878]",
  listenButton: "flex items-center gap-[.2rem] text-[#1A8917]",
  socials: "flex gap-[1rem] text-[#787878] cursor-pointer",
  space: "w-[.5rem]",
  bannerContainer: "h-[20rem] w-full grid center overflow-hidden mb-[2rem]",
  image: "object-cover",
  title: "font-bold text-3xl",
  subtitle: "font-mediumSerifItalic text-[1.4rem] text-[#292929]",
  articleText: "font-mediumSerif text-[1.4rem] text-[#292929]",
};

const ArticleMain = ({ post, author }) => {
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
                <span>June 15 | 7 min read</span>{" "}
                <span className={styles.listenButton}>
                  <AiFillPlayCircle /> Listen
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.image}
              src={Banner}
              width={100}
              height={100}
              alt="Banner"
            />
          </div>
          <h1 className={styles.title}>
            7 Free Tools that will make you more productive in 2022
          </h1>
          <h4 className={styles.subtitle}>
            <div>Egbadon Jeffrey, August 5th</div>
            <div>Brief: Productivity is a skill that can be learned</div>
          </h4>
          <div className={styles.articleText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            voluptatibus saepe unde. Beatae odio porro nisi omnis nam voluptate
            iure, officiis aperiam dolorem atque nulla molestias. Aliquam sint
            eligendi similique! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis, architecto. Magni alias aperiam nostrum
            modi neque, soluta eius adipisci eveniet tempore minus inventore
            repellat aut beatae totam velit aliquam et temporibus tempora porro,
            doloremque explicabo commodi reprehenderit? Corrupti, a. Odit,
            doloremque. Voluptas autem eos repellendus. Ducimus incidunt sunt
            veniam facilis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
