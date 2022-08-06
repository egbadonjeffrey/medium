import Image from "next/image";
import Link from "next/link";

import Logo from "../image/logo.png";
import { FiBookmark } from "react-icons/fi";

const styles = {
  wrapper:
    "flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer",
  postDetails: "flex-[2.5] flex flex-col",
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
  bookmarkContainer: "cursor-pointer",
};

const PostCard = ({ post }) => {
  const { id } = post;
  return (
    <Link href={`/post/${id}`}>
      <div className={styles.wrapper}>
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
            <span>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>

        <div className={styles.thumbnailContainer}>
          <Image src={Logo} height={100} width={100} alt="Post Thumbnail" />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
