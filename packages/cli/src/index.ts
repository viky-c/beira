import yargs from "yargs";
import { isArray } from "@beira/utils";

export function main(): void{
  console.log(yargs);
  console.log('isArray([])',isArray([]));
}
