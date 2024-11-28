import { BASE_API_EXAMPLE, GET_EXAMPLE } from "../constants/url";
import {
  IExampleGetDataPayload,
  IExampleGetDataRaw,
  IExampleGetDataRepository
} from "../entities/example";

export class ExampleRepository {
  async getList(
    payload: IExampleGetDataPayload
  ): Promise<IExampleGetDataRepository> {
    const limit = 10;
    const offset = ((payload.page ?? 1) - 1) * limit;
    const resp = await fetch(
      `${BASE_API_EXAMPLE}${GET_EXAMPLE}?offset=${offset}&limit=${limit}`
    );
    if (resp.status == 200) {
      const data = (await resp.json()) as IExampleGetDataRaw;
      return {
        data: data.results,
        status: {
          code: resp.status,
          message: "Success get data",
        },
        meta: {
          count: data.count,
          page: payload.page ?? 1,
        },
      };
    }
    return {
      data: null,
      status: {
        code: resp.status,
        message: resp.statusText,
      },
      meta: null,
    };
  }
}
