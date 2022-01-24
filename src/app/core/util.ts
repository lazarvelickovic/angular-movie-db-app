export class Util {
  static generateRandomId(): string {
    return Math.random().toString(36).slice(2);
  }
}
