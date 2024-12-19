import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

const scale = (size: number) => {
  return (width / guidelineBaseWidth) * Number(size);
};

const verticalScale = (size: number) => (height / guidelineBaseHeight) * Number(size);

const moderateScale = (size: number, factor = 0.5) => Number(size) + Number(scale(size) - Number(size)) * factor;

export { scale, verticalScale, moderateScale, width, height };
