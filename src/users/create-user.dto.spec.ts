import { validate } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

describe('CreateUserDto', () => {
  let dto = new CreateUserDto();

  beforeEach(() => {
    dto = new CreateUserDto();
    dto.email = 'test@test.com';
    dto.name = 'Piotr';
    dto.password = '123456';
  });

  it('should valicate complete valid data', async () => {
    const errors = await validate(dto);

    expect(errors.length).toBe(0);
  });

  it('should fail on invalid email', async () => {
    dto.email = 'test';

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    console.log(errors);
    expect(errors[0].property).toBe('email');
    expect(errors[0].constraints).toHaveProperty('isEmail');
  });
});
