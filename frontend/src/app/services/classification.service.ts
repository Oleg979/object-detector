import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassificationDTO } from '../models/classification-dto';

@Injectable()
export class ClassificationService {
  private static BACKEND_URL = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  public getClassification(files: FileList): Observable<ClassificationDTO> {
    const imgToUpload = files.item(0);
    const formData = new FormData();
    formData.append('file', imgToUpload, imgToUpload.name);
    return this.http.post<ClassificationDTO>(
      ClassificationService.BACKEND_URL,
      formData
    );
  }
}
