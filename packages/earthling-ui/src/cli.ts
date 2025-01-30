import { Command } from "commander";
import pkg from "../package.json";
import { clone } from "isomorphic-git";
import fs from "node:fs";
import http from "isomorphic-git/http/node";
import { copy } from "copy-paste";
import path from "node:path";

const handleSigTerm = () => process.exit(0);
process.on("SIGINT", handleSigTerm);
process.on("SIGTERM", handleSigTerm);

const program = new Command();

program
  .name("earthling-ui")
  .description("A CLI for earthling-ui")
  .version(pkg.version);

program
  .command("create <destination>")
  .description("Create a new earthling-ui monorepo")
  .option("--pwa <name>", "Include a PWA project") // nextjs
  .option("--db <name>", "Include a database project") // drizzle+postgres
  .option("--lib <name>", "Include an internal librarry project") // bun build
  .option("--cli <name>", "Include a CLI project") // commander
  .action(async (destination) => {
    console.log(`Creating a new earthling-ui project in ${destination}`);
    await clone({
      fs,
      http,
      dir: "./",
      url: "https://github.com/earthling-collective/template-monorepo.git",
    });
  });

program
  .command("eject <component>")
  .description("Eject a component from earthling-ui into your project")
  .action(async (component) => {
    console.log(`🚧 Coming soon`);
  });

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
