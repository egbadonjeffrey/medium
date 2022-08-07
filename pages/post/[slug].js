import { useContext } from "react";
import { useRouter } from "next/router";

import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReaderNav";
import Recommendations from "../../components/Recommendations";

import { MediumContext } from "../../context/MediumContext";

const styles = {
  content: "flex",
};

const Post = () => {
  const { posts, users } = useContext(MediumContext);
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain />
      <Recommendations />
    </div>
  );
};

export default Post;
