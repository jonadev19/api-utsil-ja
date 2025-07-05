import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useValue: {
        // Database connection configuration
        host: 'localhost',
        port: 5432,
        database: 'mydb',
        user: 'user',
        password: 'password',
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}
