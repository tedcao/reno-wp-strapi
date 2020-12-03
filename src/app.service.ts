import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AppService {
  async immigrate(): Promise<any> {
    const result = await axios.get(
      'https://renocompass.ca/wp-json/wp/v2/posts?page=1',
    );
    console.log(result);
    return result;
  }
}
