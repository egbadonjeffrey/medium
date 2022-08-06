import Header from "../components/Header";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import Link from "next/link";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";

const styles = {
  container: "max-w-7xl flex-1",
  postsList: "flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 lg:grid-cols-3",
  main: "flex justify-center",
};

export default function Home() {
  const { users } = useContext(MediumContext);

  console.log(users);

  return (
    <Link href={`/post/123`}>
      <div className={styles.wrapper}>
        <Header />
        <Banner />
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.postsList}>
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
