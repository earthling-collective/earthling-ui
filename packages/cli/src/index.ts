#!/usr/bin/env node

import { Argument, Option, program } from "commander";
import pkg from "../package.json";
import { init } from "./actions/init";

console.log(`🧩 zabukit ${pkg.version}`);

program.name("🧩 zabukit").description("").version(pkg.version);

program
  .command("init")
  .addArgument(
    new Argument("[type]").choices(["repo", "package"]).default("package")
  )
  .addOption(new Option("-t, --template <template>").default("default"))
  .action(async (type, options) => {
    try {
      await init(type, options);
    } catch (err) {
      console.error(`❌`, err);
    }
  });

program
  .command("register")
  .argument("<url>")
  .action((url) => {
    console.log("REGISTER", url);
  });

program
  .command("unregister")
  .argument("<url>")
  .action((url) => {
    console.log("UNREGISTER", url);
  });

program
  .command("add")
  .argument("<component>")
  .action((component) => {
    console.log("Add", component);
  });

program
  .command("remove")
  .argument("<component>")
  .action((component) => {
    console.log("Remove", component);
  });

program.parse(process.argv);
