import Home from "./Home";

import loadData from "./helpers/loadData";

const Routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    loadData: () => loadData("posts"),
  },
];

export default Routes;
