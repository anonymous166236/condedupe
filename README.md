# Data description
The studied projects are in the `projects` folder.
For each project, the original lockfile is named `package-lock.json.original`, and the new lockfile is named `package-lock.json.condedupe`.
To use them, please rename them to `package-lock.json`.
The binary code of ConDeDupe is in the `code` folder.

# Usage of ConDeDupe
In a Linux OS, install an npm environment with semver module, and then go to the `code` folder, run the command:

 `./condedupe <original lockfile path>` 

The new lockfile named `package-lock.json.condedupe` will be generated.
