import { ResponseDTO } from "src/controllers/response/response-dto";

export const buildResponseOK = ( data: any ): Promise<ResponseDTO> => {
    return new Promise( resolve => {
        const response = new ResponseDTO(200, data);
        resolve(response);
    });
}