"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";

const ImageBottomSkeleton = () => {
  return (
    <Card className="w-1/3 dark:border dark:border-border">
      <CardContent className="p-4">
        <div className="mb-4">
          <Skeleton className="w-1/2 h-4 mb-2" />
          <Skeleton className="w-1/3 h-2 mb-2" />
        </div>
        <div className="mb-4">
          <Skeleton className="w-full h-3 mb-2" />
          <Skeleton className="w-3/4 h-3 mb-2" />
        </div>
        <div className="w-full h-[191px] overflow-hidden  rounded-md mb-4">
          <Skeleton className="w-full h-[191px] mb-4" />
        </div>

        <div className="flex justify-start">
          <Skeleton className="w-3/4 h-3 mb-2" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageBottomSkeleton;
