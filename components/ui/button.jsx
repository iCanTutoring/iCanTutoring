export function Button({ children, className = "", asChild = false, ...props }) {
  const Comp = asChild ? "a" : "button";
  return (
    <Comp className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${className}`} {...props}>
      {children}
    </Comp>
  );
}
