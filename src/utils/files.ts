export function remove_non_ascii(str: string) {
  if (!str) return "";
  return str.toString().replace(/[^\x20-\x7E]/g, '');
}
