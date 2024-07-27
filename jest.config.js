// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'identity-obj-proxy'
  },
  transform: {
    // Transform CSS files
    '\\.(css|less|scss|sass)$': 'jest-css-modules-transform',
    // Other transformations if necessary
    '^.+\\.jsx?$': 'babel-jest'
  }
}
