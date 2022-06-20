import solid from "vite-plugin-solid";
import { defineConfig, Plugin } from "vite";

const logPlugin = (): Plugin => {
  return {
    name: "looog",
    configResolved(config) {
      console.log({ alias: config.resolve.alias });
    },
  };
};

export default defineConfig({
  plugins: [solid({}), logPlugin()],
  build: { target: "esnext" },
});
