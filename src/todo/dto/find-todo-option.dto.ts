import {
  IsBoolean,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class FindTodoOptionDto {
  @IsBoolean()
  @IsOptional()
  onlyMine = true;

  @IsBoolean()
  @IsOptional()
  now = false;

  @IsNumber()
  @IsOptional()
  page = 1;

  @IsNumber()
  @IsOptional()
  count = 10;

  @IsIn(['ASC', 'DESC'])
  sort: 'ASC' | 'DESC' = 'DESC';

  @IsString()
  @IsOptional()
  userid: string;
}
