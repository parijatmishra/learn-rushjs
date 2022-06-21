import { greet } from "libgreet";
import { program } from "commander";

program
  .name("hello-strict")
  .showHelpAfterError()
  .argument("<name>", "User's name (required).")
  .parse();
program.parse();
const args = program.args;
if (args.length > 1) {
  console.error(`ERROR: Exactly one argument expected. Given ${args.length}`);
  program.help({ error: true });
}
console.log(greet(args[0]));
