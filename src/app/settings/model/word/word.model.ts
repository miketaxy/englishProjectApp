
export class Word{
  isEditing: boolean = false;
  id!: number;
  constructor(public word: string, public translate: string) {
  }
}
