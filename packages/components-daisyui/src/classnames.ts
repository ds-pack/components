interface Classes {
  [cls: string]: any
}

export function cx(classes: Classes) {
  return Object.entries(classes)
    .filter(([, predicate]) => Boolean(predicate))
    .map(([cls]) => cls)
    .join(' ')
}
