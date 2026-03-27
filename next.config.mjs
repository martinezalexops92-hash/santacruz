import WebpackObfuscator from 'webpack-obfuscator';

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer, dev }) => {
    // Solo ofuscar en producción y en el bundle del cliente
    if (!dev && !isServer) {
      config.plugins.push(
        new WebpackObfuscator({
          // Ofuscación de cadenas de texto
          stringArray: true,
          stringArrayThreshold: 0.8,
          stringArrayEncoding: ['base64'],
          stringArrayRotate: true,
          stringArrayShuffle: true,
          stringArrayWrappersCount: 2,
          stringArrayWrappersType: 'function',

          // Ofuscación de control de flujo
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 0.5,

          // Renombrar variables
          renameGlobals: false,
          identifierNamesGenerator: 'hexadecimal',

          // Protección anti-debug
          debugProtection: false,
          disableConsoleOutput: false,

          // Transformaciones seguras para Next.js
          splitStrings: true,
          splitStringsChunkLength: 5,
          transformObjectKeys: true,

          // Evitar roturas con Next.js
          target: 'browser',
          selfDefending: false,
          domainLock: [],
          reservedNames: ['^__next', '^__webpack'],
        }, [
          // Excluir archivos que no deben ofuscarse
          'node_modules/**',
          '*.json',
        ])
      );
    }
    return config;
  },
}

export default nextConfig
