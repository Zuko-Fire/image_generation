import { isNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MaxLength(255)
  login: string;
  @IsString()
  @MaxLength(255)
  @MinLength(6)
  password: string;
  @IsOptional()
  imagePath?: string;
  @IsOptional()
  createdAt?: Date;
  @IsOptional()
  updatedAt?: Date;
}