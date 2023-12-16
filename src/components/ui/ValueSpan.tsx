export default function ValueSpan({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...props} className={`font-semibold text-gray-500 ${className}`} />
  );
}
