import { storiesOf } from "@storybook/react-native";
import React from "react";
import ListItem from ".";
import CenterView from "../CenterView";

storiesOf("List", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("ListItem", () => <ListItem />);
