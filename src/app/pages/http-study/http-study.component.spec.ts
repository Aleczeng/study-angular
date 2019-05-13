import {HttpStudyComponent} from './http-study.component';
import {PostService} from '../../service/post.service';
import {empty, from, Observable} from 'rxjs';

describe('HttpStudyComponent', () => {
  let component: HttpStudyComponent;
  let postService: PostService;

  beforeEach(() => {
    postService = new PostService(null);
    component = new HttpStudyComponent(postService);
  });

  it('should get all from server', () => {
    spyOn(postService, 'getAll').and.callFake(() => {

      // If you are using rxjs >=6.0.0 then you no longer use Observable.from. Instead from is a standalone function.
      return from([[
        {id: 1, title: 'a'},
        {id: 2, title: 'b'},
        {id: 3, title: 'c'},
      ]]);

      component.ngOnInit();

      expect(component.posts.length).toBeGreaterThan(0);
    });
  });

  it('should delete a post from server', () => {
    const spy = spyOn(postService, 'delete').and.returnValue(empty());
    component.deletePost(1);
    expect(spy).toHaveBeenCalled();
  });

});
