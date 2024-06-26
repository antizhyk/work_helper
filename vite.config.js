import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";
const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg", "desc-icon.png"],
  manifest:{
    name:"React-vite-app",
    short_name:"react-vite-app",
    description:"I am a simple vite app",
    icons: [
          {
            src: '/icons/windows11/SmallTile.scale-100.png',
            sizes: '71x71',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/SmallTile.scale-125.png',
            sizes: '89x89',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/SmallTile.scale-150.png',
            sizes: '107x107',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/SmallTile.scale-200.png',
            sizes: '142x142',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/SmallTile.scale-400.png',
            sizes: '284x284',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square150x150Logo.scale-100.png',
            sizes: '150x150',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square150x150Logo.scale-125.png',
            sizes: '188x188',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square150x150Logo.scale-150.png',
            sizes: '225x225',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square150x150Logo.scale-200.png',
            sizes: '300x300',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square150x150Logo.scale-400.png',
            sizes: '600x600',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Wide310x150Logo.scale-100.png',
            sizes: '310x150',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Wide310x150Logo.scale-125.png',
            sizes: '388x188',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Wide310x150Logo.scale-150.png',
            sizes: '465x225',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Wide310x150Logo.scale-200.png',
            sizes: '620x300',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Wide310x150Logo.scale-400.png',
            sizes: '1240x600',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/LargeTile.scale-100.png',
            sizes: '310x310',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/LargeTile.scale-125.png',
            sizes: '388x388',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/LargeTile.scale-150.png',
            sizes: '465x465',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/LargeTile.scale-200.png',
            sizes: '620x620',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/LargeTile.scale-400.png',
            sizes: '1240x1240',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.scale-100.png',
            sizes: '44x44',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.scale-125.png',
            sizes: '55x55',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.scale-150.png',
            sizes: '66x66',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.scale-200.png',
            sizes: '88x88',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.scale-400.png',
            sizes: '176x176',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/StoreLogo.scale-100.png',
            sizes: '50x50',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/StoreLogo.scale-125.png',
            sizes: '63x63',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/StoreLogo.scale-150.png',
            sizes: '75x75',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/StoreLogo.scale-200.png',
            sizes: '100x100',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/StoreLogo.scale-400.png',
            sizes: '200x200',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/SplashScreen.scale-100.png',
            sizes: '620x300',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/SplashScreen.scale-125.png',
            sizes: '775x375',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/SplashScreen.scale-150.png',
            sizes: '930x450',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/SplashScreen.scale-200.png',
            sizes: '1240x600',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/SplashScreen.scale-400.png',
            sizes: '2480x1200',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-16.png',
            sizes: '16x16',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-20.png',
            sizes: '20x20',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-24.png',
            sizes: '24x24',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-30.png',
            sizes: '30x30',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-32.png',
            sizes: '32x32',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-36.png',
            sizes: '36x36',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-40.png',
            sizes: '40x40',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-44.png',
            sizes: '44x44',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-60.png',
            sizes: '60x60',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-64.png',
            sizes: '64x64',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-80.png',
            sizes: '80x80',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/windows11/Square44x44Logo.targetsize-256.png',
            sizes: '256x256',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/android/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/android/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/android/android-launchericon-144-144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/android/android-launchericon-96-96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/android/android-launchericon-72-72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/android/android-launchericon-48-48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/16.png',
            sizes: '16x16',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/20.png',
            sizes: '20x20',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/29.png',
            sizes: '29x29',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/32.png',
            sizes: '32x32',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/40.png',
            sizes: '40x40',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/50.png',
            sizes: '50x50',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/57.png',
            sizes: '57x57',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/58.png',
            sizes: '58x58',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/60.png',
            sizes: '60x60',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/64.png',
            sizes: '64x64',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/76.png',
            sizes: '76x76',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/80.png',
            sizes: '80x80',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/87.png',
            sizes: '87x87',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/100.png',
            sizes: '100x100',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/114.png',
            sizes: '114x114',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/120.png',
            sizes: '120x120',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/167.png',
            sizes: '167x167',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/180.png',
            sizes: '180x180',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/256.png',
            sizes: '256x256',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/icons/ios/1024.png',
            sizes: '1024x1024',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: '/android-chrome-192-192.png',
            sizes:'192x192',
            type:'image/png',
            purpose:'favicon'
          },
          {
            src:'/android-chrome-512-maskable_icon.png',
            sizes:'512x512',
            type:'image/png',
            purpose:'favicon'
          },
          {
            src: '/apple-touch-icon.png',
            sizes:'180x180',
            type:'image/png',
            purpose:'apple touch icon',
          },
          {
            src: '/maskable_icon-512x512.png',
            sizes:'512x512',
            type:'image/png',
            purpose:'any',
          }
        ],
    screenshots: [
      {
        src: 'screenshots/screenshot-wide.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide'
      },
      {
        src: 'screenshots/screenshot-mobile.png',
        sizes: '720x1280',
        type: 'image/png'
      }
    ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: manifestForPlugIn,
      workbox: {
        globDirectory: 'public',
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,json}'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === self.location.origin,
            handler: 'CacheFirst',
            options: {
              cacheName: 'my-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 дней
              }
            }
          }
        ]
      }
    })
  ]
})
