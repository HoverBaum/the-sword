#!/usr/bin/env zx

console.log('Generating overview 🗺')
const tmpMermaidFile = 'story/overview.mmd'

// Let's turn the ink files into a mermaid diagram.
// We probably want to parse the json for this.
// Looks liek we can search for "->" attributes and ann values that don't start with a "." should generate a new connection.
// Like always remember which knot we are currently in, search for arrows and generate a transition for each arrow found.
const parsedInk = await fs.readJson('story/TheInkSword.ink.json')

console.log(Object.keys(parsedInk.root[2]))

const transitions = []

const knotsObject = parsedInk.root[2]
Object.keys(knotsObject).forEach((knot) => {
  const knotObject = knotsObject[knot]
  const jsonKnot = JSON.stringify(knotObject, null, 2)
  jsonKnot
    .split('\n')
    .filter((line) => line.includes('"->"'))
    .forEach((line) => {
      const destination = line.split(':')[1].trim().replace(/"/g, '')
      if (/^[\.\$]/.test(destination)) return
      transitions.push({ from: knot, to: destination })
    })
})

console.log(transitions)

const mermaidDiagram = `graph TD;${transitions
  .map(({ from, to }) => `${from}-->${to}`)
  .join(';')};`

console.log(mermaidDiagram)

// Turn the mermaid dinagram into an image we can view.
await fs.writeFile(tmpMermaidFile, mermaidDiagram)

$`npx mmdc -i ${tmpMermaidFile} -o story/overview.svg`
