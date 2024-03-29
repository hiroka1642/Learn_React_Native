export default () => {
  const storybook = process.env.STORY_BOOK === "true" ? true : false;
  return {
    expo: {
      name: "LearnReactNative",
      slug: "LearnReactNative",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/icon.png",
      userInterfaceStyle: "light",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      updates: {
        fallbackToCacheTimeout: 0,
      },
      assetBundlePatterns: ["**/*"],
      ios: {
        supportsTablet: true,
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#FFFFFF",
        },
      },
      web: {
        favicon: "./assets/favicon.png",
      },
      extra: {
        storybook,
      },
    },
  };
};
