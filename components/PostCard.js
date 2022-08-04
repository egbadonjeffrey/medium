import Image from "next/image";
import Logo from "../image/logo.png";

const styles = {
  authorContainer: "flex gap-[1.4rem]",
  authorImageContainer:
    "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem] ",
  authorImage: "object-cover",
  authorName: "font-semibold",
  title: "font-bold text-2xl",
  briefing: "text-[#787878]",
  detailsContainer: "flex items-center justify-between text-[#787878]",
  articleDetails: "my-2 text-[.8rem]",
  category: "bg-[#F2F3F2] rounded-full px-2 py-[.6]",
  postDetails: "",
};

const PostCard = () => {
  return (
    <div className={styles.postDetails}>
      <div className={styles.authorContainer}>
        <div className={styles.authorImageContainer}>
          <Image
            src={Logo}
            className={styles.authorImage}
            width={40}
            height={40}
            alt="Author Image"
          />
        </div>

        <div className={styles.authorName}> Egbadon Jeffrey</div>
      </div>

      <h1 className={styles.title}>
        7 Free Tools That Will Make You More Productive In 2022
      </h1>
      <div className={styles.briefing}>
        Productivity is a skill that can be learned.
      </div>

      <div className={styles.detailsContainer}>
        <span className={styles.articleDetails}>
          August 4 | 5min read |{" "}
          <span className={styles.category}>productivity</span>{" "}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
