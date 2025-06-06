"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import BlogCard from "./blog-card";

export default function BottomSideSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Bottom Drawer</Button>
      </SheetTrigger>
      <SheetContent
        closeIcon={<X className="h-5 w-5 relative" />}
        side="bottom"
        className="p-0 max-h-[550px] overflow-y-auto"
      >
        <SheetHeader className="p-3 border-b border-border">
          <SheetTitle>Gallary</SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-3.5 py-6 gap-6">
          <BlogCard />
        </div>
      </SheetContent>
    </Sheet>
  );
}
