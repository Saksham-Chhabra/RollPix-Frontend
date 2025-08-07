import PhotoUpload from "../components/PhotoUpload";
import styles from "./Home.module.css";
import "../general.css";
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <h1 className="heading-primary">Welcome to RollPix</h1>
        <p className="heading-secondary">
          Your one-stop solution for all your photo editing needs.
        </p>
        <PhotoUpload />
      </div>
    </div>
  );
}

export default Home;
