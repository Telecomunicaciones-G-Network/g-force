import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "bugfix",
        "build",
        "chore",
        "cicd",
        "docs",
        "feature",
        "hotfix",
        "performance",
        "refactor",
        "release",
        "revert",
        "review",
        "style",
        "test",
        "update",
        "wip",
      ],
    ],
    "type-case": [2, "always", "lowercase"],
    "type-empty": [2, "never"],
    "subject-case": [2, "always", "lowercase"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 100],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
  },
};

export default config;
