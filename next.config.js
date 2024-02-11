/** @type {import('next').NextConfig} */
const nextConfig = {}



module.exports = {
    async redirects () {
        return [
           {
            source: '/github',
            destination: 'https://github.com/Avi-Rana-1718',
            permanent: true
           },
           {
            source: '/twitter',
            destination: 'https://twitter.com/_AviRana',
            permanent: true
           },
           {
            source: '/linkedin',
            destination: 'https://www.linkedin.com/in/avi-rana',
            permanent: true
           }
        ]
    }
}
