import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";

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
  thumbnailContainer: "flex-1",
};

const PostCard = ({ post }) => {
  const [authorData, setAuthorData] = useState(null);
  const { id } = post;
  const { title, brief, postedOn, postLength, category, bannerImage } =
    post.data;

  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData((await getDoc(doc(db, "users", post.data.author))).data());
    };

    getAuthorData();
  }, []);

  return (
    <Link href={`/post/${id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                className={styles.authorImage}
                width={40}
                height={40}
                alt="Author Image"
              />
            </div>

            <div className={styles.authorName}> {authorData?.name}</div>
          </div>

          <h1 className={styles.title}>{title}</h1>
          <div className={styles.briefing}>{brief}</div>

          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              {new Date(postedOn).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
              })}{" "}
              | {postLength} |{" "}
              <span className={styles.category}>{category}</span>{" "}
            </span>
            <span>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>

        <div className={styles.thumbnailContainer}>
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${bannerImage}`}
            height={100}
            width={100}
            alt="Post Thumbnail"
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
