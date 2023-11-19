
export class Word{
  id!: number;
  isEditing: boolean = false;
  constructor(public word: string, public translate: string){
  }
}
