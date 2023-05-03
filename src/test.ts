import { Injectable } from "@nestjs/common";

@Injectable()
export class testando {
  getHello(): string {
    return 'Hello from the new package!'
  }
}
