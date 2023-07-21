import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import styleImport, { AntdResolve } from 'vite-plugin-style-import';//样式自动按需加入
//路径引入 使import中可以使用绝对路径 @开头
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  // styleImport({
  //   resolves: [
  //     AntdResolve()
  //   ],
  // })
  ],

  // resolve:{
  //   alias:{
  //     "@":path.resolve(__dirname,'./src')
  //   },
  //   extensions:[".js",".ts",".jsx","tsx","json"]
  // }
})
