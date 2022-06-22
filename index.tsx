import { createApp } from "solid-utils";
import { Router, useRoutes, Link, RouteDefinition } from "solid-app-router";
import TimerPage from "src/pages/TimerPage";
import { HeaderMenu } from "src/components/HeaderMenu";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: () => <h1>Welcome to Solid.js</h1>,
  },
  {
    path: "/timer",
    component: TimerPage,
  },
];

const App = () => {
  const Route = useRoutes(routes);
  return (
    <>
      <HeaderMenu>
        <Link href="/">Home</Link>
        <Link href="/timer">Timer</Link>
      </HeaderMenu>
      <Route />
    </>
  );
};

createApp(App).use(Router).mount("#app");
