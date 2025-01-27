import { Command } from "commander";
import pkg from "../package.json";
import { clone } from "isomorphic-git";
import fs from "node:fs";
import http from "isomorphic-git/http/node";

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
  .action((destination) => {
    console.log(`Creating a new earthling-ui project in ${destination}`);
  })
  .description("Create a new earthling-ui monorepo")
  .option("--pwa", "Include a PWA project") // nextjs
  .option("--db", "Include a database project") // drizzle+postgres
  .option("--cli", "Include a CLI project"); // commander

program.parse(process.argv);

const opts = program.opts();
const { args } = program;

await clone({
  fs,
  http,
  dir: "./",
  url: "https://github.com/earthling-collective/template-monorepo.git",
});
