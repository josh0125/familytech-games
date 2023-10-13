import Board from "@/components/crossword/board";
import styles from "@/styles/crossword.module.css"

function CrosswordPage(props) {

  return (
    <>
    <h1></h1>
    <div className={styles.container}>
      
      <Board input={props.input}/>
      
    </div>
    </>
  );
}

export default CrosswordPage;