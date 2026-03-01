/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['supabase.co', 'firebasestorage.googleapis.com'],
  },
};

export default nextConfig;
