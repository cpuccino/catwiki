import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	preset: "ts-jest",
	testEnvironment: "node",
	testPathIgnorePatterns: ["<rootDir>/node_modules/"],
	clearMocks: true,
	restoreMocks: true,
	resetModules: true
};

export default config;
