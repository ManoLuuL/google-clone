import "./../globals.css";

import { ReactNode } from "react";
import { SearchHeader } from "@/components";

export default function layout(children: ReactNode) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
