module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: '3',
          targets: '> 1%, not dead',
        },
      ],
      ['@babel/preset-react'],
    ],
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
      api.env('development') && 'react-refresh/babel',
    ].filter(Boolean),
    env: {
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 10,
              },
            },
          ],
          '@babel/preset-react',
        ],
      },
    },
  }
}
