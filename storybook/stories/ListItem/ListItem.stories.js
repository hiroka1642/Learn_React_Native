import React from "react";
import { ListItem as _ListItem } from ".";
import CenterView from "../CenterView";

export default {
  title: "List",
  decorators: [(getStory) => <CenterView>{getStory()}</CenterView>],
};

export const ListItem = () => <_ListItem />;

ListItem.story = {
  name: "ListItem",
};
