interface Classes {
  [cls: string]: any
}

export function cx(classes: Classes) {
  let result = Object.entries(classes)
    .filter(([, predicate]) => Boolean(predicate))
    .map(([cls]) => cls)
  if (result.length) {
    return result.join(' ')
  }
}

export default cx;
