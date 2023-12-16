import Skeleton from '@/components/ui/Skeleton';
import BackButton from './BackButton';

export default function SkeletonLoading() {
  return (
    <div>
      <BackButton />
      <div className="mt-8 flex flex-col items-center  lg:flex-row md:flex gap-4 lg:gap-12   overflow-hidden">
        <>
          <Skeleton
            className="md:mb-8 mb-2  overflow-hidden
        w-[320px] h-[240px] md:w-[640px] md:h-[480px] "
          />
          <div>
            <Skeleton className="mb-5" />
            <Skeleton className="w-[320px] md:w-[640px]" />
            <div className="grid grid-cols-1 md:grid-cols-2 md:flex mt-5 gap-4      md:text-xl">
              <Skeleton className="h-[350px] w-[300px]" />
              <Skeleton className="h-[350px] w-[300px]" />
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
