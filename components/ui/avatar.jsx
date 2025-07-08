
export function Avatar({ children, className = "" }) {
  return <div className={`rounded-full overflow-hidden ${className}`}>{children}</div>;
}
export function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}
export function AvatarFallback({ children, className = "" }) {
  return <div className={`bg-gray-300 text-white flex items-center justify-center ${className}`}>{children}</div>;
}
