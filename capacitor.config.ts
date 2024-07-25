import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sync.myapp',
  appName: 'sync-contacts',
  webDir: 'www',
  bundledWebRuntime: false,
  server:{
    url: 'http://192.168.18.62:4200',
    cleartext : true
  }
};

export default config;
