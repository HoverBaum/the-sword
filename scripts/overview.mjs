#!/usr/bin/env zx

console.log('Generating overview 🗺')
const tmpMermaidFile = 'story/overview.mmd'

/**
 * New idea: parse the JSON with more knowledge about it's setup.
 * From the special objects of all containers find potential named containers.
 * Designate all of these names as potential divert target and find mentions of them.
 * Strip found divert targets of relative pathing elements to get a clean mermaid diagram with proper naming.
 * Alternatively we could build up the right names for knots ourselfes.
 * The last element of a container (arry) is called the containerTerminator and is either null or containes
 * named objects plus "#n" and "#f".
 * https://github.com/inkle/ink/blob/master/Documentation/ink_JSON_runtime_format.md
 *
 * The problem will likely be variable assigned divert targets. And functions for diverts.
 * Assuming we just care to know where you could go from any point we can probably gather a list
 * of all possible divert targets. But that will be some effort....
 * Might be nice to initially just implement a warning for that :D
 */

const terminaotrKeys = (terminator) =>
  Object.keys(terminator).filter((key) => key !== '#n' && key !== '#f')

// Let's turn the ink files into a mermaid diagram.
// We probably want to parse the json for this.
// Looks liek we can search for "->" attributes and ann values that don't start with a "." should generate a new connection.
// Like always remember which knot we are currently in, search for arrows and generate a transition for each arrow found.
const parsedInk = await fs.readJson('story/TheInkSword.ink.json')

const transitions = []

const rootTerminator = parsedInk.root[parsedInk.root.length - 1]

const knots = terminaotrKeys(rootTerminator)

const knotAndStichIdentifiers = knots.reduce((identifiers, knot) => {
  identifiers.push(knot)
  const knotTerminator = rootTerminator[knot][rootTerminator[knot].length - 1]
  // knotTerminator can be null.
  if (knotTerminator) {
    const keys = terminaotrKeys(knotTerminator)
    identifiers = identifiers.concat(keys.map((key) => `${knot}.${key}`))
  }
  return identifiers
}, [])

console.log(knotAndStichIdentifiers)

/**
 *
 * @param {*} container any[]
 * @param {*} identifiers string[]
 */
const transitionsFromContainer = (container, identifiers) => {
  const containerTerminator = container.pop()
}

// Now we find all transitions to all identifiers.
terminaotrKeys(rootTerminator).forEach((knot) => {
  // For each knot exclude the terminator and find transitions in the rest of the json.
  // KnotObject is a container array.
  const knotObject = rootTerminator[knot]
  if (!Array.isArray(knotObject)) {
    console.log('Knot object:')
    console.log(knotObject)
    console.error('Knot Object is not an array but expected to be a container.')
    process.exit()
  }
  const knotTerminator = knotObject.pop()
  const knotJson = JSON.stringify(knotObject, null, 2)
  // Find transitions in the main part of the container.
  knotJson
    .split('\n')
    .filter((line) => line.includes('->"'))
    .forEach((line) => {
      const destination = line.split(':')[1].trim().replace(/"/g, '')
      const targetIdentifier = knotAndStichIdentifiers.find(
        (identifier) => destination === identifier
      )
      if (knot === 'TheCamp') {
        console.log(line)
        console.log(targetIdentifier)
      }
      if (!targetIdentifier) return
      if (targetIdentifier === knot) return
      transitions.push({ from: knot, to: targetIdentifier })
    })
  // Now also look for transitions in all sub-parts of the terminator.
  if (!knotTerminator) return
})

// const knotsObject = parsedInk.root[2]
// Object.keys(knotsObject).forEach((knot) => {
//   const knotObject = knotsObject[knot]
//   const jsonKnot = JSON.stringify(knotObject, null, 2)
//   jsonKnot
//     .split('\n')
//     .filter((line) => line.includes('"->"'))
//     .forEach((line) => {
//       const destination = line.split(':')[1].trim().replace(/"/g, '')
//       if (/^[\.\$]/.test(destination)) return
//       transitions.push({ from: knot, to: destination })
//     })
// })

console.log(transitions)

const mermaidDiagram = `graph TD;${transitions
  .map(({ from, to }) => `${from}-->${to}`)
  .join(';')};`

console.log(mermaidDiagram)

// Turn the mermaid dinagram into an image we can view.
await fs.writeFile(tmpMermaidFile, mermaidDiagram)

$`npx mmdc -i ${tmpMermaidFile} -o story/overview.svg`
