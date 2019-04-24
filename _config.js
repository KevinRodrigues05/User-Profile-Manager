module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'my-precious',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/mean-social-token-auth',
  SALT_WORK_FACTOR: 10,
  GITHUB_SECRET: process.env.GITHUB_SECRET || '9269f128a4f9cc769fa663e87ab975134dd78de7',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'glFAzuaB-cCJc4HVUdZw-3M6',
  INSTAGRAM_SECRET: process.env.INSTAGRAM_SECRET || '333ee37dce0644a8be3af4179b07f0f0'
};
