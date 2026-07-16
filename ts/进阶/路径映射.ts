/*
为什么需要路径映射
随着项目规模增长，文件目录会越来越深。

使用相对路径导入文件（如 ../../../components/Button）会让代码难以阅读和维护。

路径映射允许我们使用别名（如 @/components/Button）来替代冗长的相对路径。

基本配置
在 tsconfig.json 中配置 paths 和 baseUrl。
{
    "compilerOptions": {
        // 基准路径：所有路径别名的根目录
        "baseUrl": ".",

        // 路径映射配置
        "paths": {
            // @/ 开头的别名，指向 src 目录
            "@/*": ["src/*"],

            // @components 开头的别名
            "@components/*": ["src/components/*"],

            // @utils 开头的别名
            "@utils/*": ["src/utils/*"],

            // @services 开头的别名
            "@services/*": ["src/services/*"],

            // @assets 开头的别名
            "@assets/*": ["src/assets/*"],

            // @types 开头的别名
            "@types/*": ["src/types/*"]
        }
    }
}

使用路径别名
配置完成后，可以在代码中使用别名导入模块。
// 使用路径别名导入
import { Button } from '@/components/Button';
import { User } from '@types/user';
import { fetchUser } from '@services/userApi';
import { formatDate } from '@utils/date';

// 导入样式
import styles from '@/components/Button.module.css';

// 导入图片
import logo from '@assets/logo.png';

// 使用导入的模块
const handleClick = () => {
    console.log('按钮点击');
};

const userButton = new Button({
    text: '用户',
    onClick: handleClick
});

console.log('组件加载成功');

Vite 配置
使用 Vite 时，需要在 tsconfig.json 和 vite.config.ts 中同时配置。

vite.config.ts
// 导入 vite 模块
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite 配置
export default defineConfig({
    plugins: [react()],

    // 路径别名配置
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@services': path.resolve(__dirname, './src/services'),
            '@types': path.resolve(__dirname, './src/types'),
            '@assets': path.resolve(__dirname, './src/assets')
        }
    }
});
*/ 
