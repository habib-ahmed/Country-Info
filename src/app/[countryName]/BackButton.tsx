import { ArrowLeftIcon } from '@/components/Icons';
import ValueSpan from '@/components/ui/ValueSpan';
import Link from 'next/link';

export default function BackButton() {
  return (
    <Link
      href="/"
      className=" mt-8   px-6  py-2 inline-block rounded shadow font-semibold  hover:shadow-2xl cursor-pointer hover:opacity-75 border "
    >
      <ArrowLeftIcon className="w-4 h-4 inline-block mr-2" />
      <ValueSpan> Back </ValueSpan>
    </Link>
  );
}
