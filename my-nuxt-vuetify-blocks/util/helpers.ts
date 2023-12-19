const onRE = /^on[^a-z]/
export const isOn = (key: string) => onRE.test(key)
export const eventName = (name: string) =>
  name.slice(2, 3).toLowerCase() + name.slice(3)

export function propsToString(
  props: Record<string, any>,
  indent = 1,
  bound: string[] = [],
) {
  const displayedProps = Object.entries(props)
    .filter(([k, v]) => v !== undefined)
    .map(([k, v]) => {
      if (bound.includes(k)) return `:${k}="${v}"`
      if (isOn(k)) {
        return v === true ? `@${eventName(k)}` : `@${eventName(k)}="${v}"`
      }
      if (v === true) return k
      if (typeof v === 'string') return `${k}="${v}"`
      if (Array.isArray(v)) return `:${k}="['${v.join("', '")}']"`
      if (Object(v) === v)
        return `:${k}="${JSON.stringify(v).replace(/"/g, "'")}"`

      return `:${k}="${v}"`
    })

  const propsString = displayedProps.join(' ')

  const shouldWrap = propsString.length > 50
  if (!shouldWrap) {
    return !propsString ? '' : ' ' + propsString
  } else {
    return (
      '\n' +
      displayedProps.map((v) => '  '.repeat(indent) + v).join('\n') +
      '\n' +
      '  '.repeat(indent - 1)
    )
  }
}
