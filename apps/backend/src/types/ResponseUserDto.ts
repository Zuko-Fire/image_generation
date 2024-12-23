import { Exclude } from "class-transformer";

export class ResponseUserDto {
  login: string
  @Exclude()
  password: string
  imagePath: string
  createdAt?: Date
  updatedAt?: Date
}