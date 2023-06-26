import styles from './page.module.css'

export default function Home() {
  return (
    <main>
       <h1>Hello World</h1>
       <div>
        <label htmlFor='email'>Email: </label>
        <input id="email"/>
       </div>
       <div>
        <label htmlFor='password'>Password: </label>
        <input id="password"/>
       </div>
       <button>Click here</button>
    </main>
  )
}
