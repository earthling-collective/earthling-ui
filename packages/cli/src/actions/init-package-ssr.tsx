import shell from "shelljs";

export async function initPackageSsr(name: string, options: InitOptions) {
  shell.exec(
    `yarn create next-app ${name} --ts --tailwind --app --src-dir --no-eslint --no-tailwind --import-alias "@/*"`
  );

  console.log(`✅ SSR package "${name}" initialized`);
}
