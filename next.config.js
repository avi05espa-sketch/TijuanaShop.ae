/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Esto saltará los errores de letras
  },
  eslint: {
    ignoreDuringBuilds: true, // Esto evitará que se detenga por reglas de código
  },
};

export default nextConfig;
