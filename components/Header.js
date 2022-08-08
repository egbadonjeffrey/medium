import Image from "next/image";
import { useContext } from "react";
import Modal from "react-modal";

import { MediumContext } from "../context/MediumContext";
import { auth } from "../Firebase";

import Logo from "../image/logo.png";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};

const styles = {
  wrapper: "flex justify-center gap-10 p-5 bg-[#FCC017]",
  content: "max-w-7xl flex-1 flex justify-between gap-10",
  logoContainer: "flex items-center flex-start",
  logo: "cursor-pointer object-contain",
  bannerNav: "flex cursor-pointer items-center space-x-5",
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
};

const Header = () => {
  const { handleUserAuth, currentUser } = useContext(MediumContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Logo}
            width={200}
            height={40}
            alt="logo"
          />
        </div>
        {currentUser ? (
          <div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Membership</div>
            <div className={styles.accentedButton}>Write</div>
            <div className={styles.accentedButton}>Get Unlimited Access</div>
          </div>
        ) : (
          <div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Membership</div>
            <div onClick={handleUserAuth}>Sign In</div>
            <div className={styles.accentedButton}>Get Started</div>
          </div>
        )}
      </div>
      <Modal
        isOpen={true}
        onRequestClose={() => console.log("CLOSE")}
        style={customStyles}
      >
        <div> I AM WRITING A MODAL </div>
      </Modal>
    </div>
  );
};

export default Header;
