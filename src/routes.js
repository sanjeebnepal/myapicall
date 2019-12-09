import All from "./views/All";
import Followed from "./views/Followed";
import Unfollowed from "./views/Unfollowed";
import Done from "./views/Done";

export default [
  {
    path: "/",
    component: All,
    exact: true,
    text: "All"
  },
  {
    path: "/unfollowed",
    component: Unfollowed,
    text: "Unfollowed"
  },
  {
    path: "/followed",
    component: Followed,
    text: "Followed"
  },
  {
    path: "/done",
    component: Done,
    text: "Done"
  }
];
