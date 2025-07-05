// Example decorator to get the current user from the request
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // This would typically come from your authentication middleware
    return request.user || null;
  },
);
