import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | Hakinz_Tech',
  description: 'Content management for Hakinz_Tech portfolio',
  robots: 'noindex, nofollow', // Don't index admin pages
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
