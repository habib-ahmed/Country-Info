export default function LabelSpan({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLSpanElement>) {
  return <span {...props} className={`font-semibold mr-2 ${className}`} />;
}