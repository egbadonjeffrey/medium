import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReaderNav";
import Recommendations from "../../components/Recommendations";

import { MediumContext } from "../../context/MediumContext";

const styles = {
  content: "flex",
};

const Post = () => {
  // Hooks
  const { posts, users } = useContext(MediumContext);
  const router = useRouter();

  // Post and Author state
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    // guard clause
    if (posts.length === 0) {
      return;
    }

    // console.log(router.query.slug, "Slug id");

    setPost(posts.find((post) => post.id === router.query.slug));

    // console.log(author, "Users");

    setAuthor(
      users.find((user) => user.id === post.data?.author),
      "Author"
    );
  }, [post]);

  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain post={post} author={author} />
      <Recommendations />
    </div>
  );
};

export default Post;
