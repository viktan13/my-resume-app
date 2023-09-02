import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resourcePath: string) => resourcePath.includes('.module.'),
                            localIdentName: "[path][name]__[local]--[hash:base64:5]",
                        }
                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };

    return [
        typeScriptLoader,
        cssLoader
    ]
}
