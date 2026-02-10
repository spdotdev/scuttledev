import { mdToPdf } from 'md-to-pdf';
import { readdir, mkdir } from 'node:fs/promises';
import { join, basename } from 'node:path';

const DOCS_DIR = 'docs/terms_conditions/claude';
const OUTPUT_DIR = 'public/legal';

const pdfOptions = {
  launch_options: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  stylesheet: [],
  css: `
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.6;
      color: #1a1a1a;
      max-width: 700px;
      margin: 0 auto;
      padding: 2cm;
    }
    h1 {
      font-size: 20pt;
      border-bottom: 2px solid #5b4cf0;
      padding-bottom: 8px;
      margin-bottom: 4px;
    }
    h1 + p { margin-top: 0; }
    h1 + p > strong { font-size: 13pt; }
    h1 + p + p > em, h1 + p > em { font-size: 9pt; color: #555; }
    h2 {
      font-size: 13pt;
      color: #5b4cf0;
      margin-top: 28px;
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 4px;
    }
    hr { border: none; border-top: 1px solid #e0e0e0; margin: 24px 0; }
    strong { color: #1a1a1a; }
    a { color: #5b4cf0; text-decoration: none; }
  `,
  pdf_options: {
    format: 'A4',
    margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '20mm' },
    printBackground: true,
  },
};

async function generate() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = (await readdir(DOCS_DIR)).filter(f => f.endsWith('.md'));

  if (files.length === 0) {
    console.log('No markdown files found in', DOCS_DIR);
    return;
  }

  for (const file of files) {
    const input = join(DOCS_DIR, file);
    const outputName = basename(file, '.md') + '.pdf';
    const output = join(OUTPUT_DIR, outputName);

    console.log(`Generating ${output}...`);
    const pdf = await mdToPdf({ path: input }, pdfOptions);

    if (pdf?.content) {
      const { writeFile } = await import('node:fs/promises');
      await writeFile(output, pdf.content);
      console.log(`  ✓ ${output}`);
    } else {
      console.error(`  ✗ Failed to generate ${output}`);
    }
  }

  console.log('\nDone.');
}

generate().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
