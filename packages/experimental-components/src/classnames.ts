interface Classes {
  [cls: string]: any
}

export default function cx(classes: Classes) {
  return Object.entries(classes)
    .filter(([, predicate]) => Boolean(predicate))
    .map(([cls]) => cls)
    .join(' ')
}
