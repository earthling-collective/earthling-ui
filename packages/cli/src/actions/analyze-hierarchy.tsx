import { findUpMultiple, pathExistsSync } from "find-up";
import { readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import type { PackageJson } from "type-fest";
import { parse as parseYaml } from "yaml";

type ZabuKitRc = {};

type Dir = {
  location: string;
  rc: ZabuKitRc | null;
  package: PackageJson | null;
  isMonoRepo: boolean;
};

type GitRepo = {};

export async function analyzeHierarchy() {
  let rc: ZabuKitRc;
  let repo: GitRepo;
  let pkg: PackageJson;

  let parents: Dir[] = (
    await findUpMultiple(
      async (dir) =>
        pathExistsSync(join(dir, "package.json")) ||
        pathExistsSync(join(dir, ".zabukitrc")) ||
        pathExistsSync(join(dir, ".git/config"))
          ? dir
          : "",
      { type: "directory" }
    )
  )
    .map((location) => {
      let dir: Dir = {
        location,
        rc: null,
        package: null,
        isMonoRepo: false,
      };

      //parse zabukit runtime configuration
      const rcPath = join(location, ".zabukitrc");
      if (existsSync(rcPath)) {
        const rc = parseYaml(readFileSync(rcPath).toString("utf-8"));

        dir = {
          ...dir,
          rc,
        };
      }

      //parse package.json information
      const packagePath = join(location, "package.json");
      if (existsSync(packagePath)) {
        const pkg: PackageJson = JSON.parse(
          readFileSync(packagePath).toString("utf-8")
        );
        const isMonoRepo = !!pkg.workspaces;

        dir = {
          ...dir,
          package: pkg,
          isMonoRepo,
        };
      }

      console.log(dir.location);
      return dir;
    })
    .filter((x) => !!x) as Dir[];

  return {
    parents,
  };
}
