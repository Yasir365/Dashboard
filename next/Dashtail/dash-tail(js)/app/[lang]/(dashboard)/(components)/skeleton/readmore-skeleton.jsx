"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";

const ReadMoreSkeleton = () => {
  return (
    <Card className="w-1/3  dark:border dark:border-border">
      <CardContent className="p-0">
        <div className="w-full h-[191px] overflow-hidden rounded-t-md">
          <Skeleton className="w-full h-full  rounded-b-none" />
        </div>

        <div className="p-4 ">
          <Skeleton className="w-1/2 h-4 mb-4" />
          <Skeleton className="w-full h-3 mb-2" />
          <Skeleton className="w-full h-3 mb-2" />
          <Skeleton className="w-full h-3 mb-2" />
          <Skeleton className="w-3/4 h-3 mb-4" />

          <div className=" flex gap-3">
            <Skeleton className="w-28 h-4 mb-1" />
            <Skeleton className="w-28 h-4 mb-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReadMoreSkeleton;
