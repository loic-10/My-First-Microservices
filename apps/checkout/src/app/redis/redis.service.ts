import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class RedisService {
  constructor(
    // @InjectRepository(KafkaError)
    // private readonly kafkaRepository: Repository<KafkaError>,
    @Inject('KAFKA_SERVICE') private client: ClientKafka
  ) {}

  async emit(topics: string[], key: string, value: any) {
    for (const topic of topics) {
      await this.client.emit(topic, {
        value: JSON.stringify({ key, value }),
      });
    }
  }

  async save(data: any) {
    // return this.kafkaRepository.save(data);
  }
}
