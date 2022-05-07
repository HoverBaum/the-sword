#!/usr/bin/env zx

console.log('Generating overview 🗺')
const tmpMermaidFile = 'story/overview.mmd'

// Let's turn the ink files into a mermaid diagram.
const mermaidDiagram = `graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;`

// Turn the mermaid dinagram into an image we can view.
await fs.writeFile(tmpMermaidFile, mermaidDiagram)

$`npx mmdc -i ${tmpMermaidFile} -b transparent -o story/overview.svg`
