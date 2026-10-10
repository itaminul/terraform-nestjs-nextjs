import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* Your existing configuration (like your webpack config) */
  
  // Add this line to silence the error:
  turbopack: {}, 
}

export default nextConfig
