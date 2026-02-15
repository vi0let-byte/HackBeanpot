import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

export default function ShowButtonHover({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="drop-shadow-2xl">
      <Button className="rounded-full" variant="outline" size="icon">
        <Icon />
      </Button>
    </div>
  );
}
