import type { PropsWithChildren } from "react";

import { cn } from "@gnetwork-ui/utils/cn.util";

import styles from "./layout.module.css";

export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <div
      className={cn(
        styles.base,
        "flex-col items-start desktop:flex-row desktop:items-center",
      )}
    >
      <section
        className={cn(
          styles.base__carousel,
          "gap-0 items-center justify-between mb-auto tablet:flex-1 tablet:gap-2 tablet:items-start tablet:justify-start tablet:mb-0",
        )}
      >
        <div className="h-[302px] p-4 tablet:h-[472px] desktop:h-full tablet:p-8 desktop:p-6 text-transparent">
          carousel
        </div>
      </section>
      <main
        className={cn(
          styles.base__body,
          "items-start tablet:items-center desktop:flex-1",
        )}
      >
        {children}
      </main>
    </div>
  );
}
