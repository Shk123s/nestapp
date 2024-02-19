import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Controller('/user')
export class UserController {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
 
  @Get("/")
  async getHello() {
    try {
      
      const allUsers = await this.prisma.user.findMany();

     
      return allUsers;
    } catch (error) {
   
      console.error('Error fetching users:', error);
      throw new Error('Failed to fetch users');
    }
  }
}
