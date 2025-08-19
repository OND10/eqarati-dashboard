export class Helper {
  static getKeyByValue<T extends Record<string, number>>(
    map: T,
    value: number
  ): string {
    const entry = Object.entries(map).find(([_, v]) => v === value);
    return entry ? entry[0] : "غير معروف";
  }
}
