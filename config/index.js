var config = {
  local: {
    mode: 'local',
    port: 3000,
    db: {
      server: "localhost",
      port: 27017,
      name: "kbv2"
    }
  },
  staging: {
    mode: 'staging',
    port: 4000,
    db: {
      server: "localhost",
      port: 27017,
      name: "kbv2"
    }
  },
  production: {
    mode: 'production',
    port: 5000,
    db: {
      server: "127.0.0.1",
      port: 27017,
      name: "kbv2"
    }
  }
}
module.exports = function(mode) {
  return config[mode || process.argv[2] || 'local'] || config.local;
}
