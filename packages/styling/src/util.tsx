export function flatten(
  obj: Record<string, string | Record<string, string>>,
  base: string = ""
) {
  var result: Record<string, string> = {};
  for (let key of Object.keys(obj)) {
    let val = obj[key];
    if (typeof val === "object")
      Object.assign(result, flatten(val, base ? `${base}.${key}` : key));
    else result[base ? `${base}.${key}` : key] = val;
  }
  return result;
}

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any) {
  return item && typeof item === "object" && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(
  target: Record<string, any>,
  ...sources: Record<string, any>[]
) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}
