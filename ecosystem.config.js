module.exports = {
    apps: [
      {
        name: 'nextjs-tailwind-boilerplate',
        exec_mode: 'cluster',
        instances: '2', // Or a number of instances
        script: 'node_modules/next/dist/bin/next',
        args: 'start',
        env_local: {
          APP_ENV: 'local' // APP_ENV=local
        },
        env_dev: {
          APP_ENV: 'development' // APP_ENV=dev
        },
        env_prod: {
          APP_ENV: 'production' // APP_ENV=prod
        }
      }
    ]
  }
