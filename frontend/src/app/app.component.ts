import { Component, OnInit } from '@angular/core';
import { ClassificationService } from './services/classification.service';
import { ClassificationDTO } from './models/classification-dto';
import { map, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  public resultOfClassification: string;
  public isLoading = false;
  public progressValue = 40;
  public isFirstTime = true;
  public isError = false;

  constructor(private classificationService: ClassificationService) {}

  ngOnInit(): void {
    document.querySelector('.load-button').addEventListener('click', () => {
      document.getElementById('form').click();
    });
  }

  public onImageSelected(files: FileList): void {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      (document.getElementById('selected') as any).src = reader.result;
    };
    this.isLoading = true;
    const interval = setInterval(() => {
      this.progressValue = this.progressValue + 2;
    }, 30);
    this.isError = false;
    this.isFirstTime = false;
    this.classificationService
      .getClassification(files)
      .pipe(
        map((response: ClassificationDTO) => {
          return response.class;
        }),
        finalize(() => {
          this.isLoading = false;
          this.progressValue = 40;
          clearInterval(interval);
        })
      )
      .subscribe(
        (res: string) => {
          this.resultOfClassification = res;
        },
        (_) => {
          this.isError = true;
        }
      );
  }
}
