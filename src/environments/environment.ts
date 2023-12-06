import {HttpHeaders} from "@angular/common/http";

export const environment = {
  backendUrl: 'http://localhost:8080',
  httpOptions: {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Basic YWRtaW46MTIzNA=='
    })
  }
};
