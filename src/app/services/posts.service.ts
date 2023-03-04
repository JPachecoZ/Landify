import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiURI: string = 'https://jsonplaceholder.typicode.com'
  private localPosts: Post[]=[]
  private localPostsSubject = new BehaviorSubject<Post[]>(this.localPosts)
  constructor(
    private http: HttpClient
  ) { }

  getLocalPostsFromUserId(){
    return this.localPostsSubject.asObservable()
  }

  getPostsFromUserId(id: number){
    return this.http.get<any[]>(`${this.apiURI}/users/${id}/posts`)
  }

  addPost(data: Post){
    this.localPosts.unshift(data)
    this.localPostsSubject.next(this.localPosts)
    return this.http.post<Post>(`${this.apiURI}/posts`, data)
  }
}
