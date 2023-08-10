import styles from './Tweet.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faShare, faComment } from '@fortawesome/free-solid-svg-icons';


export const Tweet = ({author, content, image, date, icons}) => {
    return  (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.header}>
                    <img className={styles.avatar} src={author.photo.avatar} alt="avatar"/> 
                    <span className={styles.name}>{author.name}</span>
                    <span className={styles.nickName}>{author.nickname}</span>
                    <span className={styles.date}>{date}</span>
                </div>
                <p className={styles.content}>{content}</p>
                <img className={styles.photo_post} src={image.photo_post} alt="blockchain" />
            </div> 
            <footer>
                <button className={styles.icons}>
                    <FontAwesomeIcon icon={faThumbsUp} /> Like
                </button>
                <button className={styles.icons}>
                    <FontAwesomeIcon icon={faShare} /> Share
                </button>
                <button className={styles.icons}>
                    <FontAwesomeIcon icon={faComment} /> Comment
                </button>
            </footer>
        </div>
    )
}