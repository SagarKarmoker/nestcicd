module.exports = {
  apps: [
    {
      name: 'nestcicd',
      script: 'dist/main.js',
      exec_mode: 'cluster',
      instances: 2,
      autorestart: true,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
