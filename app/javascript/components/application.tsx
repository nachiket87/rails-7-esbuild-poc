import * as React from "react";
import { createRoot } from "react-dom/client";
import AnotherApplication from "./another_application";

interface AppProps {
  arg: string;
}

const App = ({ arg }: AppProps) => {
  return (
    <>
      <AnotherApplication />
      <div className="nachiket">{`this is ${arg}`}</div>;
    </>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const root = createRoot(rootEl);
  root.render(<App arg="Rails 7 with ESBuild" />);
});
