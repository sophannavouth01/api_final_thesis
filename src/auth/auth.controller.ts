import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 200, description: 'User has successfully logged in.' })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('refresh-token')
  @ApiOperation({ summary: 'Refresh access token' })
  @ApiResponse({ status: 200, description: 'Access token has been successfully refreshed.' })
  @ApiResponse({ status: 401, description: 'Invalid refresh token.' })
  refreshToken(@Body('refresh_token') refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }

  @Post('reset-password')
  @ApiOperation({ summary: 'Reset password for user' })
  @ApiResponse({ status: 200, description: 'Password has been successfully reset.' })
  @ApiResponse({ status: 400, description: 'Password reset is not allowed for this user.' })
  async resetPassword(@Body('email') email: string, @Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(email, resetPasswordDto);
  }
}
