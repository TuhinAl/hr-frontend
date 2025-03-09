export function stringContain(
  fullString: string, containString: string, isCaseSensitive: boolean = true): boolean {
  if (isCaseSensitive === false) {
    return fullString.toLowerCase().indexOf(containString.toLowerCase()) >= 0;
  }
  return fullString.indexOf(containString) >= 0;
}

export function convertEnumTextToNormalText(name: string): string {
  const list = name.split("_");
  let formattedName = ''
  for (const x in list) {
    formattedName += capitalizeFirstLetter(list[x]) + ' ';
  }
  return formattedName.trim();
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * separate by a string
 * */
export function separator(text: string, separator: string): Array<string> {
  return text.split(separator);
}

/**
 * i live in dhaka > I_LIVE_IN_DHAKA
 */

export function snakeCase(sentence): string {
  return sentence.trim().replace(/ /g, '_').toLocaleUpperCase();
}
