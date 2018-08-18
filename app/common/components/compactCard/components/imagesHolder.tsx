import * as React from "react";

const styles = require("./imagesHolder.scss");

interface IProps {
  images: Array<string>;
}

const ImagesHolder = ({ images }: IProps) => {
  if (images.length === 1) {
    return <img width="100%" height="100%" src={images[0]} alt="image01" />;
  } else if (images.length === 2) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.twoImages}>
          <img width="50%" height="100%" src={images[0]} alt="image01" />
          <img width="50%" height="100%" src={images[1]} alt="image02" />
        </div>
      </div>
    );
  } else if (images.length === 3) {
    return (
      <div className={styles.wrapper}>
        <img width="100%" height="50%" src={images[0]} alt="image01" />
        <div className={styles.twoImages}>
          <img width="50%" height="100%" src={images[1]} alt="image02" />
          <img width="50%" height="100%" src={images[2]} alt="image03" />
        </div>
      </div>
    );
  } else if (images.length === 4) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.twoImages}>
          <img width="50%" height="100%" src={images[0]} alt="image01" />
          <img width="50%" height="100%" src={images[1]} alt="image02" />
        </div>
        <div className={styles.twoImages}>
          <img width="50%" height="100%" src={images[2]} alt="image03" />
          <img width="50%" height="100%" src={images[3]} alt="image04" />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.twoImages}>
          <img width="50%" height="100%" src={images[0]} alt="image01" />
          <img width="50%" height="100%" src={images[1]} alt="image02" />
        </div>
        <div className={styles.twoImages}>
          <img width="50%" height="100%" src={images[2]} alt="image03" />
          <img width="50%" height="100%" src={images[3]} alt="image04" />
          <div className={styles.moreLeft}>+{images.length - 4}</div>
        </div>
      </div>
    );
  }
};

export default ImagesHolder;
