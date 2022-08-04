import Image from "next/image";

import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";

import ReplitLogo from "../image/replit.png";
import TutorialImg from "../image/tutorial.jpg";
import CPLogo from "../image/cp.png";
import Qazi from "../image/qazi.jpg";
import JSLogo from "../image/jsLogo.png";

const styles = {
  wrapper:
    " flex flex-col h-screen gap-[1rem] min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem] ",
  accentedButton:
    "flex items-center justify-center text-sm bg-black text-white py-[.6rem] rounded-full",
  searchBar: "flex items-center h-[2.6rem] border px-[1rem] rounded-full ",
  searchInput: "border-none outline-none bg-none w-full",
  authorContainer: "",
  authorProfileImageContainer: "h-[5rem] w-[5rem] rounded-full overflow-hidden",
  authorName: "font-semibold mb-[.2rem] mt-[1rem]",
  authorFollowing: "text-[#787878]",
  authorActions: "flex gap-[.6rem] my-[1rem]",
  actionButton:
    "bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm",
  recommendationAuthorContainer: "flex gap-[.6rem] my-[.3rem]",
  recommendationAuthorProfileImageContainer:
    "rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  recommendationAuthorName: "text-small",
  recommendationTitle: "font-bold",
  recommendationThumbnailContainer:
    "flex flex-1 items-center justify-center h-[4rem] w-[4rem]",
  recommendationThumbnail: "object-cover",
  articleContentWrapper:
    "flex items-center justify-between cursor-pointer my-[1rem] gap-[.6rem]",
  articleContent: "flex-4",
};

const Recommendations = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get unlimited access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          placeholder="Search"
          type="text"
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image src={Qazi} width={100} height={100} alt="Author Image" />
        </div>
        <div className={styles.authorName}>Egbadon Jeffrey</div>
        <div className={styles.authorFollowing}>1M followers</div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}>
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>
      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More from Medium</div>
        <div className={styles.articlesContainer}>
          <div className={styles.articleContentWrapper}>
            <div className={styles.articleContent}>
              <div className={styles.recommendationAuthorContainer}>
                <div
                  className={styles.recommendationAuthorProfileImageContainer}
                >
                  <Image src={Qazi} width={100} height={100} alt="Qazi" />
                </div>
                <div className={styles.recommendationAuthorName}>
                  Egbadon Jeffrey
                </div>
              </div>
              <div className={styles.recommendationTitle}>
                The Ultimate JavaScript Course for Beginners by Clever
                Programmer
              </div>
            </div>
            <div className={styles.recommendationThumbnailContainer}></div>
            <Image
              className={styles.recommendationThumbnail}
              src={JSLogo}
              width={100}
              height={100}
              alt="js logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
