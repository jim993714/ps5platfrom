/*
 * @Description:
 * @Author:
 * @Date: 2022-08-09 20:18:01
 * @LastEditors: wangzijian
 * @LastEditTime: 2022-08-10 10:07:31
 */
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
