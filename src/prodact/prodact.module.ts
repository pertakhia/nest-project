import { Module } from '@nestjs/common';
import { ProdactController } from './prodact.controller';
import { ProdactService } from './prodact.service';

@Module({
  controllers: [ProdactController],
  providers: [ProdactService]
})
export class ProdactModule {}
