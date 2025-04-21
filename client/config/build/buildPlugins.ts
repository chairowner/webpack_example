import { ProgressPlugin, Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

export function buildPlugins({
	mode,
	paths,
	bundleAnalyze,
	platform,
}: BuildOptions): Configuration["plugins"] {
	const isProd = mode === "production";
	const isDev = mode === "development";

	let plugins: Configuration["plugins"] = [
		new HtmlWebpackPlugin({
			template: paths.html,
			favicon: path.resolve(paths.public, "favicon.ico"),
			minify: isProd,
		}),
		new DefinePlugin({
			__PLATFORM__: JSON.stringify(platform),
		}),
	];

	if (isDev) {
		plugins.push(new ProgressPlugin());
		plugins.push(new ForkTsCheckerWebpackPlugin());
		plugins.push(new ReactRefreshWebpackPlugin());
	}

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: "css/[name].[contenthash].css",
				chunkFilename: "css/[name].[contenthash].css",
			})
		);
		plugins.push(
			new CopyPlugin({
				patterns: [
					{
						from: path.resolve(paths.public, "manifest.webmanifest"),
						to: path.resolve(paths.output, "manifest.webmanifest"),
					},
				],
			})
		);
	}

	if (bundleAnalyze) {
		plugins.push(new BundleAnalyzerPlugin());
	}

	return plugins;
}
