import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { ResetPasswordDto } from './dto/reset-password.dto';
@Injectable()
export class AuthService {
  [x: string]: any;
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && await bcrypt.compare(password, user.password)) {  // Use bcrypt.compare() to compare
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username: user.username, sub: user.id };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.REFRESH_TOKEN_SECRET,
      expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
    });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user: user,
    };
  }

  async refreshToken(token: string) {
    try {
      const payload = this.jwtService.verify(token, {
        secret: process.env.REFRESH_TOKEN_SECRET,
      });

      const user = await this.usersService.findOne(payload.sub);
      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      const newPayload = { username: user.username, sub: user.id };
      const accessToken = this.jwtService.sign(newPayload, {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
      });

      return {
        access_token: accessToken,
      };
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const { username, branchName, newPassword, confirmPassword } = resetPasswordDto;
  
    // Check if the passwords match
    if (newPassword !== confirmPassword) {
      throw new BadRequestException('Passwords do not match.');
    }
  
    try {
      // Find user by username and branch name
      const user = await this.usersService.findByUsernameAndBranchName(username, branchName);
      if (!user) {
        throw new UnauthorizedException('User with the specified username and branch not found.');
      }
  
      if (!user.allowResetPassword) {
        throw new BadRequestException('Password reset is not allowed for this user.');
      }
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      // Update the user's password in the database
      await this.usersService.update(user.id, { password: hashedPassword });
  
      return { message: 'Password reset successfully.' };
  
    } catch (error) {
      // Log the error to debug if needed
      console.error('Error resetting password:', error.message);
  
      // Return specific error messages based on error type
      if (error instanceof UnauthorizedException) {
        throw new UnauthorizedException(error.message || 'User not found.');
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message || 'Password reset is not allowed for this user.');
      } else {
        throw new BadRequestException('An unexpected error occurred. Please try again later.');
      }
    }
  }
  
  
}
