import { mkdir, copyFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(execFile);

const input = "src/content/cv.md";
const defaults = "latex/cv-pandoc.yaml";

const texOutput = "latex/cv.tex";
const pdfOutput = "latex/cv.pdf";
const publicPdf = "public/cv-esbae.pdf";

async function main() {
  console.log("Generating CV LaTeX...");

  await exec("pandoc", [
    "--defaults",
    defaults,
    input,
  ]);

  console.log("Compiling CV PDF...");

  await exec("pdflatex", [
    "-interaction=nonstopmode",
    "-halt-on-error",
    "-output-directory=latex",
    texOutput,
  ]);

  console.log("Copying CV PDF...");

  await mkdir("public", { recursive: true });
  await copyFile(pdfOutput, publicPdf);

  console.log("CV PDF generated successfully!");
}

main().catch((error) => {
  console.error(error.stderr || error.message);
  process.exit(1);
});