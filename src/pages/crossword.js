import Board from "@/components/crossword/board";
import styles from "@/styles/crossword.module.css";

function CrosswordPage() {
  return (
    <>
      <h1></h1>
      <h2>LINK to DSD</h2>
      <div className={styles.container}>
        <Board numWords={5} />
      </div>
    </>
  );
}

export default CrosswordPage;
