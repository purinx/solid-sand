import solid from "vite-plugin-solid";
import { fileURLToPath } from "url";
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
  resolve: {
    alias: {
      src: fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
