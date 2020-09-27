import { Injectable } from "@angular/core";

@Injectable()
export class Constant {
  PROTOCOL = 'http';
  HOST = 'localhost';
  PORT = 4200;
  BASE_URL = `${this.PROTOCOL}://${this.HOST}:${this.PORT}`;
}
