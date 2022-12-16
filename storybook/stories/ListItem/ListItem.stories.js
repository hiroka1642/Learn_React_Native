import React from "react";
import { ListItem } from ".";
import CenterView from "../CenterView";

export default {
  title: "List",
  decorators: [(getStory) => <CenterView>{getStory()}</CenterView>],
};

export const _ListItem = () => <ListItem />;

_ListItem.story = {
  name: "ListItem",
};
