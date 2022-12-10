import { IsDate, IsUrl, IsNotEmpty, IsString } from 'class-validator';
export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}
export class UpdateBrandDto {
  @IsString()
  readonly name?: string;
  @IsString()
  readonly image?: string;
}
