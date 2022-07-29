/// C'est là où la configuration de Next se place (comme par exemple les sorties des CSS et SCSS)
const path = require('path')

/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    /* config options here */
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
  }
  
module.exports = nextConfig