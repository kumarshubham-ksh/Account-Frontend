import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const Main = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");
  const [pass, setPass] = useState("");
  useEffect(() => {
    setUserFirstName(localStorage.getItem("userFirstName"));
    setUserLastName(localStorage.getItem("userLastName"));
    setLoggedInUser(localStorage.getItem("loggedInUser"));
    setPass(localStorage.getItem("pass"));
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Your Account</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.div}>
        <h1 className={styles.head}>
          Welcome to your account {userFirstName} {userLastName}!
        </h1>
        <hr
          style={{
            backgroundColor: "darkmagenta",
            width: "15rem",
            height: "0.2rem",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        />
        <h1 className={styles.h1}>
          Your registered first name is: {userFirstName}
        </h1>
        <h1 className={styles.h1}>
          Your registered last name is: {userLastName}
        </h1>
        <h1 className={styles.h1}>
          Your registered email address is: {loggedInUser}
        </h1>
        <h1 className={styles.h1}>Your registered password is: {pass}</h1>
      </div>
    </div>
  );
};

export default Main;
