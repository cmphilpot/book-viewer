import axios from "axios"
import { BookData } from '../types'
const baseUrl = '/api'


const fetchBookData = async (): Promise<BookData> => {
  try {
    return axios.get<BookData>(`${baseUrl}/toc`)
    .then(response => response.data)
  } catch (e: unknown) {
    console.error(`Fetching book data failed: ${e}`);
    throw e;
  }
}

const fetchChapterData = async (chapterTitle: string): Promise<string> => {
  try {
    console.log(chapterTitle)
    return axios.get<string>(`${baseUrl}/${chapterTitle}`)
      .then(response => response.data)
  } catch (e: unknown) {
    console.error(`Fetching chapter data failed: ${e}`);
    throw e;
  }

}


export {
  fetchBookData,
  fetchChapterData
}
