import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from "@angular/common/http";
import { Observable, ReplaySubject } from "rxjs";
import { catchError, switchMap, tap } from "rxjs/operators";

@Injectable()
export class RequestQueueInterceptor implements HttpInterceptor {
  private queue: ReplaySubject<any>[] = [];

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const requestQueueItem$ = new ReplaySubject<any>();
    const result$ = requestQueueItem$.pipe(
      switchMap(() =>
        next.handle(request).pipe(
          tap((req) => {
            if (req.type == HttpEventType.Response) {
              this.processNextRequest();
            }
          }),
          catchError((err) => {
            const confirmed = confirm("Retrying request ...");

            this.processNextRequest();
            if (confirmed) {
              this.intercept(request, next).subscribe();
            }
            throw err;
          })
        )
      )
    );
    this.queue.push(requestQueueItem$);

    if (this.queue.length <= 1) {
      this.dispatchRequest();
    }

    return result$;
  }

  private processNextRequest(): void {
    if (this.queue && this.queue.length > 0) {
      this.queue.shift();
    }
    this.dispatchRequest();
  }

  private dispatchRequest(): void {
    if (this.queue.length > 0) {
      const nextSub$ = this.queue[0];
      nextSub$.next();
      nextSub$.complete();
    }
  }
}
