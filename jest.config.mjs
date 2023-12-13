import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})
/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}

export default createJestConfig(config)