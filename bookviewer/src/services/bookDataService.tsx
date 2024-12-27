import axios from "axios"
import { BookData } from '../types'
const baseUrl = '/api'


const fetchBookData = () => {
  try {
    return axios.get<BookData>(`${baseUrl}/toc`)
    .then(response => response.data)
  } catch (e: unknown) {
    console.error(`Fetching book data failed: ${e}`)
  }
}

const fetchChapterData = (chapterTitle: string) => {
  try {
    console.log(chapterTitle)
    return axios.get<string>(`${baseUrl}/${chapterTitle}`)
      .then(response => response.data)
  } catch (e: unknown) {
    console.error(`Fetching chapter data failed: ${e}`)
  }

}


export {
  fetchBookData,
  fetchChapterData
}
