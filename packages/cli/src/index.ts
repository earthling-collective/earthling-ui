#!/usr/bin/env node

import { Argument, program } from "commander";
import pkg from "../package.json";

program.name("Earthling 🌎").description("").version(pkg.version);

program
  .command("init")
  .addArgument(new Argument("<scope>").choices(["repo", "package"]))
  .action((scope) => {
    console.log("INIT", scope);
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

program.parse(process.argv);
