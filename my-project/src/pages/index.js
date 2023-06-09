import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <form className='container mt-5'>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder='Имя' />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder='Фамилия' />
      </div>
      <button type="submit" className="btn btn-primary">Отправить</button>
    </form>
  )
}
