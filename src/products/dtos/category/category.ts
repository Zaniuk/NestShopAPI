import { IsString, IsNotEmpty } from 'class-validator';
export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly image: string;
}
export class UpdateCategoryDto {
  @IsString()
  readonly name?: string;
  @IsString()
  readonly image?: string;
}
