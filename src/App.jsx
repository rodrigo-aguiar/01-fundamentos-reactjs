import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
          author="John Doe"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat odio dolores consequuntur cupiditate recusandae ipsa necessitatibus fugit hic vero, asperiores quidem placeat error quam sequi, qui veniam rem. Ducimus."
          />
          <Post
            author="John Doe 2"
            content="A new nice post."
          />
        </main>
      </div>
    </div>
  )
}