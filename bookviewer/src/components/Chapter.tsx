import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchChapterData } from '../services/bookDataService'
import { ChapterProps } from '../types'

function HomeButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')}>Go to Table of Contents</button>
  );
}

const Chapter = ({chapters}: ChapterProps ): JSX.Element => {
  const name = useParams().name;
  const [text, setText] = useState<string>('');
  const [chapterTitle, setChapterTitle] = useState<string>('')

  const standardizeTitle = (url: string) => {
    if (url === 'the red-headed league') return 'The Red-headed League'

    return url.split(" ")
              .map(word => word[0].toUpperCase() + word.slice(1))
              .join(" ");
  }

  useEffect(() => {
    if (name) {
      fetchChapterData(name)
      .then(textData => {
        setText(textData)
      })
    }

    const currentChapterTitle = standardizeTitle(name)
    setChapterTitle(currentChapterTitle)
  }, [name])

  return (
    <>
      <HomeButton />
      <h2>{chapterTitle}</h2>
      {text.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p> )}
    </>
  )
}

export default Chapter
