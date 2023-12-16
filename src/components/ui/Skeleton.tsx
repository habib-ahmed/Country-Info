export default function Skeleton({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`bg-gray-900/10 dark:bg-slate-600 animate-pulse rounded-md w-full min-h-[16px] ${className}`}
    />
  );
}