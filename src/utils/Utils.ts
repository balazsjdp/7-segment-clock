const RANDOM_ID_LENGTH = 8;
const CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export class Utils {
  public static generateId(): string {
    let result = '';

    for (let i = 0; i < RANDOM_ID_LENGTH; i++) {
      const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
      result += CHARACTERS.charAt(randomIndex);
    }

    return result;
  }

  public static appendChildToElement(
    parent: HTMLElement,
    type: string,
    className: string,
    id: string
  ): void {
    const newDiv = document.createElement(type);
    newDiv.className = className;
    newDiv.id = id;
    parent?.appendChild(newDiv);
  }
}
