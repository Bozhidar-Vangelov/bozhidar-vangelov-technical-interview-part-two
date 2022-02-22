export const getEntries = (object, parentKey = '') =>
  Object.entries(object).flatMap(([key, value]) => {
    if (typeof value === 'object') {
      return getEntries(value, `${key} `);
    }

    return [[`${parentKey}${key}`, value]];
  });

export const getDifferences = (a, b) =>
  Object.entries(a)
    .map(([key, value]) => {
      if (b[key] !== value) {
        return { [key]: b[key] };
      }

      return false;
    })
    .filter(Boolean)
    .reduce((result, current) => ({ ...result, ...current }), {});
