import {TranslatedData} from "./translated-data.model";

export class TranslationResponse{
  constructor(public response: string, public data: TranslatedData) {
  }
}
