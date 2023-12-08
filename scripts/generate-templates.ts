import shell from "shelljs";
import { resolve } from "path";
import { clean } from "./clean";
import { readFile, writeFile } from "fs/promises";
import micromatch from "micromatch";

const paths = {
  root: resolve(__dirname),
  templates: resolve(__dirname, "../templates"),
};

const packageJsonDefaults = {
  version: "0.0.0",
  private: true,
};

const extraLibraries: {
  [pacakge: string]: {
    templates?: string[]; //templates for which to include this package
    version?: string;
    dev?: boolean;
    setup?: () => Promise<void>;
  };
} = {
  "@iconify-json": {},
  "@iconify/tailwind": {},
  "@supabase/supabase-js": {},
  "@svgr/webpack": {},
  "@earthling-ui/cli": {
    dev: true,
  },
  "framer-motion": {},
  immer: {},
  luxon: {},
  "@types/luxon": { dev: true },
  "use-immer": {},
  zod: {},
  zustand: {},
};

(async () => {
  await generateTemplates();
  await clean();
})();

export async function generateTemplates() {
  await generate("ssr", {
    createCmd: `yarn create next-app ssr --ts --tailwind --app --src-dir --no-eslint --import-alias "@/*"`,
  });
  await generate("spa", {
    createCmd: `yarn create vite spa --template react-ts`,
  });
  await generate("desktop", {
    createCmd: `yarn create @quick-start/electron desktop --template react-ts`,
  });
}

type GeneratorOptions = {
  createCmd: string;
};

async function generate(name: string, options: GeneratorOptions) {
  //navigate to template folder
  await shell.cd(paths.templates);

  //clear existing template
  await shell.rm("-rf", `./${name}`);

  //run create vite
  await shell.exec(options.createCmd);

  //navigate to specific template folder
  const templatePath = resolve(paths.templates, `./${name}`);
  await shell.cd(templatePath);

  //read package.json
  const packageJsonPath = resolve(paths.templates, `./${name}/package.json`);
  let packageJson = JSON.parse(
    (await readFile(packageJsonPath)).toString("utf-8")
  );

  //merge package.json defaults
  packageJson = Object.assign({}, packageJson, packageJsonDefaults);

  //save package.json
  await writeFile(packageJsonPath, JSON.stringify(packageJson, null, "  "));

  //install dependencies
  await shell.exec(`yarn install`);

  //add addtl regular dependencies
  const libraries = Object.fromEntries(
    Object.entries(extraLibraries).filter(
      (x) => x[1].templates?.some((y) => micromatch.any(x[0], y))
    )
  ); //matches template
  await shell.exec(
    `yarn add ${Object.entries(libraries)
      .map((x) => `${x[0]}${x[1].version ? `:${x[1].version}` : ``}`)
      .join(" ")}`
  );

  //add addtl dev dependencies
  const devLibraries = Object.entries(extraLibraries)
    .filter((x) => x[1].dev) //is dev
    .filter((x) => x[1].templates?.some((y) => micromatch.any(x[0], y))) //matches template
    .map((x) => `${x[0]}${x[1].version ? `:${x[1].version}` : ``}`);
  await shell.exec(`yarn add -D ${devLibraries.join(" ")}`);
}
