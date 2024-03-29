import { findUpMultiple, pathExistsSync } from "find-up";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { PackageJson, PartialDeep } from "type-fest";
import { parse as parseYaml } from "yaml";

type ZabuKitRc = PartialDeep<{}>;

type Dir = {
  location: string;
  rc: ZabuKitRc | null;
  repo: GitRepo | null;
  package: PackageJson | null;
};

type GitRepo = {};

export async function analyzeHierarchy() {
  let finalRc: ZabuKitRc = {};
  let parentRepo: GitRepo | null = null;
  let parentPackage: PackageJson | null = null;

  let parents: Dir[] = (
    await findUpMultiple(
      (dir) =>
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
        repo: null,
        package: null,
      };

      //parse zabukit runtime configuration
      const rcPath = join(location, ".zabukitrc");
      if (existsSync(rcPath)) {
        const rc = parseYaml(readFileSync(rcPath).toString("utf-8"));

        //merge rcs
        finalRc = rc;

        dir = {
          ...dir,
          rc,
        };
      }

      //parse git repo information
      const repoPath = join(location, ".git/config");
      if (existsSync(repoPath)) {
        const repo = {};

        if (!parentRepo) parentRepo = repo;

        dir = {
          ...dir,
          repo,
        };
      }

      //parse package.json information
      const packagePath = join(location, "package.json");
      if (existsSync(packagePath)) {
        const pkg: PackageJson = JSON.parse(
          readFileSync(packagePath).toString("utf-8")
        );

        if (!parentPackage) parentPackage = pkg;

        dir = {
          ...dir,
          package: pkg,
        };
      }

      console.log(dir.location);
      return dir;
    })
    .filter((x) => !!x) as Dir[];

  return {
    parents,
    parentRepo,
    finalRc,
    parentPackage: parentPackage as any as PackageJson,
  };
}
