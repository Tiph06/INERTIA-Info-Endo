import { Link } from '@inertiajs/react';

export default function TextLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`text-sm text-blue-600 hover:underline dark:text-blue-400 ${className}`}
    >
      {children}
    </Link>
  );
}