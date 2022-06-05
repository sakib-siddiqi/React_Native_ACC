import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const _sizes = {
    width,
    height,
    container: width * 0.04,
    container_width: width-((width * 0.04)*2),
    size:[14,24,34,44]
};

export default _sizes;