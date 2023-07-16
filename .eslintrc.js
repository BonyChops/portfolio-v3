const rulesDirPlugin = require("eslint-plugin-rulesdir");
rulesDirPlugin.RULES_DIR = "rules";

module.exports = {
  extends: "next/core-web-vitals",
  plugins: ["rulesdir"],
  rules: {
    "rulesdir/no-next-link": "error",
  },
};
