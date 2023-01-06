import { registerRootComponent } from "expo";
import Constants from "expo-constants";
import App from "./App";
import StorybookUIRoot from "./storybook";

const storybook = Constants.manifest.extra.storybook;

const rootComponent = storybook ? StorybookUIRoot : App;
registerRootComponent(rootComponent);
