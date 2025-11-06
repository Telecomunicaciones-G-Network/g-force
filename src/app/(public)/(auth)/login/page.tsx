import { Alert } from "@gnetwork-ui/components/molecules/alerts/alert";

import { cn } from "@gnetwork-ui/utils/cn.util";

import styles from "./page.module.css";

/**
 * Login page component.
 */
export default function LoginPage() {
  return (
    <form
      className={cn(
        styles.base,
        "gap-6 items-center justify-start pb-4 pt-0 px-4 tablet:gap-8 tablet:items-start tablet:justify-center tablet:pb-8 tablet:px-[204px]",
      )}
    >
      {false && (
        <div className={styles.base__alert}>
          <Alert className="animated-fade-in">alerta</Alert>
        </div>
      )}
    </form>
  );
}
