// module.exports = {
//     images: {
//       domains: ['cdn.sanity.io'], // Allow images from Sanity's CDN
//     },
//   }
// 
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};
