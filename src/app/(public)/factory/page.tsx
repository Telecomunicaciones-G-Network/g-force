import { Button } from "@/src/packages/gnetwork-ui/components/molecules/buttons/button";
import styles from "./page.module.css";

/**
 * Factory page component.
 */
export default function FactoryPage() {
  return (
    <div className={styles.base}>
      <Button color="gray" scheme="outline">
        click me
      </Button>
    </div>
  );
}
