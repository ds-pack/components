module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.js$': '@swc/jest',
    '^.+\\.ts$': '@swc/jest',
    '^.+\\.tsx$': '@swc/jest',
  },
}
