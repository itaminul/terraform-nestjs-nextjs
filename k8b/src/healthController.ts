import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';

@Controller('health') // Paths will be /health/liveness and /health/readiness
export class HealthController {
  constructor(
    private health: HealthCheckService,
    // private db: TypeOrmHealthIndicator, // Use MongooseHealthIndicator if using MongoDB
  ) {}

  // LIVENESS: Fast check just to prove the server is running.
  // Do NOT check the database here.
  @Get('liveness')
  @HealthCheck()
  checkLiveness() {
    return { status: 'ok' }; 
  }

  // READINESS: Deep check. If the DB goes down, we temporarily 
  // pull this pod out of the load balancer.
  // @Get('readiness')
  // @HealthCheck()
  // checkReadiness() {
  //   return this.health.check([
  //     () => this.db.pingCheck('database'), 
  //   ]);
  // }
}
