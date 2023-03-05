import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.sass'],
})
export class PostsListComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  @Input() userId!: number;
  @Output() openDialogEvent = new EventEmitter();

  posts: Post[] = [];
  ngOnInit(): void {
    this.postsService.getPostsFromUserId(this.userId).subscribe((data) => {
      this.posts = [...this.posts, ...data];
    });
    this.postsService.getLocalPostsFromUserId().subscribe((data) => {
      this.posts = [...data, ...this.posts];
    });
  }

  openDialog() {
    this.openDialogEvent.emit();
  }
}
