import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post
        author="John Doe"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat odio dolores consequuntur cupiditate recusandae ipsa necessitatibus fugit hic vero, asperiores quidem placeat error quam sequi, qui veniam rem. Ducimus."
      />
      <Post
        author="John Doe 2"
        content="A new nice post."
      />
    </div>
  )
}