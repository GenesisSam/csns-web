import * as React from "react";
import Card from "@material-ui/core/Card";
import ImagesHolder from "./components/imagesHolder";

const styles = require("./compactCard.scss");

interface IProps {
  testImageCount: number;
}

// images
// https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg01.jpg?alt=media&token=80b13bdf-aec0-402a-a1c8-9a12f5b9c625
// https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg02.jpg?alt=media&token=0c4afeb3-c30a-409b-aa6e-d7ce0a850602
// https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg03.jpg?alt=media&token=abeffd6c-8ca3-4748-a394-1b387950199c
//https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg04.jpg?alt=media&token=4fc7ff30-a085-46ed-80a4-d225ff9328c7

export default class CompactCard extends React.PureComponent<IProps> {
  private readonly testImage = [
    "https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg01.jpg?alt=media&token=80b13bdf-aec0-402a-a1c8-9a12f5b9c625",
    "https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg02.jpg?alt=media&token=0c4afeb3-c30a-409b-aa6e-d7ce0a850602",
    "https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg03.jpg?alt=media&token=abeffd6c-8ca3-4748-a394-1b387950199c",
    "https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg04.jpg?alt=media&token=4fc7ff30-a085-46ed-80a4-d225ff9328c7",
    "https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg04.jpg?alt=media&token=4fc7ff30-a085-46ed-80a4-d225ff9328c7",
    "https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg04.jpg?alt=media&token=4fc7ff30-a085-46ed-80a4-d225ff9328c7",
  ];
  public render() {
    return (
      <Card className={styles.cardWrapper}>
        <div className={styles.contentWrapper}>
          <ImagesHolder
            images={this.testImage.slice(0, this.props.testImageCount)}
          />
        </div>
        {/* Author info Area */}
        {/* Engage Area */}
        {/* Recent comment Area(Foldable/writable) */}
        <div className={styles.commentArea} />
      </Card>
    );
  }
}
