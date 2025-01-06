import { Header } from "./Components/Header.js";
import { Post, PostType } from "./Components/Post.js";
import { Sidebar } from "./Components/Sidebar.js";

import styles from "./App.module.css";
import "./global.css";


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/vithor-silva.png',
      name: "Vithor Martins Silva",
      role: "Desenvolvedor Front-End"
    },
    content: [
      { type: 'paragraph', content: 'Opaaa Galera' },
      { type: 'paragraph', content: 'Acabei de subir um projeto novo no meu portifólio, estava estudando a algum tempo  sobre React JS e decidi por os conceitos aprendidos em prática.'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-10-07 20:34')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: "Diego Fernandes",
      role: "Desenvolvedor Full Stack"
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal' },
      { type: 'paragraph', content: 'Acabei de subir um projeto novo no meu portifólio, estava estudando a algum tempo  sobre React JS e decidi por os conceitos aprendidos em prática.'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-10-16 22:47')
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  );
}
