import { Command } from "commander";
import { copy } from "copy-paste";
import fs from "node:fs";
import path from "node:path";
import pkg from "../package.json";
import { createAction } from "./actions/create";
import { ejectAction } from "./actions/eject";
import { initAction } from "./actions/init";

const handleSigTerm = () => process.exit(0);
process.on("SIGINT", handleSigTerm);
process.on("SIGTERM", handleSigTerm);

const program = new Command();

program
  .name("earthling-ui")
  .description("A CLI for earthling-ui")
  .version(pkg.version);

program
  .command("create [template] [destination]")
  .description("Create a new earthling-ui project")
  .action(createAction);

program
  .command("init")
  .description("Initialize earthling-ui config for your project")
  .action(initAction);

program
  .command("eject <component>")
  .description("Eject a component from earthling-ui into your project")
  .action(ejectAction);

program
  .command("copy <snippet>")
  .description("Copy a component from earthling-ui to your clipboard")
  .action(async (snippet) => {
    try {
      const snippetPath = path.resolve(__dirname, `snippets/${snippet}.tsx`);
      const snippetCode = fs.readFileSync(snippetPath, "utf8");
      copy(snippetCode);
      console.log(`✅ "${snippet}" copied to clipboard`);
    } catch (error: any) {
      console.error(`❌ Failed to copy "${snippet}": ${error.message}`);
    }
  });

program.parse(process.argv);
