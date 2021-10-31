export function prefix(location, ...prefixes) {
  return prefixes.some(
    (prefix) => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export const nav = () => {
  // The nav is always active
  return true;
};

export const deposits = (location) => prefix(location, "deposits");

export const expenses = (location) => prefix(location, "expenses");
