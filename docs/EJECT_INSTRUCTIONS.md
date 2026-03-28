I want to get the "eject" CLI command working. I want it to work from within a project that is using the earthling-ui package by running `bun earthling-ui eject button` for example. I want it to work like `npx shadcn@latest install button` but for the earthling-ui package.

Basically, it should copy the files from the target component into the project.

Each component has their own dependencies, so it will also need to copy and install those dependencies based on the specific component.

I want to be able to run this command from anywhere in the project, not just the root directory.

To find the path to install the components, it needs to look for the `earthling-ui.config.json` file in the root directory of the project. This file will come preloaded in with the each specific Earthling UI template. This file will determine important paths, such as the location to install the components.
Create an example of this file and add it to the repo, so that it can be used as a reference for me to add to the templates.

For the Next.js template the default component path is `packages/earthling-ui/src/components`. Unlike shadcn, I do not want a "src/components/ui" directory with individual component files, but rather folders for each component directly in the "src/components" directory (by default).

Eject should work with any component in the earthling-ui package. It should be able to find the component based on the name of the component, and then copy the files into the project and automatically install the dependencies.

Anything that needs to be configured should be done using the clack library to prompt the user for the necessary information.

A simple wizard to create the config file if it doesn't exist would be nice as well. It should be able to able to be called with `bun earthling-ui init` it should ask only important questions and then create the file.
