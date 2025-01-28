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
  .option("--pwa", "Include a PWA project") // nextjs
  .option("--db", "Include a database project") // drizzle+postgres
  .option("--cli", "Include a CLI project") // commander
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
  .command("copy <component>")
  .description("Copy a component from earthling-ui to your clipboard")
  .action(async (component) => {
    try {
      const componentPath = path.resolve(
        __dirname,
        `components/${component}/index.tsx`
      );
      const componentCode = fs.readFileSync(componentPath, "utf8");

      copy(componentCode);

      console.log(`✅ "${component}" copied to clipboard`);
    } catch (error: any) {
      console.error(`❌ Failed to copy "${component}": ${error.message}`);
    }
  });

program.parse(process.argv);

const opts = program.opts();
const { args } = program;
