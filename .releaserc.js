const getConfig = () => {
    return {
      branches: [
        'main',
        {name: 'dev', prerelease: 'dev'},
        {name: 'stg', prerelease: 'stg'}
      ],
      plugins: [
        ['@semantic-release/commit-analyzer', {
          preset: 'conventionalcommits'
        }],
        '@semantic-release/release-notes-generator',
        ['@semantic-release/github', {
          'successComment': false,
          'failComment': false,
          'failTitle': false,
        }],
      ],
    };
  };
  
  module.exports = getConfig(process.env.GITHUB_TOKEN);